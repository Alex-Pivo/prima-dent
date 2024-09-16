import Card from "./cards/Card.jsx";
import style from "./secondBlock.module.scss";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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

function SecondBlock() {
  const location = useLocation();
  const nav = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutPersonal = (partList) => {
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
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.secondBlock}>
          <div className={style.secondBlock__container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.container__title}
            >
              Чому нас обирають
            </motion.h2>
            <Card></Card>
            <motion.button
              custom={7}
              variants={textAnimation}
              className={style.container__btn}
              onClick={() => aboutPersonal("aboutTeam")}
            >
              Дізнатися більше
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default SecondBlock;
