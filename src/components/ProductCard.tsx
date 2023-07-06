import { ProductCardProps, ProductDataType } from "@/types/TypeLists";
import { cartActions } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "@/styles/productCard.scss";
import Button from "@/components/Button";

const ProductCard = ({ data, prodCategory }: ProductCardProps) => {
  const dispatch = useDispatch();

  const { id, alt, img, name, price = 0, desc, category = '' } = data as ProductDataType;

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
            <div className="product-card-img">
              <LazyLoadImage
                src={img} 
                alt={alt}
                effect="blur"
                loading="lazy"
              />
            </div>
            <div className="product-card-info">
              <h2 className="product-card-name">{name}</h2>
              <p className="product-card-desc">{desc.substring(0, 50)}...</p>
              <p className="product-card-price">${price}</p>
              <div onClick={addToCart}>
                <Button button="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
        ) : (
          null
        )}
    </>
  );
};
export default ProductCard;
