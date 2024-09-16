import style from "./fifthBlock.module.scss";
import { services } from "../5Block/diagnostic/services.data.js";
import Service from "./diagnostic/Service.jsx";
import { useState } from "react";

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

function FifthBlock() {
  const [activeService, setActiveService] = useState(null); // Храним ID активного блока

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.fifthBlock} id={"services"}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Наші послуги
            </motion.h2>
            <div className={style.services}>
              {services.map((service) => (
                <Service
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id} // Проверяем активный блок
                  setActiveService={setActiveService} // Передаем функцию для изменения активного блока
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default FifthBlock;
