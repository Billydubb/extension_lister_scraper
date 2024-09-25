import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the current file's directory (where pathUtils.js resides)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to walk up directories until package.json is found
function findRootDir(startDir: string) {
    let currentDir = startDir;

    while (true) {
        // Check if package.json exists in the current directory
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            return currentDir; // Stop here if package.json is found
        }

        // Go up one directory
        const parentDir = path.dirname(currentDir);

        // If we are at the root of the filesystem, stop to prevent infinite loop
        if (parentDir === currentDir) {
            throw new Error('package.json not found in any parent directory.');
        }

        currentDir = parentDir; // Move up to the parent directory
    }
}

// Resolve ROOT_DIR by starting from __dirname and walking upwards
const ROOT_DIR = findRootDir(__dirname);

export { ROOT_DIR };