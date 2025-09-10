/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/dunebuggy', // URL shown in the browser
                destination: '/',     // Actual page to render
            },
            {
                source: '/quadbike',    // URL in browser
                destination: '/',       // Render index page
            },
            {
                source: '/desertadventure', // URL in browser
                destination: '/',           // Render index page
            },
        ];
    },
};

export default nextConfig;
