import { logger } from "./logger.js"
import prisma from "./prisma.js"

export async function storeDetailedExtensions(detailedExtensions) {
  for (const extension of detailedExtensions) {
    try {
      await prisma.extensions.upsert({
        where: {
          id: extension.id
        },
        update: {
          id: extension.id,
          name: extension.name,
          rating: extension.rating,
          numberOfRatings: extension.numberOfRatings,
          // Details:
          shortDescription: extension.shortDescription,
          numberOfUsers: Number(extension.numberOfUsers),
          category: extension.category,
          longDescription: extension.longDescription,
          languages: JSON.stringify(extension.languages),
          lastUpdated: new Date(extension.lastUpdated),
          websiteUrl: extension.websiteUrl,
          version: extension.version,
          isFeatured: !!extension.isFeatured,
          offersInAppPurchases: extension.offersInAppPurchases
        },
        create: {
          id: extension.id,
          name: extension.name,
          rating: extension.rating,
          numberOfRatings: extension.numberOfRatings,
          shortDescription: extension.shortDescription,
          // Details:
          numberOfUsers: Number(extension.numberOfUsers),
          category: extension.category,
          longDescription: extension.longDescription,
          languages: JSON.stringify(extension.languages),
          lastUpdated: new Date(extension.lastUpdated),
          websiteUrl: extension.websiteUrl,
          version: extension.version,
          isFeatured: !!extension.isFeatured,
          offersInAppPurchases: extension.offersInAppPurchases
        },
      })
    } catch (error) {
      logger.error(`Error upserting extension ${extension.id}:`, error)
    }
  }
}




