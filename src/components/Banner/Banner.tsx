import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";
import { BannerSection, BannerWrapper } from "./Banner.styled";

const Banner = () => {

  return (
    <BannerSection>
        <BannerWrapper>
          <>
           <Title heading="Best Ramen in GTA" />
          </>
          <p>Find the nearest Ramen House to You!</p>
          <Button button="Start your Order" />
        </BannerWrapper>
    </BannerSection>
  )
}

export default Banner