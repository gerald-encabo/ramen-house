import styled from "styled-components";

export const SpecialContainer = styled.section`
    height: 100vh;
    max-height: 500px;
    width: 100%;

    .slick-dots {
        position: absolute;
        bottom: 0;
        margin-bottom: 20px;
    }

    .slick-dots li button:before {
        font-size: 10px;
        color: ${({theme}) => theme.colors.primary};
    }

    .slick-dots li.slick-active button:before {
        color: ${({theme}) => theme.colors.primary};
    }

    .slick-prev {
        position: absolute;
        color: ${({theme}) => theme.colors.primary};
        bottom: 0;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        height: auto;

        .slick-dots {
            margin-bottom: 10px;
        }
    }
`

export const SpecialWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const SpecialImg = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.light};
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(2rem, 4vw, 4rem);
        font-weight: 600;
        margin-bottom: 40px;
        box-shadow: ${({theme}) => theme.colors.primary} 3px 5px;
        padding: 0 50px 4px;
    }

    h3 {
        font-size: clamp(1.5rem, 2.2vw, 3rem);
        margin-bottom: 20px;
    }

    p {
        font-size: clamp(1rem, 1.5vw, 2rem);
        margin-bottom: 20px;
    }

    button {
        z-index: 99999;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        min-height: 300px;

        h1 {
            margin-bottom: 20px;
        }

        h3, p { 
            margin-bottom: 15px;
        }
    }
`

