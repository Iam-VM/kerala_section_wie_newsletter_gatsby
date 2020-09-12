module.exports = {
  siteMetadata: {
    title: `WIE Echoes`,
    description: `WIE Echoes - Newsletter of IEEE Women In Engineering (WIE) Affinity Group (AG) Kerala Section (KS).`,
    author: `Vishnu Mohanan aka Iam-VM`,
    theme: `#070723`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WIE Echoes - IEEE WIE Kerala Section`,
        short_name: `WIE Echoes`,
        start_url: `/`,
        background_color: `#070723`,
        theme_color: `#070723`,
        display: `minimal-ui`,
        icon: `src/images/echoes-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
