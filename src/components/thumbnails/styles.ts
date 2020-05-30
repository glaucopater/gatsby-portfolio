import styled from "styled-components";
import Img from "gatsby-image";

export const ButtonBase = styled.div``;

export const SCThumbnail = styled(Img)`
  width: 200px;
  height: 200px;
  cursor: pointer;
  margin: 4px;
  transition: all 0.5s ease-out 0s;
  opacity: 0.8;
  @media (max-width: 500px) {
    width: 500px;
    height: auto;
    margin: 8px 0;
   }
`;

export const SCPreviewButton = styled.div`
  display: inline-block;
  background: transparent;
  border: none;
  padding: 0;
  margin: 8px;
  width: 200px;
  height: 200px;
  borderradius: 4px;
  boxshadow: 0 0 15px -5px rgba(0, 0, 0, 0.3);
`;
