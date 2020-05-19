/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import "./layout.css"
import { SCPagecontent } from "./styles"

const Layout = ({ children }: { children: any }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SCPagecontent>
          <main>{children}</main>
        </SCPagecontent>
        <Footer data={data} />
      </>
    )}
  />
)

export default Layout
