import { ProductCardProps, ProductDataType } from "@/types/TypeLists";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cartActions } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import "@/styles/product-card.scss";
import Button from "@/components/Button";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { useState } from "react";

const ProductCard = ({ data, prodCategory }: ProductCardProps) => {
  const dispatch = useDispatch();
  const { id, alt, img, name, price = 0, desc, category = '' } = data as ProductDataType;

  // Popup Product Details Card
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
        <div className="product-card">
          <div className="product-card-wrapper">
            <div className="product-card-img" onClick={() => setOpen(!open)}>
              <LazyLoadImage
                src={img} 
                alt={alt}
                effect="blur"
                loading="lazy"
              />
            </div>
            <div className="product-card-info">
              <h2 className="product-card-name">{name}</h2>
              <p className="product-card-desc">{desc.substring(0, 20)}...</p>
              <p className="product-card-price">${price}</p>
              <div onClick={addToCart}>
                <Button button="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
        ) : null
      }
      {
        open ? (
          <ProductDetailsCard 
            data={data} 
            setOpen={setOpen} 
          />
        ) : null
      }
    </>
  );
};
export default ProductCard;
