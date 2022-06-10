const withPWA = require('next-pwa');

module.exports = withPWA({
    crossOrigin: 'anonymous',
    crossOriginIsolated: false,
    images: {
        domains: ['cdn.discordapp.com']
    },
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == 'development'
    },
    async redirects() {
        return [
            {
                source: '',
                destination: '',
                permanent: true
            }
        ];
    }
});
