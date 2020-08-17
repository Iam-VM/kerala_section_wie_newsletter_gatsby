exports.createPages = async({actions, graphql, reporter}) => {
  const {createPage} = actions;
  const collegePageTemplate = require.resolve(`./src/templates/collegePage.js`);

  const result = await graphql(`
        {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on gatsby_node.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: collegePageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

}
