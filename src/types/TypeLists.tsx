export enum SelectedMenu {
    Special = "Special",
    Ramen = "Ramen",
    Side = "Side",
    Dessert = "Dessert",
    Drink = "Drink"
}

export interface ProductDataType {
    id: number,
    name: string,
    desc: string,
    img: any,
    alt: string,
    price?: number,
    title?: string,
    category?: string
}

export interface ProductProps {
    id: string,
    heading: string
}

export interface TitleProps {
    heading: string
}

export interface ProductCardProps {
    data: ProductDataType,
    prodCategory?: string,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>> 
}
  
export interface ButtonProps {
    button: string
}

export interface TypeState {
    cartItems: CartItem[],
    totalQuantity: number,
    totalAmount: number
}

export interface CartItem {
    id: number,
    name: string,
    img?: any,
    price: number,
    quantity: number,
    totalPrice: number
}

export interface RootState {
    cart: any,
    isOn: boolean
}

export interface NavbarButton {
    handleCartSidebar: React.MouseEventHandler<HTMLDivElement>,
    handleMenuSidebar: React.MouseEventHandler<HTMLDivElement>
}

export interface CartSidebarButton {
    handleCartSidebar: React.MouseEventHandler<HTMLDivElement>
}

export interface MenuSidebarButton {
    handleMenuSidebar: React.MouseEventHandler<HTMLDivElement> | undefined | any
}