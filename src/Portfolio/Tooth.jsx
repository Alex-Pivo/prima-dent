import style from "../css/portfolio.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

import picLeft1 from "/src/4Block/tooth/2.png";
import picRight1 from "/src/4Block/tooth/11.png";

import picLeft2 from "/src/4Block/tooth/34.png";
import picRight2 from "/src/4Block/tooth/311.png";

import picLeft3 from "/src/4Block/tooth/6.png";
import picRight3 from "/src/4Block/tooth/51.png";

import picLeft4 from "/src/4Block/tooth/48.png";
import picRight4 from "/src/4Block/tooth/7.png";

const pics = [picLeft1, picLeft2, picLeft3, picLeft4];
const pics2 = [picRight1, picRight2, picRight3, picRight4];

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

function Tooth({ tooth }) {
  $(function () {
    $("#draggable1").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable2").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable3").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable4").draggable({
      axis: "x",
      containment: "parent",
    });
  });
  var poss = $("#draggable1").position();
  let initialState = [0, 0, 0, 0];
  let [active, setActive] = useState(initialState);

  let line = $(`#line`).width();
  let display;
  if (active > 0) {
    display = "block";
  } else display = "none";

  let shtov = "< Штовхай >";

  return (
    <>
      <motion.div
        custom={tooth.id}
        variants={textAnimation}
        className={style.photosBox}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <h2 className={style.name} style={{marginBottom: "20px"}}>{tooth.name}</h2>

        <div className={style.photos}>
          <div
            className={style.photoLeft}
            style={{
              backgroundImage: `url("${pics[tooth.id - 1]}")`,
            }}
          >
            <div
              className={style.photoRight}
              style={{
                width: `${active}px`,
              }}
            >
              <div
                className={style.photoTooth}
                style={{
                  backgroundImage: `url("${pics2[tooth.id - 1]}")`,
                }}
              ></div>
            </div>
            <div
              onPointerMove={() => {
                var p = $(`#draggable${tooth.id}`).position();
                var pos = p.left;
                var pLeft = $(`#draggable${tooth.id}`).width();
                setActive((active = pos + pLeft / 2));
              }}
              className={style.circle}
              id={`draggable${tooth.id}`}
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
        </div>
      </motion.div>
    </>
  );
}

export default Tooth;
