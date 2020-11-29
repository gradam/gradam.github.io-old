require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteTitleAlt: `Jakub Semik`,
    siteTitle: `Jakub Semik Portfolio`,
    siteHeadline: `Jakub Semik Portfolio`,
    siteUrl: `https://semik.dev`,
    siteDescription: `Jakub Semik's porftfolio website and blog`,
    siteLanguage: 'en-US',
    siteImage: '',
    author: `Jakub Semik`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jakub Semik`,
        short_name: `Jakub Semik`,
        description: `Jakub Semik's porftfolio website and blog`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#08fdd8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
