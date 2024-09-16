import { useState } from "react";
import { serts } from "./MaksSert/sert.data.js";
import { valSerts } from "./ValeraSert/ValSert.data.js";
import { photos } from "./Gallery/gal.data.js";
import style from "./sixthBlock.module.scss";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import arrow1 from "/src/assets/img/arrow1.png";
import arrow2 from "/src/assets/img/arrow2.png";

import MaksSert1 from "/src/6Block/MaksSert/1.png";
import MaksSert2 from "/src/6Block/MaksSert/2.png";
import MaksSert3 from "/src/6Block/MaksSert/3.png";
import MaksSert4 from "/src/6Block/MaksSert/4.png";
import MaksSert5 from "/src/6Block/MaksSert/5.png";
import MaksSert6 from "/src/6Block/MaksSert/6.png";
import MaksSert7 from "/src/6Block/MaksSert/7.png";
import MaksSert8 from "/src/6Block/MaksSert/8.png";
import MaksSert9 from "/src/6Block/MaksSert/9.png";
import MaksSert10 from "/src/6Block/MaksSert/10.png";
import MaksSert11 from "/src/6Block/MaksSert/11.png";
import MaksSert12 from "/src/6Block/MaksSert/12.png";

const picsMax = [
  MaksSert1,
  MaksSert2,
  MaksSert3,
  MaksSert4,
  MaksSert5,
  MaksSert6,
  MaksSert7,
  MaksSert8,
  MaksSert9,
  MaksSert10,
  MaksSert11,
  MaksSert12,
];

import gal1 from "/src/6Block/Gallery/1.png";
import gal2 from "/src/6Block/Gallery/2.png";
import gal3 from "/src/6Block/Gallery/3.png";
import gal4 from "/src/6Block/Gallery/4.png";
import gal5 from "/src/6Block/Gallery/5.png";
import gal6 from "/src/6Block/Gallery/6.png";
import gal7 from "/src/6Block/Gallery/7.png";
import gal8 from "/src/6Block/Gallery/8.png";
import gal9 from "/src/6Block/Gallery/9.png";
import gal10 from "/src/6Block/Gallery/10.png";

const pics = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10];

import ValeraSert1 from "/src/6Block/ValeraSert/1.png";
import ValeraSert2 from "/src/6Block/ValeraSert/2.png";
import ValeraSert3 from "/src/6Block/ValeraSert/3.png";
import ValeraSert4 from "/src/6Block/ValeraSert/4.jpg";
import ValeraSert5 from "/src/6Block/ValeraSert/5.jpg";
import ValeraSert6 from "/src/6Block/ValeraSert/6.png";
import ValeraSert7 from "/src/6Block/ValeraSert/7.png";

const picsVal = [
  ValeraSert1,
  ValeraSert2,
  ValeraSert3,
  ValeraSert4,
  ValeraSert5,
  ValeraSert6,
  ValeraSert7,
];

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

