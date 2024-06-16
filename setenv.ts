import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const baseUrl = process.env['BASE_URL'];
const imageUrl = process.env['IMAGE_URL'];

if (!baseUrl || !imageUrl) {
    throw new Error('BASE_URL and IMAGE_URL must be set in .env file');
}

const environment = `export const environment = {
    production: false,
    baseUrl: '${baseUrl}',
    imageUrl: '${imageUrl}'
};`;

writeFileSync('./src/environments/environment.ts', environment);