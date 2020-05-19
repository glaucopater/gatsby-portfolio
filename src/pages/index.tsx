import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"
import PhotosSection from "../components/PhotosSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <PhotosSection />
    </Layout>
  )
}

export default IndexPage
