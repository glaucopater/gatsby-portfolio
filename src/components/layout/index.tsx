import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../Header";
import Footer from "../Footer";
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
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
        <SCPagecontent>
          <main>{children}</main>
        </SCPagecontent>
        <Footer data={data} />
      </>
    )}
  />
);

export default Layout;
