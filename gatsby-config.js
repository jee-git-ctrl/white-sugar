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
        name: "img",
        path: `${__dirname}/src/pages/img/`,
      },
    },
    "gatsby-transformer-json",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
};