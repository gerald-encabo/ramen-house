import { motion } from "framer-motion";
import { TitleProps } from "@/types/TypeLists";
import { TitleStyled } from './Title.styled';

const Title = ({heading}: TitleProps) => {

  return (
    <TitleStyled>
      {
          heading === "Best Ramen in GTA"
          ? <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
              variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0},
              }}
            >
              { heading }
            </motion.h1>
          : <h1>
              { heading }
            </h1>
      }
    </TitleStyled>
  )
}
export default Title