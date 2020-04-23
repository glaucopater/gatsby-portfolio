/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "../header"
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
          <footer>
            Copyright © {new Date().getFullYear()}{" "}
            {data.site.siteMetadata.author} |
            <Link to={"/disclaimer"}>Disclaimer</Link>
          </footer>
        </SCPagecontent>
      </>
    )}
  />
)

export default Layout
