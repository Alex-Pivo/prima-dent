import style from "../../css/secondBlock.module.css";
import { cards } from "./cards.data.js";
import { motion } from "framer-motion";
import { useState } from "react";

import pic1 from "/src/2Block/cards/img/macbook.svg";
import pic2 from "/src/2Block/cards/img/human.svg";
import pic3 from "/src/2Block/cards/img/book.svg";
import pic4 from "/src/2Block/cards/img/mono.svg";

const pics = [pic1, pic2, pic3, pic4];

const blocksAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

function Card() {
  return (
    <>
      <motion.div className={style.container__cards}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={blocksAnimation}
            custom={index + 1}
            className={style.card}
          >
            <div className={style.pic__container}>
              <img className={style.pic} src={pics[card.id - 1]} alt="" />

            </div>
            <h4 className={style.card__title}>{card.title}</h4>
            <p className={style.card__text}>{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Card;
