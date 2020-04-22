import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { SCLink, SCListItem, SCList } from "./styles"

export type CategoriesType = string[]

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
      render={(data) => {
        const categories: CategoriesType = Array.from(
          new Set(
            data.source.edges.map(
              (e: { node: { relativeDirectory: any } }) =>
                e.node.relativeDirectory
            )
          )
        )
        const categoriesItems = categories.map((category, index) => (
          <SCListItem key={index}>
            <SCLink to={`/galleries/${category}`}>{category}</SCLink>
          </SCListItem>
        ))
        return <SCList>{categoriesItems}</SCList>
      }}
    />
  )
}
export default CategoriesComponent
