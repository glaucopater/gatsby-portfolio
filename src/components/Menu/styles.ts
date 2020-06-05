import styled from "styled-components";
import { SCLink } from "../../styles/common";
import { MD } from "../../styles/constants";


interface IProps {
    isCollapsed: boolean;
};

export const SCCollapseMenu = styled.div<IProps>`
    transition: all 1s ease;
    overflow: hidden;
    flex-basis: ${props => props.isCollapsed ? "5%;" : "25%;"};
    display: flex;
    ${props => props.isCollapsed ? "justify-content: flex-end;" : null};
    padding: 8px;
`;

export const SCExpand = styled.div<IProps>`
    margin: 0 1rem;
    transition: all 1s ease;
    text-transform: uppercase;
    opacity: 0.5;
    align-self: ${props => props.isCollapsed ? "flex-end;" : "flex-start;"};

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
    padding: 32px 0 32px 32px;
    ${props => props.isCollapsed ? "opacity: 0;" : "opacity: 1;"};

    @media (max-width: 878px) {
        padding: 8px 0;
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: stretch;
        justify-content: space-evenly;
        flex: 1;
        > div {
            flex: 1;
            padding: 8px;
        }
    }
    @media (max-width: ${MD}) {
        flex-direction: column;
    }
`;

export const SCMenuList = styled.ul`
    list-style-type: none;
    margin: 1rem 0;
`;

export const SCMenuLink = styled(SCLink)`
    margin-left: 1rem;
`;


export const SCMenuSection = styled.div`
`;