export default function manifest() {
  return {
    name: 'Buggy Riders Dubai - Desert Adventures',
    short_name: 'Buggy Riders',
    description: 'Premier dune buggy rental and desert adventure tours in Dubai',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FA822C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}