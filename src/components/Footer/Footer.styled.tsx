import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
    width: 100%;
    height: 80px;

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        height: 100%;
    }
`
export const FooterWrapper = styled.div`
    padding: 16px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color:${({theme}) => theme.colors.dark};
    }
`
export const FooterCompanyLogo = styled.div`
    display: flex;
    padding: 0 20px 4px;
    box-shadow: ${({theme}) => theme.colors.primary} 2px 4px;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.light};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
        padding-right: 5px;
    }

    a span {
        font-size: 30px;
        padding: 0 6px;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        margin: 4px 0;
    }
`

export const FooterReserved = styled.div`
    font-size: 16px;
    font-weight: 600;
    
    p { 
        text-align: center;
        line-height: 1.5rem;
        padding-top: 5px;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        margin: 4px 0;
    }
    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        padding: 0 20px  
    }
`

export const FooterSocialMedia = styled.div`
    padding: 0;
    margin: 0;

    ul {
        list-style: none;
        display: inline-flex;
        gap: 20px;
    }

    a {
        color: ${({theme}) => theme.colors.dark};
        font-size: 20px;
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 50%;
        padding: 8px;
        display: flex;
        cursor: pointer;
    }

    a:hover {
        background-color: ${({theme}) => theme.colors.light};
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        margin: 4px 0;
    }
`