import React from "react"
import { SCFooter, SCCopyright, SCDisclaimer } from "./styles"

const Footer = ({ data }: { data: any }) => (
  <SCFooter>
    <SCCopyright>
      {`Copyright © ${new Date().getFullYear()} ${data.site.siteMetadata.author}`}
      <SCDisclaimer to={"/disclaimer"}>Disclaimer</SCDisclaimer>
    </SCCopyright>
  </SCFooter>
)

export default Footer
