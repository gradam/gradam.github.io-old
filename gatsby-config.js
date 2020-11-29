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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog_assets`,
        path: `${__dirname}/static/blog_assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              staticFolderName: 'static/blog_assets',
              name: 'blog_assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-image-attributes`,
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
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
