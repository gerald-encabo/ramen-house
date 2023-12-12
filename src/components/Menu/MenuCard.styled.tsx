import styled from "styled-components";

export const MenuCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const MenuCardWrapper = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        margin: 0;
    }
`
export const MenuCardImg = styled.div`
    overflow: hidden;
    box-shadow: 5px 9px ${({theme}) => theme.colors.primary};
    height: 300px;
    width: 300px;
    margin: 0;
    padding: 0;

    & img {
        height: 300px;
        min-width: 300px;
        max-width: 100%;
    }

    & img:hover {
        transform: scale(1.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }
`
export const MenuCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
export const MenuCardName = styled.h2`
    font-weight: 400;
    font-size: clamp(1.2rem, 1.4rem, 1.6rem);
`
export const MenuCardDesc = styled.p`
    margin-bottom: 1rem;
    font-size: clamp(.8rem, 1rem, 1.2rem);
`
export const MenuCarPrice = styled.p`
    margin-bottom: 1rem;
    font-size: clamp(1rem, 1.2rem, 1.4rem);
`