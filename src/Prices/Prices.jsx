import EighthBlock from "../8Block/EighthBlock";
import Footer from "../9Footer/Footer";
import style from "./prices.module.scss";
import { pricesItems } from "./itemPrice.data";
import ItemPrice from "./ItemPrice";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Prices() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.container} id={"prices"}>
          <motion.h2
            custom={1}
            variants={textAnimation}
            className={style.title}
          >
            Ціни
          </motion.h2>
          <motion.div
            custom={2}
            variants={textAnimation}
            className={style.prices}
          >
            {pricesItems.map((priceItem) => (
              <ItemPrice
                key={priceItem.id}
                priceItem={priceItem}
                gKey={priceItem.id}
              ></ItemPrice>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <EighthBlock></EighthBlock>
      <Footer></Footer>
    </>
  );
}

export default Prices;
