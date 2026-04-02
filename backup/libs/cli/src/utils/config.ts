import { join } from 'path';
import { readFileSync } from 'fs';
import { getPackageRoot } from './paths.js';

export interface PackageConfig {
    name: string;
    version: string;
    description: string;
}

let cachedConfig: PackageConfig | null = null;

/**
 * Reads package.json to get version and other metadata
 */
export function getPackageConfig(importMetaUrl: string): PackageConfig {
    if (cachedConfig) {
        return cachedConfig;
    }

    const packageRoot = getPackageRoot(importMetaUrl);
    const packageJsonPath = join(packageRoot, 'package.json');

    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

    cachedConfig = {
        name: packageJson.name,
        version: packageJson.version,
        description: packageJson.description
    };

    return cachedConfig;
}
