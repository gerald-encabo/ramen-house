import styled from "styled-components";

export const MenuDetailCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.639);
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
`

export const DetailCardTile = styled.div`
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.secondary};
    box-shadow: ${({theme}) => theme.colors.primary} 6px 8px;
    width: 45vw;
    height: 60vh;
    margin: 0 auto;
    padding: 20px;
    position: relative;

    @media (max-width: ${({theme}) => theme.mediaQuery.laptop }) {
        width: 65vw;
        height: 70vh;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        width: 75vw;
        height: 80vh;
        flex-direction: column;
        padding: 0;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        padding: 0;
    }
`

export const CloseBtn = styled.div`
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
    justify-content:center;
    align-items:center;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
        rotate: 3.1416rad;
    }
`

export const TileLeftSide = styled.div`
    overflow: hidden;
    box-shadow: 5px 7px ${({theme}) => theme.colors.primary};
    height: 300px;
    width: 300px;
    margin: 0;
    padding: 0;
    margin-right: 5%;

    & > img {
        height: 100%;
        min-width: 100%;
        max-width: 100%;
        overflow: hidden;
        box-shadow: ${({theme}) => theme.colors.primary} 6px 8px;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        margin-right: 0;
    }
    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 90%;
    }
`
export const TileRightSide = styled.div`
    width: 55%;

    & > p:not(:first-child) {
        padding-bottom: 10px;
    }

    & > p > span {
        font-weight: 600;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        width: 90%;
        margin-top: 10%;
    }
`
export const TileTitle = styled.p`
    font-size: clamp(1.4rem, 1.6rem, 1.8rem);
    font-weight: 600;
    border-left: 2px solid ${({theme}) => theme.colors.primary};
    border-bottom: 4px solid ${({theme}) => theme.colors.primary};
    padding: 0 0 5px 7px;
    margin-bottom: 20px;
    width: 100%;
`
export const TileDesc = styled.p`
    font-size: clamp(.8rem, 1rem, 1.2rem);
`
export const TileCategory = styled(TileDesc)``
export const TilePrice = styled(TileDesc)``

export const TileBtn = styled.div`
    margin-top: 10px;
`
