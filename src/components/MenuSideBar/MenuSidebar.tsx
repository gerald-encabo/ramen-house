import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { MenuSidebarButton, SelectedMenu } from "@/types/TypeLists";
import { 
  MenuSidebarContainer,
  MenuSidebarWrapper,
  MenuSidebarCloseBtn,
  MenuSidebarList 
} from './MenuSidebar.styled';

const MenuSideBar = ({handleMenuSidebar}: MenuSidebarButton) => {

  const handleMenuClick = (menuList: string) => {
    const scrollToId = document.getElementById(menuList.toLowerCase());
    const locationScroll = scrollToId?.offsetTop!;

    window.scrollTo({
       left: 0,
       top: locationScroll - 40,
       behavior: "smooth",
    })
  }

    return (
      <MenuSidebarContainer>
        <MenuSidebarWrapper>
          <MenuSidebarCloseBtn onClick={handleMenuSidebar}>
              <FaTimes />
          </MenuSidebarCloseBtn>
          <MenuSidebarList>
              <Link
                to={SelectedMenu.Special.toLowerCase()}
                onClick={() => {
                    handleMenuSidebar();
                    handleMenuClick(SelectedMenu.Special.toLowerCase());
                  }
                }
              >
                {SelectedMenu.Special}
              </Link>
              <Link
                to={SelectedMenu.Ramen.toLowerCase()}
                onClick={() => {
                  handleMenuSidebar();
                  handleMenuClick(SelectedMenu.Ramen.toLowerCase());
                }
              }
              >
                {SelectedMenu.Ramen}
              </Link>
              <Link
                to={SelectedMenu.Side.toLowerCase()}
                onClick={() => {
                  handleMenuSidebar();
                  handleMenuClick(SelectedMenu.Side.toLowerCase());
                }
              }
              >
                {SelectedMenu.Side}
              </Link>
              <Link
                to={SelectedMenu.Dessert.toLowerCase()}
                onClick={() => {
                  handleMenuSidebar();
                  handleMenuClick(SelectedMenu.Dessert.toLowerCase());
                }
              }
              >
                {SelectedMenu.Dessert}
              </Link>
              <Link
                to={SelectedMenu.Drink.toLowerCase()}
                onClick={() => {
                  handleMenuSidebar();
                  handleMenuClick(SelectedMenu.Drink.toLowerCase());
                }
              }
              >
                {SelectedMenu.Drink}
              </Link>
          </MenuSidebarList>
          <div onClick={handleMenuSidebar}>
            <Button button="Order Now" />
          </div>
        </MenuSidebarWrapper>
      </MenuSidebarContainer>
    )
  }
  
  export default MenuSideBar