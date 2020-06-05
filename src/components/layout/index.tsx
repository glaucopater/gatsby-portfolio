import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../header/index";
import Footer from "../footer/index";
import "./layout.css";
import { SCPagecontent } from "./styles";

const Layout = ({ children }: { children: any; }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            description
            author
            version
          }
        }
      }
    `}
    render={(data) => (
      <>
        {/* <Sticky top={100} child={
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />}>
        </Sticky>1 */}
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <SCPagecontent>
          <main>{children}</main>
        </SCPagecontent>
        <Footer data={data} />
      </>
    )}
  />
);

export default Layout;
