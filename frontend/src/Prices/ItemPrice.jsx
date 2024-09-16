import { useState } from "react";
import style from "./prices.module.scss";
import { pricesItems } from "./itemPrice.data";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function ItemPrice({ priceItem, gKey }) {
  const [btnActive, setBtnActive] = useState(false);
  return (
    <>
      <motion.div
        custom={priceItem.id}
        variants={textAnimation}
        className={btnActive ? style.itemMinus : style.item}
      >
        <div className={style.head}>
          <p className={style.name}>{priceItem.title}</p>
          <div
            className={btnActive ? style.btnMinus : style.btn}
            onClick={() => setBtnActive(btnActive ? false : true)}
          ></div>
        </div>
        {pricesItems[gKey - 1].value.map((item) => {
          return (
            <div className={style.line} key={item.id}>
              <p className={style.text}>{item.name}</p>
              <p className={style.price}>{item.prices}</p>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

export default ItemPrice;
