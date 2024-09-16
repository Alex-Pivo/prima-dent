import style from "../css/thirdBlock.module.css";
import { motion } from "framer-motion";

import pathPhoto from "/src/assets/img/Photo.png";

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

function ThirdBlock() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.thirdBlock}>
          <div className={style.thirdBlock__container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.container__title}
            >
              Хто ми?
            </motion.h2>
            <div className={style.info__container}>
              <div className={style.main__info}>
                <motion.p
                  custom={2}
                  variants={textAnimation}
                  className={style.main__text}
                >
                  <span>Стоматологія Primadent</span> - сучасна клініка в
                  самісінькому центрі міста Ужгород. <br /> Ми надаємо
                  різноманітні послуги: від професійної гігієни до імплантації
                  зубів.
                </motion.p>
                <motion.p
                  custom={3}
                  variants={textAnimation}
                  className={style.main__text}
                >
                  Співпрацюємо з найкращими зуботехнічними лабораторіями
                  України, тому впевнені в якості вінірів та коронок. Усі роботи
                  виготовляються індивідульано до побажань пацієнта та
                  діагностики зубо-щелепної системи. Ортопедична частина
                  здійснюється за допомогою інтраорального сканера та мікроскопу
                  що гарантує нам МАКСИМАЛЬНУ точність.
                </motion.p>
                <motion.p
                  custom={4}
                  variants={textAnimation}
                  className={style.visible__text}
                >
                  При повній відсутності зубів провівши діагностику проводимо
                  реабілітацію пацієнта використовуючи методики Все-на-4, Все на
                  6. Після операції імплантації виготовляємо зубні протези на
                  імплантатах
                  <br />
                  протягом 4-7 днів.
                </motion.p>
              </div>
              <div className={style.photoContainer}>
                <motion.img
                  src={pathPhoto}
                  alt=""
                  custom={3}
                  variants={textAnimation}
                  className={style.main__photo}
                />
              </div>
            </div>

            <motion.p
              custom={4}
              variants={textAnimation}
              className={style.unvisible__text}
            >
              При повній відсутності зубів провівши діагностику проводимо
              реабілітацію пацієнта використовуючи методики Все-на-4, Все на 6.
              Після операції імплантації виготовляємо зубні протези на
              імплантатах протягом 4-7 днів.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default ThirdBlock;
