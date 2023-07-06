import Carousel from "react-slick";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider.scss";
import { menuList } from '@/assets/data/productLists'
import { ProductDataType } from "@/types/TypeLists";


const Slider = () => {

  // Slick Carousel settings options
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    inifinite: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    fade: true,
    pauseOnHover: true
  } 

  return (
    <section className="special">
        <Carousel {...settings}>
            {
                menuList.map((list: ProductDataType, index: number) => (
                  list.alt === 'Daily Special' 
                    ? <div className="special-wrapper" key={index}>
                          <div className="special-img" 
                              style={{ 
                                backgroundImage: `url(${list.img})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'red'
                              }}
                            >
                            <h1>{list.title}</h1>
                            <h3>{list.name}</h3>
                            <p>{list.desc.substring(0,80)}</p>
                            <Button button="Order Now" />
                          </div>
                      </div>
                    : null
                ))
            }
        </Carousel>
    </section>
  )
}
export default Slider