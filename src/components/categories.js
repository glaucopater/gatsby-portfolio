import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const CategoriesComponent = () => {
  return (
    <StaticQuery
      query={graphql`
        query allCategoriesQuery {
          source: allFile {
            edges {
              node {
                relativeDirectory
              }
            }
          }
        }
      `}
      render={data => {
        const categories = Array.from(
          new Set(data.source.edges.map(e => e.node.relativeDirectory))
        )
        return categories.map((category, index) => (
          <li key={index}>
            Category: <Link to={`/galleries/${category}`}> {category}</Link>
          </li>
        ))
      }}
    />
  )
}
export default CategoriesComponent
