import styled from "styled-components";

export const MenuSidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.639);
    z-index: 99999;
    transition: 0.3s ease-in-out;
`

export const MenuSidebarWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    width: 500px;
    height: 100%;
    z-index: 999999;
    background: ${({theme}) => theme.colors.tertiary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    transition: 0.3s ease-in-out;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 100%;
    }
`

export const MenuSidebarCloseBtn = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;  
    color: ${({theme}) => theme.colors.light};
    transition: 0.6s ease-in-out;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        rotate: 3.1416rad;
        filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
    }
`

export const MenuSidebarList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        list-style: 0.2s ease-in-out;
        text-decoration: none;
        color: ${({theme}) => theme.colors.light};
        cursor: pointer;
        
        &:hover {
            color: ${({theme}) => theme.colors.primary};
            filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
            transition: 0.2s ease-in-out;
        }
    }
`