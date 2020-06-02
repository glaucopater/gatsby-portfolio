import styled from "styled-components";
import { SCLink } from "../../styles/common";


interface IProps {
    isCollapsed: boolean;
};

export const SCCollapseMenu = styled.div<IProps>`
    transition: all 1s ease;
    overflow: hidden;
    flex-basis: ${props => props.isCollapsed ? "5%;" : "25%;"};
    display: flex;
`;

export const SCExpand = styled.div<IProps>`
    margin: 0 1rem;
    transition: all 1s ease;
    text-transform: uppercase;
    opacity: 0.5;

    @media (min-width: 878px) {
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
    :hover {
        cursor: pointer;
        opacity: 1;
    } 

    :after {
        font-size: 30px;
        ${props => props.isCollapsed ? "content: '+';" : "content: 'x';"};
    }
`;

export const SCMenuContent = styled.div<IProps>`
    transition: all 1s ease;
    padding: 8px 0;
    ${props => props.isCollapsed ? "opacity: 0;" : "opacity: 1;"};
`;

export const SCMenuList = styled.ul`
    list-style-type: none;
    margin: 1rem 0;
`;

export const SCMenuLink = styled(SCLink)`
    margin-left: 1rem;
`;

