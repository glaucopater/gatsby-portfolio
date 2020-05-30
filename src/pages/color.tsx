import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PhotosSection from "../components/PhotosSection";

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
