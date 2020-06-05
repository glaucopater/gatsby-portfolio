import styled from "styled-components";
import { Link } from "gatsby";
import { MAXWIDTH } from "../../styles/constants";


export const SCHeader = styled.header`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil; 
  margin: 0 1rem;
`;

export const SCTitle = styled.h1`
  margin: 0 auto;
  max-width: ${MAXWIDTH};
  margin: 0 2rem;
`;

export const SCDescription = styled.h2`
  margin: 0 2rem;
`;