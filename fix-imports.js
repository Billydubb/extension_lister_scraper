import { replaceInFile } from 'replace-in-file';

// Updated regex to match both './' and '../' for relative paths
const addJsExtensionOptions = {
  files: 'dist/**/*.js',  // Target all .js files in the dist folder, including subdirectories
  // Match import paths that start with ./ or ../, and don't already end with .js, .ts, .json, etc.
  from: /(?<=from\s+['"])(\.\.?\/[^'"]+?)(?=['"])/g,
  to: (match) => {
    // Only add .js if it doesn't already have an extension
    return /\.(js|ts|json)$/.test(match) ? match : `${match}.js`;
  },
};

// Options to fix chrome-webstore-next import paths
const fixChromeWebstoreNextOptions = {
  files: 'dist/**/*.js',
  from: '../../chrome-webstore-next/node_modules/',  // Original relative path in TypeScript
  to: '../../../chrome-webstore-next/node_modules/',  // Adjusted path for the dist folder
};

(async () => {
  try {
    // Apply .js extension replacement
    const addJsResults = await replaceInFile(addJsExtensionOptions);
    console.log('JS extension replacement results:', addJsResults);

    // Apply chrome-webstore-next import path fix
    const fixPathResults = await replaceInFile(fixChromeWebstoreNextOptions);
    console.log('Chrome-webstore-next path fix results:', fixPathResults);
    
  } catch (error) {
    console.error('Error occurred during post-build processing:', error);
  }
})();