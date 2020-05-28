import styled from "styled-components";

export const SCInnerColor = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    flex: 1;
`;

export const SCDominant = styled.span`
    border-width: 1px ;
    border-style: solid;
    border-color: #fffeee;     
    background-color: ${(props) => props.color ? props.color : "transparent"};
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;
