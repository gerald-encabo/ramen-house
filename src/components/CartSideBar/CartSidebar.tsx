import { FaTimes } from 'react-icons/fa';
import { CartSidebarButton, RootState } from "@/types/TypeLists";
import Button from '@/components/Button/Button';
import { useSelector } from 'react-redux';
import CartSidebarItemList from '@/components/CartSidebarItemList/CartSidebarItemList';
import { 
  CartSidebarContainer,
  CartSidebarWrapper, 
  CartSidebarCloseBtn,
  CartSidebarList,
  CartSidebarInfo,
  CartSidebarTotalandPrice,
  CartSidebarTotalPrice,
  CartSidebarTotalQuantity 
} from './CartSidebar.styled';

const CartSideBar = ({handleCartSidebar}: CartSidebarButton) => {

    // Get current value from redux store 
    const cartProducts = useSelector((state: RootState) => state.cart.cartItems)
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)
  
    return (
      <CartSidebarContainer>
        <CartSidebarWrapper>
          <CartSidebarCloseBtn onClick={handleCartSidebar}>
            <FaTimes />
          </CartSidebarCloseBtn>

          <CartSidebarList>
              {
                cartProducts.length === 0
                ? <h2 className="text-center m-5">No item added to the cart</h2> 
                : cartProducts.map((item: any, key: number) => (
                    <CartSidebarItemList item={item} key={key} />
                  ))
              }
          </CartSidebarList>

          <CartSidebarInfo>
              {
                cartProducts.length === 0
                ? ''
                : <>
                    <CartSidebarTotalandPrice >
                      <CartSidebarTotalQuantity >Quantity: {totalQuantity}</CartSidebarTotalQuantity>
                      <CartSidebarTotalPrice>Subtotal: ${Number(totalAmount).toFixed(2)}</CartSidebarTotalPrice>
                    </CartSidebarTotalandPrice>
                    <div onClick={handleCartSidebar}>
                      <Button button="Checkout" />
                    </div>
                  </>
              }
           </CartSidebarInfo>
          
        </CartSidebarWrapper>
      </CartSidebarContainer>
    )
  }
  export default CartSideBar