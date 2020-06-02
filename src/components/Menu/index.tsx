import React from "react";
import { SCLink } from "../../styles/common";
import { SCMenuList, SCCollapseMenu, SCExpand, SCMenuContent } from "./styles";

const CollapseMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SCCollapseMenu isCollapsed={isCollapsed}>
      <SCExpand onClick={handleClick} isCollapsed={isCollapsed} title={isCollapsed ? "Expand" : "Collapse"}>
        {isCollapsed ? "Menu" : " "}
      </SCExpand>
      {!isCollapsed &&
        <SCMenuContent isCollapsed={isCollapsed}>
          <h3 style={{ margin: "0px 1rem" }}>Street Photography</h3>
          <SCMenuList>
            <li key="bw"><SCLink style={{ margin: "0px 1rem" }} to="/bw">Black and white </SCLink></li>
            <li key="color"><SCLink style={{ margin: "0px 1rem" }} to="/color">Color Street</SCLink></li>
          </SCMenuList>
          <h3 style={{ margin: "0px 1rem" }}>Concepts</h3>
          <SCMenuList>
            <li key="abstract"><SCLink style={{ margin: "0px 1rem" }} to="/abstract">Abstract</SCLink></li>
          </SCMenuList>
        </SCMenuContent>}

    </SCCollapseMenu>
  );
};

export default CollapseMenu;
