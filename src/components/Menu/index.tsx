import React from "react";
import { SCLink } from "../../styles/common";
import { SCMenuList, SCCollapseMenu, SCExpand, SCMenuContent, SCMenuLink, SCMenuSection } from "./styles";

const CollapseMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SCCollapseMenu isCollapsed={isCollapsed}>
      {!isCollapsed &&
        <SCMenuContent isCollapsed={isCollapsed}>
          <SCMenuSection>
            <h3 style={{ margin: "0px 1rem" }}>Street Photography</h3>
            <SCMenuList>
              <li key="bw"><SCMenuLink to="/bw">Black and white </SCMenuLink></li>
              <li key="color"><SCMenuLink to="/color">Color</SCMenuLink></li>
            </SCMenuList>
          </SCMenuSection>
          <SCMenuSection>
            <h3 style={{ margin: "0px 1rem" }}>Concepts</h3>
            <SCMenuList>
              <li key="abstract"><SCMenuLink to="/abstract">Abstract</SCMenuLink></li>
            </SCMenuList>
          </SCMenuSection>
        </SCMenuContent>
      }
    </SCCollapseMenu>
  );
};

export default CollapseMenu;
