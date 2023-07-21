import { ProductProps, ProductDataType } from "@/types/TypeLists";
import { menuList } from '@/assets/data/productLists'
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import "@/styles/product.scss";

const Product = ({id, heading}: ProductProps) => {

  return (
    <section className="product" id={id} >
        <Title heading={heading} />
        <div>
          {
            menuList.map((lists: ProductDataType, key: number) => (
                <div key={key}>
                  <ProductCard data={lists} prodCategory={heading}/>
                </div>
            ))
          }
        </div>
    </section>
  )
}
export default Product