import styled from "styled-components";

export const CartSidebarItemListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    align-content: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};

    img {
        width: 80px;
        height: 80px;
        box-shadow: ${({theme}) => theme.colors.primary} 3px 5px;
    }
`

export const CartSidebarItemListInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    text-align: center;

    h4 { 
        font-size: clamp(1rem, 1.1rem, 1.2rem);
        font-weight: 600;
        margin-bottom: 15px;
    }
`

export const PriceandQuantity = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    justify-content: space-around;

    h6 {
        font-size: 18px;
    }
`

export const CartSidebarQuantity = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.light};
    padding: 6px 10px;
    margin-bottom: 10px;
    justify-content: space-around;
    width: 100%;
    align-items: center;
`

export const IncreaseBtn = styled.span`
    font-size: 20px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    color: ${({theme}) => theme.colors.dark};
    padding: 4px;
    font-weight: 600;
    display: flex;

    &:hover {
        background-color: ${({theme}) => theme.colors.light};
        cursor: pointer;
    }
`

export const DecreaseBtn = styled(IncreaseBtn)``

export const TotalQuantity = styled.span`
    margin: 0 20px;
    padding: 5px;
    font-size: 20px;
`

export const DeleteBtn = styled.div`
    cursor: pointer;
    font-size: 20px;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        filter: drop-shadow(0px 0px 15px ${({theme}) => theme.colors.primary});
    }
`

