import styled from "styled-components";

export const BannerSection = styled.section`
    height: 100vh;
    background-color: ${({theme}) => theme.colors.dark };
    padding: 0rem calc((100vw - 1300px) / 2);
    //background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url({@/assets/images/main-background.png});
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(https://ramen-house.vercel.app/assets/main-background-11eec801.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 680px;
    color: ${({theme}) => theme.colors.light };
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    & div {
        margin-bottom: 1rem;
        letter-spacing: 3px;
        width: 100% !important;
    }
    & h1 {
        font-size: clamp(2rem,15vw,5rem)!important;
        text-align: left;
        margin-bottom: 6px;
    }
    & p {
        font-size: clamp(1.5rem, 6vw, 2.5rem);
        margin: 2rem 0;
    }

    & button {
        font-size: clamp(1.2rem, 5vw, 1.5rem);
        padding: 1rem 4rem;
        font-weight: 600;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 100%;
    }
`