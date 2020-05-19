// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(
//     `
//       query AllFileQuery {
//         allFile {
//           edges {
//             node {
//               id
//               name
//               relativeDirectory
//             }
//           }
//         }
//       }
//     `
//   ).then((result) => {
//     result.data.allFile.edges.forEach(({ node }) => {
//       createPage({
//         // Decide URL structure
//         path: `galleries/${node.relativeDirectory}`,
//         // path to template
//         component: path.resolve(`./src/templates/GalleryPage.tsx`),
//         context: {
//           relativeDirectory: node.relativeDirectory,
//         },
//       })
//     })
//   })
// }
