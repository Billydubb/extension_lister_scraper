// pathUtils.js
import path from 'path';
import { fileURLToPath } from 'url';
// ROOT_DIR will be the directory where your package.json resides
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '.');

export { ROOT_DIR };