import styled, { css } from "styled-components";

interface IProps {
  isSticky: boolean;
}

export const SCStickyWrapper = styled.div`
  position: relative;
  height: 5rem;
`;

export const SCStickyInner = styled.div<IProps>`
    ${props => props.isSticky ?
    css`position: fixed;
    height: 2rem;
    font-size: 15px;
    z-index: 1;
    background: blue;
    width: 100%;` : 'background: red;'};
`;;
