import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import '@/styles/menu-sidebar.scss';
import { MenuSidebarButton, SelectedMenu } from "@/types/TypeLists";

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
      <div className='menu-sidebar'>
        <div className='menu-sidebar-container' >
          <div className='menu-sidebar-close' onClick={handleMenuSidebar}>
              <FaTimes />
          </div>
          <div className='menu-sidebar-list'>
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
          </div>
          <div onClick={handleMenuSidebar}>
            <Button button="Order Now" />
          </div>
        </div>
      </div>
    )
  }
  
  export default MenuSideBar