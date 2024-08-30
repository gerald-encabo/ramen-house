import Carousel from "react-slick";
import Button from "../Button/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menuList } from "@/assets/data/MenuLists";
import { MenuDataType } from "@/types/TypeLists";
import {
  SpecialContainer,
  SpecialWrapper,
  SpecialImg,
} from "@/components/Slider/Slider.styled";

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
    pauseOnHover: true,
  };

  return (
    <SpecialContainer>
      <Carousel {...settings}>
        {menuList.map((list: MenuDataType, index: number) =>
          list.alt === "Daily Special" ? (
            <SpecialWrapper key={index}>
              <SpecialImg
                style={{
                  backgroundImage: `url(${list.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "red",
                }}
              >
                <h1>{list.title}</h1>
                <h3>{list.name}</h3>
                <p>{list.desc.substring(0, 80)}</p>
                <Button button="Order Now" />
              </SpecialImg>
            </SpecialWrapper>
          ) : null
        )}
      </Carousel>
    </SpecialContainer>
  );
};
export default Slider;
