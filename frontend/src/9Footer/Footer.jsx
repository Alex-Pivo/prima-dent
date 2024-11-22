import style from "./footer.module.scss";
import MapComponent from "../MapComponent/MapComponent";
import { motion } from "framer-motion";
import iframe from "iframe";
import tg from "/src/assets/img/tg.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../Logo";

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

function Footer() {
  const location = useLocation();
  let [price, setPriceActive] = useState(true);
  let [port, setPortActive] = useState(true);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nav = useNavigate();

  const aboutPersonal = (partList) => {
    if (location.pathname !== "/") {
      nav("/");

      setPriceActive((price = false));
      linkPrcies(price);

      setPortActive((port = false));
      linkPort(port);

      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    } else {
      scrollToSection(partList);
    }
  };

  const linkPrcies = (price) => {
    if (price === true) {
      $(function () {
        $("#linkPrice").css({
          color: "#305381",
          textDecoration: "underline",
        });
      });

      $(function () {
        $("#linkPrice1").css({
          color: "#305381",
          textDecoration: "underline",
        });
      });
    } else {
      $(function () {
        $("#linkPrice").css({
          color: "#282828",
          textDecoration: "none",
        });
      });

      $(function () {
        $("#linkPrice1").css({
          color: "#282828",
          textDecoration: "none",
        });
      });
    }
  };

  const linkPort = (port) => {
    if (port === true) {
      $(function () {
        $("#linkPort").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });

      $(function () {
        $("#linkPort1").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else {
      $(function () {
        $("#linkPort").css({
          textDecoration: "none",
          color: "#282828",
        });

        $("#linkPort1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  };

  const movePrices = (partList) => {
    if (location.pathname !== "prices") {
      nav("/prices");

      setPriceActive((price = true));
      linkPrcies(price);

      setPortActive((port = false));
      linkPort(port);

      $(function () {
        $("#serv").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#serv1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#about").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#about1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#slider").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#slider1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    }
  };

  const movePortfolio = (partList) => {
    if (location.pathname !== "portfolio") {
      nav("/portfolio");

      setPortActive((port = true));
      linkPort(port);

      setPriceActive((price = false));
      linkPrcies(price);

      $(function () {
        $("#serv").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#serv1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#about").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#about1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#slider").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

      $(function () {
        $("#slider1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });

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
        viewport={{ amount: 0.4, once: true }}
      >
        {/* <footer className={style.footer}>
          <div className={style.info}>
            <motion.a
              custom={1}
              variants={textAnimation}
              href="tel:+38(050)6283286"
              className={style.number}
            >
              +38 (050) 628 32 86
            </motion.a>
            <motion.p
              custom={2}
              variants={textAnimation}
              className={style.text}
            >
              Чекаємо на вас у нашому затишному кабінеті за адресою вул.
              Мукачівська 4, що у трьох хвилинах ходьби від площі Петефі.
            </motion.p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10549.852083342921!2d22.296103256066907!3d48.620121099142544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919afdafd15a7%3A0xe251057ce1105bd4!2sPrimaDent!5e0!3m2!1suk!2sua!4v1697048107453!5m2!1suk!2sua"
              frameborder="0"
              width="100%"
              className={style.map}
            ></iframe>
            <motion.div
              custom={3}
              variants={textAnimation}
              className={style.mailTime}
            >
              <p className={style.mail}>пн-пт: 8.00 - 20.00</p>
            </motion.div>
          </div>
          <div className={style.menu}>
            <p onClick={() => aboutPersonal("services")}>Послуги</p>
            <p onClick={() => aboutPersonal("aboutTeam")}>Про нас</p>
            <p onClick={() => movePrices("prices")}>Ціни</p>
            <p onClick={() => aboutPersonal("feedback")}>Відгуки</p>
            <p onClick={() => movePortfolio("portfolio")}>Портфоліо</p>
          </div>
          <motion.div
            custom={1}
            variants={textAnimation}
            className={style.links}
          >
            <div className={style.linksCont}>
              <a href="https://t.me/drMaxPryima" className={style.telega}></a>
              <a
                href="https://www.instagram.com/primadent.uzh/"
                className={style.insta}
              ></a>
              <a
                href="https://www.facebook.com/primadent.uzh"
                className={style.facebook}
              ></a>
            </div>
            <div className={style.chatTg}>
              <a className={style.linkTG} href="https://t.me/primadent_bot">
                <p>Чат-бот PrimaDent</p>
                <img className={style.tg} src={tg} alt="" />
              </a>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={textAnimation}
            className={style.mailTimeInvis}
          >
            <p className={style.mail}>пн-пт: 8.00 - 20.00</p>
          </motion.div>
        </footer> */}
        <footer className={style.footer}>
          <div className={style.container}>
            <section className={style.sectionTop}>
              <Logo></Logo>
              <p className={style.mail}>пн-пт: 8.00 - 20.00</p>
              <div className={style.menu}>
                <p onClick={() => aboutPersonal("services")}>Послуги</p>
                <p onClick={() => aboutPersonal("aboutTeam")}>Про нас</p>
                <p onClick={() => movePrices("prices")}>Ціни</p>
                <p onClick={() => aboutPersonal("feedback")}>Відгуки</p>
                <p onClick={() => movePortfolio("portfolio")}>Портфоліо</p>
              </div>
            </section>
            <div className={style.line}></div>
            <section className={style.sectionBottom}>
              <div className={style.left}>
                <p className={style.label}>Наші послуги</p>
                <div className={style.posl}>
                  <p>Загальна стоматологія</p>
                  <p>Терапевтична стоматологія</p>
                  <p>Хірургічна стоматологія</p>
                  <p>Ортопедична стоматологія</p>
                  <p>Ортодонтична стоматологія</p>
                </div>
              </div>

              <div className={style.center}>
                <p className={style.label}>Контакти</p>
                <a
                  custom={1}
                  variants={textAnimation}
                  href="tel:+38(050)6283286"
                  className={style.number}
                >
                  +38 (050) 628 32 86
                </a>

                <div className={style.linksCont}>
                  <a
                    href="https://t.me/drMaxPryima"
                    className={style.telega}
                  ></a>
                  <a
                    href="https://www.instagram.com/primadent.uzh/"
                    className={style.insta}
                  ></a>
                  <a
                    href="https://www.facebook.com/primadent.uzh"
                    className={style.facebook}
                  ></a>
                </div>

                <p custom={2} variants={textAnimation} className={style.text}>
                  Чекаємо на вас у нашому затишному кабінеті за адресою вул.
                  Мукачівська 4, що у трьох хвилинах ходьби від площі Петефі.
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10549.852083342921!2d22.296103256066907!3d48.620121099142544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919afdafd15a7%3A0xe251057ce1105bd4!2sPrimaDent!5e0!3m2!1suk!2sua!4v1697048107453!5m2!1suk!2sua"
                  frameborder="0"
                  width="100%"
                  className={style.map}
                ></iframe>

                {/* <div className={style.chatTg}>
                  <a className={style.linkTG} href="https://t.me/primadent_bot">
                    <p>Чат-бот PrimaDent</p>
                    <img className={style.tg} src={tg} alt="" />
                  </a>
                </div> */}
              </div>

              <div className={style.right}>
                <p className={style.label}>Оплата</p>
                <p className={style.text}>Готівка</p>
                <div className={style.cards}>
                  <img src="/visa.svg" alt="" />
                  <img src="/mastercard.svg" alt="" />
                </div>
                <p className={style.text}>
                  Безготівкова оплата на банківський рахунок
                </p>
                <img className={style.mono} src="/mono.svg" alt="" />
                <p className={style.text}>
                  За допомогою сервісу можлива покупка частинами від монобанку
                </p>
              </div>

              <div className={style.copy}>
                <p className={style.label}>Розробка</p>
                <a
                  className={style.link}
                  href="http://yk-agency.com.ua/"
                >
                  Y.K AGENCY
                </a>
                <p className={style.text}>
                  primadent.uz.ua © Всі права захищені
                </p>
              </div>
            </section>
          </div>
        </footer>
        {/* <a
            href="https://instagram.com/y.tech_ua?igshid=MzRlODBiNWFlZA=="
            className={style.techCont}
          >
            <p className={style.comp}>made by Y.tech</p>
            <a
              href="https://instagram.com/y.tech_ua?igshid=MzRlODBiNWFlZA=="
              className={style.instaComp}
            ></a>
          </a> */}
      </motion.section>
    </>
  );
}

export default Footer;
