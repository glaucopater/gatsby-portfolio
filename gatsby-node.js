exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                src
                srcSet
                sizes
                aspectRatio
                originalName
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    createPage({
      path: `/random-v1/`,
      component: require.resolve("./src/templates/RandomSvgImageTemplate.tsx"),
      context: {
        images: result.data.allImageSharp.edges,
      },
    });
  });
};
