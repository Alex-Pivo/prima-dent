import EighthBlock from "../8Block/EighthBlock";
import Footer from "../9Footer/Footer";
import Tooth from "./Tooth";
import style from "../css/portfolio.module.css";
import { toothes } from "./tooth.data";
import { useState } from "react";
import { motion } from "framer-motion";

const textAnim = {
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

function Portfolio() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textAnim}
        className={style.portfolio}
        id={"portfolio"}
      >
        <div className={style.titleBox}>
          <h2 className={style.title}>Портфоліо</h2>
          <p className={style.text}>
            Історії наших пацієнтів, де ви можете ознайомитися з їхнім досвідом
            на власні очі
          </p>
        </div>
        {toothes.map((tooth) => (
          <Tooth key={tooth.id} tooth={tooth}></Tooth>
        ))}
      </motion.div>
      <EighthBlock></EighthBlock>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
