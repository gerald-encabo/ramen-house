import styled from "styled-components";

export const MenuContainer = styled.section`
    width: 100vw;
    height: auto;
    padding: 2rem calc((100vw - 1300px)/2);
    background: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.light};
    padding-top: 50px;

    & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`