import { ButtonProps } from "@/types/TypeLists";
import "@/styles/button.scss";

const Button = ({button}: ButtonProps) => {
  return (
    <button>{button}</button>
  )
}
export default Button