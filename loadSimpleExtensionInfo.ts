import prisma from "./prisma"

export async function loadSimpleExtensionInfo(batchSize: number, skip: number = 0) {
  const extensions = await prisma.extensions.findMany({
    skip: skip,
      take: batchSize,
    });

    skip += batchSize;

  return extensions
}




