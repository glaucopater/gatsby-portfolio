import React from "react"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SEO from "../components/seo"
import CategoriesComponent from "../components/categories"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        meta={[]}
      />
      <h1>Welcome to my portfolio</h1>
      <Gallery />
      <h2>Images by categories</h2>
      <CategoriesComponent />
    </Layout>
  )
}

export default IndexPage
