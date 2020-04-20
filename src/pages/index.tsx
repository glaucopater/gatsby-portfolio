import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        meta={[]}
      />
      <h1>Welcome to my portfolio</h1>
      <h2>Images by categories</h2>
      <Categories />
    </Layout>
  )
}

export default IndexPage
