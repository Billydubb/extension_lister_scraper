import fs from 'fs/promises';
import path from 'path';
import { ROOT_DIR } from '../pathUtils';

const LOCK_FILE = path.join(ROOT_DIR, 'scraper_lock');
const MAX_LOCK_AGE = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

export async function acquireLock(): Promise<boolean> {
  try {
    const stats = await fs.stat(LOCK_FILE);
    const lockAge = Date.now() - stats.mtimeMs;

    if (lockAge > MAX_LOCK_AGE) {
      console.log('Lock file is old. Overwriting...');
      await writeLockFile();
      return true;
    }

    console.log('Recent lock file exists. Skipping.');
    return false;
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Lock file doesn't exist, create it
      await writeLockFile();
      return true;
    }
    console.error('Error checking lock file:', error);
    return false;
  }
}


export async function releaseLock(): Promise<void> {
  try {
    await fs.unlink(LOCK_FILE);
  } catch (error) {
    console.error('Error releasing lock:', error);
  }
}

async function writeLockFile(): Promise<void> {
  const timestamp = new Date().toISOString();
  await fs.writeFile(LOCK_FILE, timestamp);
}