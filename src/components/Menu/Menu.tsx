import { MenuProps, MenuDataType } from "@/types/TypeLists";
import { menuList } from "@/assets/data/MenuLists";
import MenuCard from "@/components/Menu/MenuCard";
import Title from "@/components/Title/Title";
import { MenuContainer } from "./Menu.styled";

const Menu = ({ id, heading }: MenuProps) => {
  return (
    <MenuContainer id={id}>
      <Title heading={heading} />
      <div>
        {menuList.map((lists: MenuDataType, key: number) => (
          <div key={key}>
            <MenuCard data={lists} prodCategory={heading} />
          </div>
        ))}
      </div>
    </MenuContainer>
  );
};
export default Menu;
