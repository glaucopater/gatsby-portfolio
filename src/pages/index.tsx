import React from "react";
import Layout from "../components/layout";
import { SCLink } from "../styles/common";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <div style={{
        display: "flex",
        justifyContent: "center",
        flex: 1
      }}>
      </div>
      <h2 style={{ margin: "0px 1rem" }}>Street photography</h2>
      <ul>
        <li><SCLink style={{ margin: "0px 1rem" }} to="/bw">Black and white 📸</SCLink></li>
        <li><SCLink style={{ margin: "0px 1rem" }} to="/color">Color 📸</SCLink></li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
