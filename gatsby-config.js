module.exports = {
  siteMetadata: {
    description: "Personal page of Sina Moraddar",
    locale: "en",
    showThemeLogo: false,
    title: "Sina Moraddar",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("classic")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
