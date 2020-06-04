import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Disclaimer"
      keywords={[`glimpse`, `portfolio`, `photography`, `glauco pater`]}
      meta={[]}
      lang="en" />
    <h2 style={{ margin: "0 1rem" }}>Disclaimer</h2>
    <div style={{ margin: "0 1rem" }}>
      <h3>Liability for content</h3>
      <p>
        The contents of our pages have been created with the utmost care. However,
        we cannot guarantee the contents’ accuracy, completeness or topicality.
        According to statutory provisions, we are furthermore responsible for our
        own content on these web pages. In this context, please note that we are
        accordingly not obliged to monitor merely the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity.
      </p>
      <h3>Liability for links</h3>
      <p>
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No violations
        were evident to us at the time of linking. Should any legal infringement
        become known to us, we will remove the respective link immediately.
    </p>
      <h3>Copyright</h3>
      <p>
        Reproduction, editing, distribution as well as the use of any kind outside
        the scope of the copyright law require a written permission of the author
        or originator. Downloads and copies of these websites are permitted for
        private use only.
    </p>
      <h3>
        The commercial use of our contents without permission of the originator is
        prohibited.
    </h3>
      <p>
        Copyright laws of third parties are respected as long as the contents on
        these websites do not originate from the provider. Contributions of third
        parties on this site are indicated as such. However, if you notice any
        violations of copyright law, please inform us. Such contents will be
        removed immediately.
    </p>
    </div>
  </Layout>
);

export default NotFoundPage;
