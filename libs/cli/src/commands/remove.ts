import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import { logger } from '../utils/logger.js';

export function removeCommand(): Command {
    const command = new Command('remove');

    command
        .argument('[components...]', 'components to remove')
        .description('Remove components from your project')
        .option('-d, --dry-run', 'Show what would be removed without making changes')
        .action(async (components: string[], options: { dryRun?: boolean }) => {
            try {
                const uiPath = path.resolve(process.cwd(), 'src', 'app', 'ui');

                if (!fs.existsSync(uiPath)) {
                    logger.error('src/app/ui directory not found.');
                    process.exit(1);
                }

                // Get installed components
                const installedComponents = fs.readdirSync(uiPath, { withFileTypes: true })
                    .filter(entry => entry.isDirectory() && entry.name !== 'node_modules')
                    .map(entry => entry.name);

                if (installedComponents.length === 0) {
                    logger.info('No components installed.');
                    process.exit(0);
                }

                let componentsToRemove: string[] = [];

                // If no components specified, show interactive selection
                if (!components || components.length === 0) {
                    const answers = await inquirer.prompt([
                        {
                            type: 'checkbox',
                            name: 'components',
                            message: 'Select components to remove:',
                            choices: installedComponents,
                            validate: (input: string[]) => {
                                if (input.length === 0) {
                                    return 'Please select at least one component.';
                                }
                                return true;
                            }
                        }
                    ]);
                    componentsToRemove = answers.components;
                } else {
                    // Validate specified components
                    const invalidComponents = components.filter(c => !installedComponents.includes(c));

                    if (invalidComponents.length > 0) {
                        logger.error(`Components not found: ${invalidComponents.join(', ')}`);
                        logger.info(`Installed: ${installedComponents.join(', ')}`);
                        process.exit(1);
                    }

                    componentsToRemove = components;
                }

                if (options.dryRun) {
                    logger.info('Dry run mode - no changes will be made\n');
                }

                let removedCount = 0;

                for (const component of componentsToRemove) {
                    const targetPath = path.join(uiPath, component);

                    if (options.dryRun) {
                        logger.info(`Would remove: ${component}`);
                        removedCount++;
                    } else {
                        try {
                            fs.removeSync(targetPath);
                            removedCount++;
                            logger.success(`Removed: ${component}`);
                        } catch (error) {
                            logger.error(`Failed to remove component "${component}"`);
                            if (error instanceof Error) {
                                logger.debug(error.message);
                            }
                        }
                    }
                }

                if (!options.dryRun && removedCount > 0) {
                    removeFromIndexFile(uiPath, componentsToRemove);
                }

                if (options.dryRun) {
                    logger.info(`\nDry run complete. Would remove ${removedCount} component(s).`);
                } else {
                    logger.success(`\nRemoved ${removedCount} component(s).`);
                }

            } catch (error) {
                if (error instanceof Error) {
                    logger.error(`Failed to remove components: ${error.message}`);
                    logger.debug(error.stack || '');
                } else {
                    logger.error('Failed to remove components due to an unknown error.');
                }
                process.exit(1);
            }
        });

    return command;
}

function removeFromIndexFile(uiPath: string, components: string[]): void {
    const indexPath = path.join(uiPath, 'index.ts');

    if (!fs.existsSync(indexPath)) {
        return;
    }

    let content = fs.readFileSync(indexPath, 'utf8');
    let hasChanges = false;

    for (const component of components) {
        const exportLine = `export * from './${component}/${component}.component';\n`;
        const indexLine = `export * from './${component}/index';\n`;

        if (content.includes(exportLine)) {
            content = content.replace(exportLine, '');
            hasChanges = true;
        }
        if (content.includes(indexLine)) {
            content = content.replace(indexLine, '');
            hasChanges = true;
        }
    }

    if (hasChanges) {
        // Remove extra blank lines
        content = content.replace(/\n\n+/g, '\n');
        fs.writeFileSync(indexPath, content);
        logger.info(`Updated: src/app/ui/index.ts`);
    }
}
