import styled from "styled-components";
import { SCLink } from "../../styles/common";

export const SCFooter = styled.footer`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SCCopyright = styled.div`
  max-width: 960px;
`;

export const SCDisclaimer = styled(SCLink)`
  &:hover {
    text-shadow: 1px 1px 1px #11111150;
  }
`;
