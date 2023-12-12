import { MenuCardProps, MenuDataType } from "@/types/TypeLists";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cartActions } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@/components/Button/Button";
import MenuDetailsCard from "@/components/Menu/MenuDetailsCard";
import { useState } from "react";
import { 
  MenuCards,
  MenuCardWrapper,
  MenuCardImg,
  MenuCardInfo,
  MenuCardName,
  MenuCardDesc,
  MenuCarPrice
} from "./MenuCard.styled";

const MenuCard = ({ data, prodCategory }: MenuCardProps) => {
  const dispatch = useDispatch();
  const { id, alt, img, name, price = 0, desc, category = '' } = data as MenuDataType;

  // Popup Menu Details Card
  const [open, setOpen] = useState<boolean>(false);

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
    <>
      {
        category.replace(/_/g, " ") === prodCategory ? (
        <MenuCards>
          <MenuCardWrapper>
            <MenuCardImg onClick={() => setOpen(!open)}>
              <LazyLoadImage
                src={img} 
                alt={alt}
                effect="blur"
                loading="lazy"
              />
            </MenuCardImg>
            <MenuCardInfo>
              <MenuCardName>{name}</MenuCardName>
              <MenuCardDesc>{desc.substring(0, 20)}...</MenuCardDesc>
              <MenuCarPrice>${price}</MenuCarPrice>
              <div onClick={addToCart}>
                <Button button="Add to Cart" />
              </div>
            </MenuCardInfo>
          </MenuCardWrapper>
        </MenuCards>
        ) : null
      }
      {
        open ? (
          <MenuDetailsCard 
            data={data} 
            setOpen={setOpen} 
          />
        ) : null
      }
    </>
  );
};
export default MenuCard;
