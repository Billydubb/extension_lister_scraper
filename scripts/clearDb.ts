import { logger } from "../logger";
import prisma from "../prisma";

export async function clearExtensionsTable() {

    if(process.env.NODE_ENV === 'production') {
        logger.info('Not clearing extensions table in production via script. Do it manually you dumb fuck.');
        return;
    }

    try {
      await prisma.extensions.deleteMany({});
      logger.info('Extensions table cleared successfully.');
    } catch (error) {
      logger.error('Error clearing extensions table:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  

clearExtensionsTable();
  