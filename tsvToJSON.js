import fs from 'fs/promises';

async function tsvToJson(tsvContent) {
    const lines = tsvContent.split('\n');
    const headers = lines[0].split('\t');
    const jsonArray = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t');
        const jsonObject = {};

        for (let j = 0; j < headers.length; j++) {
            jsonObject[headers[j]] = values[j];
        }

        jsonArray.push(jsonObject);
    }

    return jsonArray;
}

async function convertTsvFileToJson(inputFilePath, outputFilePath) {
    try {
        const data = await fs.readFile(inputFilePath, 'utf-8');
        const jsonArray = await tsvToJson(data);
        const jsonContent = JSON.stringify(jsonArray, null, 2);

        await fs.writeFile(outputFilePath, jsonContent, 'utf-8');
        console.log('TSV file converted to JSON successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

const inputFilePath = 'input.tsv'; // Change this to your input TSV file path
const outputFilePath = 'output.json'; // Change this to the desired output JSON file path

convertTsvFileToJson(inputFilePath, outputFilePath);
