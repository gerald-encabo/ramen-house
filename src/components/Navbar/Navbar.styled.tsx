import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    font-weight: 700;
    width: 100%;
    background-color: transparent;
    position: absolute;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        height: 70px;
    }
`

export const NavbarCart = styled.div`
    color: ${({theme}) => theme.colors.light};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    & span {
        font-size: 1.5rem;
        padding: 0 5px;
    }

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        font-size: 1rem;

        & span {
            font-size: 1.4rem;
        }
    }
`

export const NavbarMenu = styled(NavbarCart)``

export const NavbarQuantity = styled.span`
    position: absolute;
    top: -8px;
    left: 65px;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.dark};
    height: 18px;
    width: 18px;
    border-radius: 50%;
    font-size: .8rem !important;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        left: 53px;
    }
`

export const NavbarLogo = styled.div`
    color: ${({theme}) => theme.colors.light};
    font-size: 2rem;
    padding: 0 20px 4px;
    box-shadow: ${({theme}) => theme.colors.primary} 2px 4px;
`

export const NavbarLogoContainer = styled.p`
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const NavbarLogoName = styled.span`
    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        display: none;
    }
`

export const NavbarLogoIcon = styled.span`
 font-size: 2.5rem;
    margin: 0 10px;
    
    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        font-size: 2rem;
    }
`

