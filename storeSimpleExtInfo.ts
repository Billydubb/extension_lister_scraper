import prisma from "./prisma.js"
import puppeteer from 'puppeteer';
import {formatNumberOfRatings} from './formatNumberOfRatings.js';

export async function storeSimpleExtInfo(simpleExtInfo) {

    if(!simpleExtInfo) {
      return
    }

    await simpleExtInfo.forEach(async idAndInfo => {
      await prisma.extensions.upsert({
        where: {
          id: idAndInfo.id
        },
        update: {
          id: idAndInfo.id,
          name: idAndInfo.name,
          rating: idAndInfo.rating,
          numberOfRatings: formatNumberOfRatings(idAndInfo.numberOfRatings),
          shortDescription: idAndInfo.shortDescription,
          category: idAndInfo.category
        },
        create: {
          id: idAndInfo.id,
          name: idAndInfo.name,
          rating: idAndInfo.rating,
          numberOfRatings: formatNumberOfRatings(idAndInfo.numberOfRatings),
          shortDescription: idAndInfo.shortDescription,
          category: idAndInfo.category
        },
      })
    })
}




