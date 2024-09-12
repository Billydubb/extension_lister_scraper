import prisma from "./prisma"

export async function loadSimpleExtensionInfo(batchSize) {
  let skip = 0;
  let hasMore = true;

  // while (hasMore) {
    const extensions = await prisma.extensions.findMany({
      skip: skip,
      take: batchSize,
    });

    // if (extensions.length === 0) {
    //   hasMore = false;
    //   break;
    // }

    // console.log(`Fetched ${extensions.length} extensions:`, extensions);

    skip += batchSize;
  // }

  
  await prisma.$disconnect();
  return extensions
}




