import styled from "styled-components";

export const ButtonStyled = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: 2px solid ${({theme}) => theme.colors.primary}; 
    color: ${({theme}) => theme.colors.primary};
    transition: 0.2s ease-out;
    background: transparent;
    font-weight: bold;

    &:hover {
        color: ${({theme}) => theme.colors.dark};
        overflow-y: auto;
        box-shadow: 0px 0px 15px ${({theme}) => theme.colors.primary};
        background: ${({theme}) => theme.colors.primary};
        cursor: pointer;
    }
`