import React from "react";
import Layout from "../components/layout";
import PhotosSection from "../components/PhotosSection";
import SEO from "../components/seo";
import CollapseMenu from "../components/Menu";
import { SCPageContent } from "../styles/common";

const BwPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Street: black and white"
        keywords={[`glimpse`, `portfolio`, `photography`, `glauco pater`, `street`, `black and white`]}
        meta={[]}
      />
      <SCPageContent>
        <CollapseMenu />
        <PhotosSection style={{ flex: 1 }} section="bw" title={"Street: black and white"} />
      </SCPageContent>
    </Layout >
  );
};

export default BwPage;
