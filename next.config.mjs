/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    images: {
        domains: ["buggyriders.com", "res.cloudinary.com"], // ✅ allow external image host
    },
    outputFileTracingRoot: path.join(__dirname, '.'),
};

export default nextConfig;
