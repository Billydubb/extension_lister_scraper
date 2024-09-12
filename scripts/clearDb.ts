import prisma from "../prisma";

export async function clearExtensionsTable() {

    if(process.env.NODE_ENV === 'production') {
        console.log('Not clearing extensions table in production via script. Do it manually you dumb fuck.');
        return;
    }

    try {
      await prisma.extensions.deleteMany({});
      console.log('Extensions table cleared successfully.');
    } catch (error) {
      console.error('Error clearing extensions table:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  

clearExtensionsTable();
  