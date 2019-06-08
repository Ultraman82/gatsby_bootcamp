const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log("on CreateNode slug: ", slug)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogTemplate = path.resolve("./src/templates/blog.js")
    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(res => {
        res.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
      })
    )
    return
  })
}

/* module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.fields.slug) {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }
  })
} */
