import React from "react";
import { SCFooter, SCCopyright, SCDisclaimer } from "./styles";

const Footer = ({ data }: { data: any; }) => (
  <SCFooter>
    <SCCopyright>
      {`Copyright © ${new Date().getFullYear()} ${data.site.siteMetadata.author}`}
    </SCCopyright>
    <SCDisclaimer to={"/disclaimer"}>Disclaimer</SCDisclaimer>
  </SCFooter>
);

export default Footer;
