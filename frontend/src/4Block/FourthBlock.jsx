import style from "./fourthBlock.module.scss";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

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

function FourthBlock() {
  let [active, setActive] = useState(0);
  $(function () {
    $("#draggable").draggable({
      axis: "x",
      containment: "parent",
    });
  });

  let line = $(`#line`).width();
  let display;
  if (active > 0) {
    display = "block";
  } else display = "none";

  let shtov = "< Штовхай >";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  const nav = useNavigate();

  const movePortfolio = (partList) => {
    if (location.pathname !== "portfolio") {
      nav("/portfolio");
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
        <div className={style.fourthBlock}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Історії наших пацієнтів:
            </motion.h2>
            <motion.div
              custom={2}
              variants={textAnimation}
              className={style.photos}
            >
              <div className={style.photoLeft}>
                <div
                  className={style.photoRight}
                  style={{
                    width: `${active}px`,
                  }}
                >
                  <div className={style.photoTooth}></div>
                </div>
                <div
                  onPointerMove={() => {
                    var p = $("#draggable").position();
                    var pos = p.left;
                    var pLeft = $("#draggable").width();
                    setActive((active = pos + pLeft / 2));
                  }}
                  className={style.circle}
                  id="draggable"
                >
                  <div className={style.barrier}>
                    <p className={style.circleText}>{shtov}</p>
                  </div>
                </div>
                <div
                  id="line"
                  className={style.line}
                  style={{
                    left: `${active - line / 2}px`,
                    display: `${display}`,
                  }}
                ></div>
              </div>
            </motion.div>
            <motion.button
              custom={3}
              variants={textAnimation}
              className={style.btn}
              onClick={() => movePortfolio("portfolio")}
            >
              Наше портфоліо
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default FourthBlock;
