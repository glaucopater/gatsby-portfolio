import { Link } from "gatsby"
import React from "react"
import { SCFooter } from "./styles"

const Footer = ({ data }: { data: any }) => (
  <SCFooter
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0`,
        margin: `0 auto`
      }}
    >
      Copyright © {new Date().getFullYear()}{" "}{data.site.siteMetadata.author} | <Link
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
        to={"/disclaimer"}>Disclaimer</Link>
    </div>
  </SCFooter>
)

export default Footer
