module.exports = {
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
}
