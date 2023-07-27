/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `White Sugar`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `src/pages/data/`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src/pages`, `img`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
};