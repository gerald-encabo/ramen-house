import { ButtonProps } from "@/types/TypeLists";
import { ButtonStyled } from "./Button.styled";

const Button = ({button}: ButtonProps) => {
  return (
    <ButtonStyled>{button}</ButtonStyled>
  )
}
export default Button