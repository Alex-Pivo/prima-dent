import style from "./header.module.scss";
// import "../css/header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import Modal from "../Modal/Modal";
import Notes from "../notes/NotesTwo";

import logo from "/src/assets/img/logo.png";

function Header() {
// { active, setModal }
  const [burgerActive, setBurgerActive] = useState(true);
  let [price, setPriceActive] = useState(true);
  let [port, setPortActive] = useState(true);
  const location = useLocation();
  useEffect(() => {}, []);
  const [active, setActive] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleActive = () => {
    setModal(!active);
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

  const moveSubs = (partList) => {
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
      <Modal active={active} setActive={setActive}>
        {/* <Notes serviceTitle={service.name}></Notes> */}
        <Notes></Notes>
      </Modal>
      <header className={style.header}>
        <div className={style.container}>
          {/* <button
            style={{ backgroundColor: "transparent" }}
            onClick={() => aboutPersonal("mainScreen")}
            id="mainS"
            className={style.logoCont}
          >
            <img src={logo} alt="" className={style.logo} />
          </button> */}

          <Logo aboutPersonal={aboutPersonal}></Logo>

          <nav className={style.menu}>
            <ul className={style.list}>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("services")}
                id="serv"
              >
                Послуги
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("aboutTeam")}
                id="about"
              >
                Про нас
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => movePrices("prices")}
                id="linkPrice"
              >
                Ціни
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("feedback")}
                id="slider"
              >
                Відгуки
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => movePortfolio("portfolio")}
                id="linkPort"
              >
                Портфоліо
              </button>
            </ul>
            <button onClick={() => moveSubs("subs")} className={style.btn}>
              Записатися
            </button>
          </nav>
          <div
            onClick={() => setBurgerActive(burgerActive ? false : true)}
            className={burgerActive ? style.burgerBtn : style.burgerBtnActive}
          ></div>

          <div className={burgerActive ? style.burgerActive : style.burger}>
            <nav className={style.burgerMenu}>
              <ul className={style.burgerList}>
                <button
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    setBurgerActive(burgerActive ? false : true);
                    aboutPersonal("services");
                  }}
                  className={style.navLink}
                  id="serv1"
                >
                  Послуги
                </button>
                <button
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    setBurgerActive(burgerActive ? false : true);
                    aboutPersonal("aboutTeam");
                  }}
                  className={style.navLink}
                  id="about1"
                >
                  Про нас
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    setBurgerActive(burgerActive ? false : true);
                    movePrices("prices");
                  }}
                  id="linkPrice1"
                >
                  Ціни
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    aboutPersonal("feedback");
                    setBurgerActive(burgerActive ? false : true);
                  }}
                  id="slider1"
                >
                  Відгуки
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    movePortfolio("portfolio");
                    setBurgerActive(burgerActive ? false : true);
                  }}
                  id="linkPort1"
                >
                  Портфоліо
                </button>
              </ul>
              <button
                onClick={() => {
                  moveSubs("subs");
                }}
                className={style.btn}
              >
                Записатися
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
