import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Gets the root directory of the package
 * This works correctly whether running from source or from installed npm package
 */
export function getPackageRoot(importMetaUrl: string): string {
    const __filename = fileURLToPath(importMetaUrl);
    const __dirname = dirname(__filename);

    // When running from dist/commands/*
    // We need to go up two levels: dist/commands -> dist -> package-root
    return join(__dirname, '../..');
}

/**
 * Gets the path to a template/boilerplate directory
 */
export function getTemplatePath(importMetaUrl: string, templateName: string): string {
    const packageRoot = getPackageRoot(importMetaUrl);
    return join(packageRoot, 'boilerplate', templateName);
}

/**
 * Gets the path to the UI components directory
 */
export function getComponentsPath(importMetaUrl: string): string {
    const packageRoot = getPackageRoot(importMetaUrl);
    return join(packageRoot, 'ui', 'src', 'components');
}
