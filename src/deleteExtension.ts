import prisma from "./prisma"
import { logger } from './logger';

export async function deleteExtension(extensionId: string) {
  if (!extensionId) {
    logger.warn("Attempted to delete extension with no ID provided");
    return;
  }

  try {
    // First, check if the extension exists
    const extension = await prisma.extensions.findUnique({
      where: {
        id: extensionId
      }
    });

    if (!extension) {
      logger.info(`Extension with ID ${extensionId} not found, no deletion necessary`);
      return;
    }

    // If the extension exists, delete it
    await prisma.extensions.delete({
      where: {
        id: extensionId
      },
    });

    logger.info(`Successfully deleted extension with ID ${extensionId}`);
  } catch (error: any) {
    logger.error(`Error deleting extension with ID ${extensionId}: ${error.message}`);
    // You might want to rethrow the error or handle it in some way depending on your use case
  }
}





