import React from "react";
import Layout from "../components/layout";
import PhotosSection from "../components/PhotosSection";
import SEO from "../components/seo";
import CollapseMenu from "../components/Menu";
import { SCPageContent } from "../styles/common";

const ColorPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Street: color"
        keywords={[`glimpse`, `portfolio`, `photography`, `glauco pater`, `street`, `color`]}
        meta={[]}
      />
      <SCPageContent>
        <CollapseMenu />
        <PhotosSection style={{ flex: 1 }} section="color" title={"Street: color"} />
      </SCPageContent>
    </Layout>
  );
};

export default ColorPage;
