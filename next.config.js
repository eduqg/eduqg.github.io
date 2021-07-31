const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  baseParh: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ]
  },
})
