import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import { logger } from '../utils/logger.js';
import { getAvailableComponents } from '../utils/components.js';
import { getComponentsPath } from '../utils/paths.js';

export function updateCommand(): Command {
    const command = new Command('update');

    command
        .argument('[components...]', 'components to update')
        .description('Update components to their latest version')
        .option('-a, --all', 'Update all installed components')
        .option('-d, --dry-run', 'Show what would be updated without making changes')
        .action(async (components: string[], options: { all?: boolean; dryRun?: boolean }) => {
            try {
                const uiPath = path.resolve(process.cwd(), 'src', 'app', 'ui');
                const componentsPath = getComponentsPath(import.meta.url);

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

                const availableComponents = getAvailableComponents(componentsPath);
                const updateableComponents = installedComponents.filter(c => availableComponents.includes(c));

                if (updateableComponents.length === 0) {
                    logger.warn('No updateable components found.');
                    process.exit(0);
                }

                let componentsToUpdate: string[] = [];

                if (options.all) {
                    componentsToUpdate = updateableComponents;
                } else if (!components || components.length === 0) {
                    // Interactive selection
                    const answers = await inquirer.prompt([
                        {
                            type: 'checkbox',
                            name: 'components',
                            message: 'Select components to update:',
                            choices: updateableComponents,
                            validate: (input: string[]) => {
                                if (input.length === 0) {
                                    return 'Please select at least one component.';
                                }
                                return true;
                            }
                        }
                    ]);
                    componentsToUpdate = answers.components;
                } else {
                    // Validate specified components
                    const invalidComponents = components.filter(c => !updateableComponents.includes(c));

                    if (invalidComponents.length > 0) {
                        logger.error(`Components not found or not updateable: ${invalidComponents.join(', ')}`);
                        logger.info(`Updateable: ${updateableComponents.join(', ')}`);
                        process.exit(1);
                    }

                    componentsToUpdate = components;
                }

                if (options.dryRun) {
                    logger.info('Dry run mode - no changes will be made\n');
                }

                let updatedCount = 0;

                for (const component of componentsToUpdate) {
                    const sourcePath = path.join(componentsPath, component);
                    const targetPath = path.join(uiPath, component);

                    if (!fs.existsSync(sourcePath)) {
                        logger.warn(`Source for component "${component}" not found. Skipping.`);
                        continue;
                    }

                    if (options.dryRun) {
                        logger.info(`Would update: ${component}`);
                        updatedCount++;
                    } else {
                        try {
                            // Backup the old component
                            const backupPath = `${targetPath}.backup`;
                            if (fs.existsSync(backupPath)) {
                                fs.removeSync(backupPath);
                            }
                            fs.moveSync(targetPath, backupPath);

                            try {
                                fs.copySync(sourcePath, targetPath);
                                fs.removeSync(backupPath);
                                updatedCount++;
                                logger.success(`Updated: ${component}`);
                            } catch (error) {
                                // Restore backup on failure
                                if (fs.existsSync(backupPath)) {
                                    fs.moveSync(backupPath, targetPath);
                                }
                                throw error;
                            }
                        } catch (error) {
                            logger.error(`Failed to update component "${component}"`);
                            if (error instanceof Error) {
                                logger.debug(error.message);
                            }
                        }
                    }
                }

                if (options.dryRun) {
                    logger.info(`\nDry run complete. Would update ${updatedCount} component(s).`);
                } else {
                    logger.success(`\nUpdated ${updatedCount} component(s).`);
                }

            } catch (error) {
                if (error instanceof Error) {
                    logger.error(`Failed to update components: ${error.message}`);
                    logger.debug(error.stack || '');
                } else {
                    logger.error('Failed to update components due to an unknown error.');
                }
                process.exit(1);
            }
        });

    return command;
}
