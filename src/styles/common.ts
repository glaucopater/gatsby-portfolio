import styled from "styled-components";
import { Link } from "gatsby";

export const SCLink = styled(Link)`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil;
  text-decoration: none;
  &:hover {
    text-shadow: 1px 1px 1px #11111150;
  }
`;

export const SCMain = styled.main`
  padding: 1.45rem 1.0875rem 0;
`;


export const SCPageContent = styled.div`
  display: flex;
  place-content: space-around;
  margin: 0 auto;
  flex-direction: row;
  @media (max-width: 878px) {
    flex-direction: column;
  }
`;