import styled from "styled-components"
import { Link } from "gatsby"

export const SCHeader = styled.header`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil; 
  margin: 3px;
`;

export const SCTitle = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 0 0; 
`;

export const SCLink = styled(Link)`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil;
  font-weight: 100;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  } 
`;