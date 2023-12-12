import styled from 'styled-components';

export const TitleStyled = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    margin-right: auto;
    margin-left: auto;
    box-shadow: ${({theme}) => theme.colors.primary } 2px 4px;
    max-width: 100%;
    width: 25%;

    & > h1 {
        padding: 0 20px 4px;
        font-size: 2rem;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.laptop }) {
        width: 30%;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.tablet }) {
        width: 40%;
    }

    @media (max-width: ${({theme}) => theme.mediaQuery.mobile }) {
        width: 70%;

        & > h1 {
            font-size: 1.8rem;

        }
    }
`