const { NOTION_DATABASE, NOTION_TOKEN } = process.env

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-notion-api",
      options: {
        databaseId: NOTION_DATABASE,
        token: NOTION_TOKEN,
      },
    },
    "gatsby-transformer-remark",
  ],
}
