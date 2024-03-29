import styled from "styled-components";

export const CartSidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000000a3;
    width: 100%;
    height: 100%;
    z-index: 99999;
`

export const CartSidebarWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    z-index: 999999;
    text-align: right;
    background: ${({theme}) => theme.colors.tertiary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: ${({theme}) => theme.colors.light};

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 100%;
    }
`

export const CartSidebarCloseBtn = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;    
    transition: 0.6s ease-in-out;
    display: flex;
    justify-content: center;
    
    &:hover {
        color: ${({theme}) => theme.colors.primary};
        filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
        rotate: 3.1416rad;
    }
`

export const CartSidebarList = styled.div`
    flex-direction: column;
    width: 100%;
    padding: 20px;
    justify-content: center;
    height: calc(100vh - 250px);
    overflow-y: scroll;
    position: absolute;
    top: 70px;

    h2 {
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        margin-top: 100px;
    }
`

export const CartSidebarInfo = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
    background-color: ${({theme}) => theme.colors.$tertiary};
    position: absolute;
    bottom: 0;
    padding: 20px 0;
`

export const CartSidebarTotalandPrice = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

export const CartSidebarTotalPrice = styled.span`
    color: ${({theme}) => theme.colors.$light};
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 30px;
`

export const CartSidebarTotalQuantity = styled(CartSidebarTotalPrice)``
