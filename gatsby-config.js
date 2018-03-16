module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        // postCssPlugins: [somePostCssPlugin()],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-559851-16',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