function SixthBlock() {
  let [btnActive, setBtnActive] = useState(0);
  let [btnActiveS, setBtnActiveS] = useState(0);
  const nav = useNavigate();

  // const moveTeam = (partList) => {
  //   if (location.pathname !== "team") {
  //     nav("/team");

  //     // setPriceActive((price = true));
  //     // linkPrcies(price);

  //     // setPortActive((port = false));
  //     // linkPort(port);

  //     $(function () {
  //       $("#serv").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     $(function () {
  //       $("#serv1").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     $(function () {
  //       $("#about").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     $(function () {
  //       $("#about1").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     $(function () {
  //       $("#slider").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     $(function () {
  //       $("#slider1").css({
  //         textDecoration: "none",
  //         color: "#282828",
  //       });
  //     });

  //     setTimeout(() => {
  //       scrollToSection(partList);
  //     }, 100);
  //   }
  // };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "auto" });
    }
  };

  const moveTeam = (partList) => {
    if (location.pathname !== "team") {
      nav("/team");
      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    }
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.sixthBlock} id={"aboutTeam"}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Наша команда
            </motion.h2>
            <div className={style.team}>
              <div className={style.maks} onClick={() => moveTeam("team")}>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={style.img}
                ></motion.div>
                <motion.h4
                  custom={3}
                  variants={textAnimation}
                  className={style.name}
                >
                  <span>Прийма Максим Борисович</span> <br /> Стоматолог-хірург,
                  ортопед
                </motion.h4>
                {/* <motion.p
                  custom={4}
                  variants={textAnimation}
                  className={style.info}
                >
                  Власник стоматології Прімадент. Вирішив стати лікарем ще у 4
                  роки як його батько. <br /> Пройшов більше 50 курсів з
                  хірургії та естетичної стоматології. <br /> Спеціалізується на
                  повному відновленні зубного ряду за допомогою дентальних
                  імплантатів в методиках all-on-4, all-on-6 та на безпечній
                  зміні усмішки керамічними вінірами.
                </motion.p>
                <motion.div
                  custom={5}
                  variants={textAnimation}
                  viewport={{ amount: 0.2, once: true }}
                  className={style.buttons}
                >
                  <motion.button
                    className={btnActive === 1 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActive((btnActive = 1))}
                  >
                    Сертифікати
                  </motion.button>
                  <motion.button
                    className={btnActive === 2 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActive((btnActive = 2))}
                  >
                    Галерея
                  </motion.button>
                  <motion.button
                    className={
                      btnActive === 0 ? style.btnCloseMinus : style.btnClose
                    }
                    onClick={() => setBtnActive((btnActive = 0))}
                  >
                    <img src={btnActive === 0 ? arrow1 : arrow2} alt="" />
                  </motion.button>
                </motion.div>
                <div
                  className={
                    btnActive === 1
                      ? style.sertificates
                      : style.sertificatesMinus
                  }
                >
                  {serts.map((sert, index) => (
                    <img
                      key={sert.id}
                      src={picsMax[sert.id - 1]}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div>
                <div
                  className={
                    btnActive === 2 ? style.gallery : style.galleryMinus
                  }
                >
                  {photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={pics[photo.id - 1]}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div> */}
              </div>
              <div className={style.valera} onClick={() => moveTeam("team")}>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={style.img}
                ></motion.div>
                <motion.h4
                  custom={3}
                  variants={textAnimation}
                  className={style.name}
                >
                  <span>Валерій Малець</span> <br /> Лікар-стоматолог терапевт
                </motion.h4>
                {/* <motion.p
                  custom={4}
                  variants={textAnimation}
                  className={style.info}
                >
                  Виконує такі маніпуляції як: професійна гігієна; кюретаж;
                  відбілювання зубів; лікуванню карієсу та художньому
                  відновленню анатомії зуба; лікуванню та переліковуванню
                  кореневих каналів.
                  <br /> Головний девіз «Я сприймаю стоматологію як мистецтво: у
                  рамках цієї професії можна створювати шедеври, яким би
                  респектнув сам Да Вінчі.»
                </motion.p>
                <motion.div
                  custom={5}
                  variants={textAnimation}
                  className={style.buttons}
                >
                  <button
                    className={btnActiveS === 1 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActiveS((btnActiveS = 1))}
                  >
                    Сертифікати
                  </button>
                  <button
                    className={
                      btnActiveS === 0 ? style.btnCloseMinus : style.btnClose
                    }
                    onClick={() => setBtnActiveS((btnActiveS = 0))}
                  >
                    {" "}
                    <img src={btnActiveS === 0 ? arrow1 : arrow2} alt="" />{" "}
                  </button>
                </motion.div>
                <div
                  className={
                    btnActiveS === 1
                      ? style.sertificates
                      : style.sertificatesMinus
                  }
                >
                  {valSerts.map((valSert, index) => (
                    <img
                      key={valSert.id}
                      src={picsVal[valSert.id - 1]}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div>
                <div
                  className={
                    btnActiveS === 2 ? style.gallery : style.galleryMinus
                  }
                ></div> */}
              </div>

              <div className={style.valera} onClick={() => moveTeam("team")}>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={style.img}
                  style={{
                    backgroundImage: "url('/diana.jpg')",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                  }}
                ></motion.div>
                <motion.h4
                  custom={3}
                  variants={textAnimation}
                  className={style.name}
                >
                  <span>Скирчук Діана Олексіївна</span> <br /> Лікар-стоматолог
                  терапевт
                </motion.h4>
              </div>
            </div>

            <button onClick={() => moveTeam("team")} className={style.btn}>
              Дізнатися більше
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default SixthBlock;
