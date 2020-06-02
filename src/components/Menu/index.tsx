import React from "react";
import { SCLink } from "../../styles/common";
import { SCMenuList, SCCollapseMenu, SCExpand, SCMenuContent, SCMenuLink } from "./styles";

const CollapseMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SCCollapseMenu isCollapsed={isCollapsed}>
      {!isCollapsed &&
        <SCMenuContent isCollapsed={isCollapsed}>
          <h3 style={{ margin: "0px 1rem" }}>Street Photography</h3>
          <SCMenuList>
            <li key="bw"><SCMenuLink to="/bw">Black and white </SCMenuLink></li>
            <li key="color"><SCMenuLink to="/color">Color Street</SCMenuLink></li>
          </SCMenuList>
          <h3 style={{ margin: "0px 1rem" }}>Concepts</h3>
          <SCMenuList>
            <li key="abstract"><SCMenuLink to="/abstract">Abstract</SCMenuLink></li>
          </SCMenuList>
        </SCMenuContent>}
      <SCExpand onClick={handleClick} isCollapsed={isCollapsed} title={isCollapsed ? "Expand" : "Collapse"}>
        {isCollapsed ? "Menu" : " "}
      </SCExpand>
    </SCCollapseMenu>
  );
};

export default CollapseMenu;
