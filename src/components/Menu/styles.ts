import styled from "styled-components";


interface IProps {
    isCollapsed: boolean;
};


export const SCExpand = styled.div<IProps>`
    float: right;
    transition: all 1s ease;
    text-orientation: upright;
    writing-mode: vertical-rl;
    text-transform: uppercase;
    :hover {
        cursor: pointer;
    } 
    :before {
        font-size: 30px;
        ${props => props.isCollapsed ? "content: '+';" : "content: 'x';"};
    }
`;

export const SCCollapseMenu = styled.div<IProps>`
    transition: all 1s ease;
    overflow: hidden;
    flex-basis: ${props => props.isCollapsed ? "5%;" : "25%;"};
`;

export const SCMenuContent = styled.div<IProps>`
    transition: all 1s ease;
    padding: 8px 0;
    ${props => props.isCollapsed ? "opacity: 0;" : "opacity: 1;"};
`;

export const SCMenuList = styled.ul`
    list-style-type: none;
    margin: 1rem;
`;