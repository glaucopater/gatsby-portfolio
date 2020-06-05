import React from "react";
import { SCHeader, SCTitle, SCDescription } from "./styles";
import { SCLink } from "../../styles/common";

const Header = ({ siteTitle, description }: { siteTitle: string, description?: string; }) => (
  <SCHeader>
    <SCLink to="/">
      <SCTitle>
        {siteTitle}
      </SCTitle>
      <SCDescription>{description}</SCDescription>
    </SCLink>
  </SCHeader>
);

export default Header;
