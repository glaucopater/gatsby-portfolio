import styled from "styled-components";
import Img from "gatsby-image";

export const SCListItem = styled.li`
  list-style-type: none;
`;

export const SCList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SCImg = styled(Img)`
  display: inline-block;
  vertical-align: middle;
`;

export const SCImageCaption = styled.div`
    display: flex;
    flex-direction: row;
`;
