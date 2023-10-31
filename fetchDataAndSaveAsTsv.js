import axios from "axios";
import fs from 'fs/promises';


async function fetchDataAndSaveAsTsv(url, filePath) {
  try {
      const response = await axios.get(url);
      const data = response.data;

      // Assuming the data is in TSV format, directly save it to a .tsv file
      fs.writeFile(filePath, data, 'utf-8', (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log('Data saved as .tsv file:', filePath);
          }
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

const url = 'https://tortuga-prod-eu.s3-eu-west-1.amazonaws.com/%2FNinetyDays/amzn1.tortuga.4.eu.6c9857a7-f56f-4e73-823e-16de7a2942cb.TO87NYBS2XITM?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230828T151202Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIAX2ZVOZFBDFLJIPWD%2F20230828%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=8e5ed0ad1251ca65869452e8b2cd928e99bee777ca82f313acd38025d93e998e';
const filePath = 'data.tsv';

fetchDataAndSaveAsTsv(url, filePath);