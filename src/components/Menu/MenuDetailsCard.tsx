import { MenuCardProps, MenuDataType } from "@/types/TypeLists";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/CartSlice";
import { FaTimes } from 'react-icons/fa';
import Button from "@/components/Button/Button";
import { 
  MenuDetailCard,
  DetailCardTile,
  CloseBtn,
  TileLeftSide,
  TileRightSide,
  TileTitle,
  TileDesc,
  TileCategory,
  TilePrice,
  TileBtn
} from './MenuDetailsCard.styled';

const MenuDetailsCard = ({data, setOpen}: MenuCardProps) => {

  const dispatch = useDispatch();
  const { id, img, name, price = 0 } = data as MenuDataType;

  // Add item into redux store
  const addToCart = (): void => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        img,
        price,
        quantity: 1,
        totalPrice: price,
      })
    );
  };
  
  return (
    <MenuDetailCard onClick={ () => setOpen?.(!open) }>
      {
        <DetailCardTile>
          <CloseBtn onClick={ () => setOpen?.(!open) }>
            <FaTimes />
          </CloseBtn>
          <TileLeftSide>
            <img src={data.img} alt={data.alt} loading="lazy" />
          </TileLeftSide>
          <TileRightSide>
            <TileTitle>{data.name}</TileTitle>
            <TileDesc><span>Ingredients:</span> {data.desc}</TileDesc>
            <TileCategory><span>Category:</span> {data.category}</TileCategory>
            <TilePrice><span>Price:</span> ${data.price}</TilePrice>
            <TileBtn onClick={addToCart}>
                <Button button="Add to Cart" />
              </TileBtn>
          </TileRightSide>
        </DetailCardTile>
      }
    </MenuDetailCard>
  )
}
export default MenuDetailsCard