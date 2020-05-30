import React from "react";
import Layout from "../components/layout";
import PhotosSection from "../components/PhotosSection";
import SEO from "../components/seo";

const ColorPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2 style={{ margin: "0 1rem" }}>Street / Color</h2>
      <PhotosSection section="color" />
    </Layout>
  );
};

export default ColorPage;
