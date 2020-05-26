import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SCLink, SCMain } from "../styles/common"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2 style={{ margin: "0px 1rem" }}>Curated Galleries:</h2>
      <ul>
        <li><SCLink style={{ margin: "0px 1rem" }} to="/nero">Nero (Black and white pictures)</SCLink></li>
        <li><SCLink style={{ margin: "0px 1rem" }} to="/color">Color</SCLink></li>
      </ul>
    </Layout>
  )
}

export default IndexPage
