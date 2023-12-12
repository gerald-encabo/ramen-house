import React, { useEffect, useRef } from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GiNoodles } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { NavbarButton } from "@/types/TypeLists";
import { useSelector } from "react-redux";
import { State } from "@/redux/Store";
import { 
  NavbarContainer,
  NavbarCart,
  NavbarMenu,
  NavbarLogo,
  NavbarQuantity,
  NavbarLogoContainer,
  NavbarLogoName,
  NavbarLogoIcon
} from './Navbar.styled';

const Navbar = ({ handleCartSidebar, handleMenuSidebar }: NavbarButton) => {
  
  const navbarRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const totalQuantity = useSelector((state: State) => state.cart.totalQuantity);

  //Navbar background change when its scroll down below 80
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbarRef.current.classList.add("NavbarSticky");
      } else {
        navbarRef.current.classList.remove("NavbarSticky");
      }
    });
  }, []);

  return (
    <NavbarContainer ref={navbarRef}>
      <NavbarCart onClick={handleCartSidebar}>
        Cart
        <span>
          <FaShoppingCart />
        </span>
        <NavbarQuantity>{totalQuantity}</NavbarQuantity>
      </NavbarCart>
      <NavbarLogo>
        <NavbarLogoContainer>
          <NavbarLogoName>Ramen</NavbarLogoName>
          <NavbarLogoIcon>
            <BsFillHouseDoorFill />
          </NavbarLogoIcon>
          <NavbarLogoName>House</NavbarLogoName>
        </NavbarLogoContainer>
      </NavbarLogo>
      <NavbarMenu onClick={handleMenuSidebar}>
        <span>
          <GiNoodles />
        </span>
        Menu
      </NavbarMenu>
    </NavbarContainer>
  );
};
export default Navbar;
