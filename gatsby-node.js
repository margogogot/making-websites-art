
const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({node , actions}) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        });

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
              node,
              name: "authorId",
              value: slugify(node.frontmatter.author)
            });
        }
    }

    if(node.internal.type === 'AuthorsJson'){
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }

}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const templates =  {
        projectDetails: path.resolve('src/template/project-details.js'),
        artDetails: path.resolve('src/template/art-details.js'),
    }

    return graphql(`
        {
            allProjectJson {
                edges {
                    node {
                        id
                        title
                    }
                }
            },
            allArtStuffJson {
                edges {
                    node {
                        id
                        title
                    }
                }
            }

        }
    `).then( res => {
        if (res.errors) return Promise.reject(res.errors)
        const project = res.data.allProjectJson.edges

         // Create Project Page
         project.forEach(({ node }) => {
           console.log(node)
           console.log(`/project/${slugify(node.title)}`)
            createPage({
                path: `/project/${slugify(node.title)}`,
                component: templates.projectDetails,
                context: {
                    id: node.id
                }
            })
        })

        const artStuff = res.data.allArtStuffJson.edges

        artStuff.forEach(({node}) => {
          console.log(node)
          console.log(`/art/${slugify(node.title)}`)
          createPage({
              path: `/art/${slugify(node.title)}`,
              component: templates.artDetails,
              context: {
                  id: node.id
              }
          })
        })

    })

}
