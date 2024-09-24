import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co'],
    }
};

export default nextConfig;