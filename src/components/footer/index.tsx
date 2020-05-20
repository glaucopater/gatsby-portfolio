import React from "react"
import { SCFooter, SCLink, SCCopyright } from "./styles"

const Footer = ({ data }: { data: any }) => (
  <SCFooter>
    <SCCopyright>
      Copyright © {new Date().getFullYear()}{" "}{data.site.siteMetadata.author}
      <SCLink to={"/disclaimer"}>Disclaimer</SCLink>
    </SCCopyright>
  </SCFooter>
)

export default Footer
