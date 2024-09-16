import { useState } from "react";
import style from "./firstBlock.module.scss";
import Modal from "../Modal/Modal";
import Notes from "../notes/Notes";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const circleAnimation = {
  hidden: {
    y: 200,
  },
  visible: (custom) => ({
    y: 0,
    transition: { delay: custom * 0.2 },
  }),
};

function FirstBlock() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  const location = useLocation();
  const nav = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const moveSubs = (partList) => {
    if (location.pathname !== "/") {
      nav("/");
      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    } else {
      scrollToSection(partList);
    }
  };
  return (
    <>
      <Modal active={active} setActive={setActive}>
        <Notes></Notes>
      </Modal>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.firstBlock} id={"mainScreen"}>
          <div className={style.shadow}>
            <div className={style.main__text}>
              <motion.h1
                custom={1}
                variants={textAnimation}
                className={style.title}
              >
                Посміхнись на максимум з PRIMADENT
              </motion.h1>
              <motion.h2
                custom={2}
                variants={textAnimation}
                className={style.subTitle}
              >
                Сучасна стоматологічна клініка в Ужгороді
              </motion.h2>
              <motion.button
                custom={3}
                variants={textAnimation}
                className={style.main__btn}
                onClick={() => moveSubs("subs")}
              >
                Проконсультуйте мене
              </motion.button>
            </div>
            <div className={style.main__icons}>
              <div className={style.mouse}></div>
              {/* <motion.div
                custom={4}
                variants={circleAnimation}
                className={style.circle}
              >
                <div
                  onClick={() => setModalActive(modalActive ? false : true)}
                  className={modalActive ? style.cross : style.telegram}
                ></div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default FirstBlock;
