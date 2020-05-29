import styled from "styled-components";

export const SCInnerColor = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    flex: 1;
    align-items: center;
    align-content: center;
`;

export const SCDominant = styled.span`
    border: 1px solid #fffeee;     
    background-color: ${(props) => props.color ? props.color : "transparent"};
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;
