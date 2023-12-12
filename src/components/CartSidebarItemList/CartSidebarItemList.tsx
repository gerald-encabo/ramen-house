import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/CartSlice";
import { 
  CartSidebarItemListContainer, 
  CartSidebarItemListInfo,
  PriceandQuantity,
  CartSidebarQuantity,
  IncreaseBtn,
  DecreaseBtn,
  TotalQuantity,
  DeleteBtn
} from "./CartSidebarItemList.styled";

const CartSidebarItemList = ({ item }: any) => {
  const { id, name, price, img, quantity } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        img,
        quantity: 1,
        totalPrice: price,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <CartSidebarItemListContainer>
      <img
        src={img}
        alt={name}
        width="70"
        height="70"
        loading="lazy"
      />
      
      <CartSidebarItemListInfo>
        <h4>{name}</h4>
        <PriceandQuantity>
          <h6>{quantity}x</h6>
          <span>${Number(price).toFixed(2)}</span>
        </PriceandQuantity>
        <CartSidebarQuantity>
          <IncreaseBtn onClick={incrementItem}>
            <AiOutlinePlus />
          </IncreaseBtn>
          <TotalQuantity>{quantity}</TotalQuantity>
          <DecreaseBtn onClick={decrementItem}>
            <AiOutlineMinus />
          </DecreaseBtn>
        </CartSidebarQuantity>
      </CartSidebarItemListInfo>

      <DeleteBtn  onClick={deleteItem}>
        <AiOutlineClose />
      </DeleteBtn>
    </CartSidebarItemListContainer>
  );
};
export default CartSidebarItemList;
