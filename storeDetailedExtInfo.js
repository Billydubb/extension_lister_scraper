import prisma from "./prisma.js"

export async function storeDetailedExtensions(detailedExtensions) {

  if(!detailedExtensions || detailedExtensions.length === 0) {
    return
  }

  await detailedExtensions.forEach(async extension => {    
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
        categories: JSON.stringify(extension.categories),
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
        categories: JSON.stringify(extension.categories),
        longDescription: extension.longDescription,
        languages: JSON.stringify(extension.languages),
        lastUpdated: new Date(extension.lastUpdated),
        websiteUrl: extension.websiteUrl,
        version: extension.version,
        isFeatured: !!extension.isFeatured,
        offersInAppPurchases: extension.offersInAppPurchases
      },
    })
  })
}




