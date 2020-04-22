import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2>Categories</h2>
      <Categories />
    </Layout>
  )
}

export default IndexPage
