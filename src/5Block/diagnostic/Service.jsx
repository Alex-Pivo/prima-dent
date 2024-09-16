// import style from "../fifthBlock.module.scss";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import Modal from "../../Modal/Modal";
// import Notes from "../../notes/Notes";

// const textAnimation = {
//   hidden: {
//     x: 100,
//     opacity: 0,
//   },
//   visible: (custom) => ({
//     x: 0,
//     opacity: 1,
//     transition: { delay: custom * 0.2 },
//   }),
// };

// function Service({ service, isActive, setActiveService }) {
//   const [active, setActive] = useState(false);
//   const handleActive = () => {
//     setActive(!active);
//   };

//   const blockRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const windowWidth = window.innerWidth;

//       if (windowWidth <= 769) {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             const entry = entries[0];
//             if (entry.isIntersecting) {
//               setActiveService(service.id); // Устанавливаем активный блок при пересечении
//             }
//           },
//           {
//             threshold: 0.9, // Процент видимости (в центре экрана)
//           }
//         );

//         if (blockRef.current) {
//           observer.observe(blockRef.current);
//         }

//         return () => {
//           if (blockRef.current) {
//             observer.unobserve(blockRef.current); // Очищаем наблюдателя
//           }
//         };
//       }
//     };

//     handleResize(); // Выполнить при монтировании

//     window.addEventListener('resize', handleResize); // Добавляем обработчик изменения размера окна

//     return () => {
//       window.removeEventListener('resize', handleResize); // Очищаем обработчик при размонтировании
//     };
//   }, [service.id, setActiveService]);

//   return (
//     <>
//       <Modal active={active} setActive={setActive}>
//         <Notes serviceTitle={service.name}></Notes>
//       </Modal>

//       <motion.div
//         ref={blockRef}
//         variants={{
//           hidden: { opacity: 0.5, scale: 0.9 },
//           visible: { opacity: 1, scale: 1 },
//         }}
//         initial="hidden"
//         animate={isActive ? "visible" : "hidden"} // Анимация зависит от активности блока
//         className={
//           isActive ? `${style.service} ${style.active}` : style.service
//         }
//         >
//         <h4 className={style.serviceTitle}>{service.title}</h4>
//         <p className={style.serviceText}>{service.text}</p>
//         <div className={style.boxes}>
//           <button className={style.btn} onClick={() => alert("Записатись")}>
//             Записатись
//           </button>
//         </div>
//       </motion.div>
//     </>
//   );
// }

// export default Service;

{
  /* <motion.div
  custom={service.id}
  variants={textAnimation}
  ref={blockRef}
  className={scrolled ? `${style.service} ${style.scrolled}` : style.service}
>
  <h4 className={style.serviceTitle}>{service.title}</h4>
  <p className={style.serviceText}>{service.text}</p>
  <div className={style.boxes}>
    <button className={style.btn} onClick={handleActive}>
      Записатись
    </button>
  </div>
</motion.div> */
}

import styles from "../fifthBlock.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Modal from "../../Modal/Modal";
import Notes from "../../notes/Notes";
import { useNavigate, useLocation } from "react-router-dom";

const Service = ({ service, isActive, setActiveService }) => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Определение начального состояния
  const blockRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Обновление состояния при изменении ширины окна
    };

    window.addEventListener("resize", handleResize); // Добавляем обработчик изменения размера окна

    return () => {
      window.removeEventListener("resize", handleResize); // Очищаем обработчик при размонтировании
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setActiveService(service.id); // Устанавливаем активный блок при пересечении
          }
        },
        {
          threshold: 0.9, // Процент видимости (в центре экрана)
        }
      );

      if (blockRef.current) {
        observer.observe(blockRef.current);
      }

      return () => {
        if (blockRef.current) {
          observer.unobserve(blockRef.current); // Очищаем наблюдателя
        }
      };
    }
  }, [service.id, setActiveService, isMobile]);

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <Notes serviceTitle={service.name}></Notes>
      </Modal>

      <motion.div
        ref={blockRef}
        // variants={
        //   isMobile
        //     ? {
        //         hidden: { opacity: 1, scale: 1 },
        //         visible: { opacity: 1, scale: 1 },
        //       }
        //     : {
        //         hidden: { opacity: 1, scale: 1 },
        //         visible: { opacity: 1, scale: 1 },
        //       }
        // }
        initial="hidden"
        // animate={isActive ? "visible" : "hidden"} // Анимация зависит от активности блока
        className={`${styles.service}`}
      >
        <h4 className={styles.serviceTitle}>{service.title}</h4>
        <p className={styles.serviceText}>{service.text}</p>
        <div className={styles.boxes}>
          <button
            className={styles.btn}
            onClick={() => {
              moveSubs("subs");
            }}
          >
            Записатись
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Service;
