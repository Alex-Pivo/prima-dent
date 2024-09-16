import React, { useEffect, useState, Children, cloneElement } from "react";
import style from "../css/slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

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

const PAGE__WIDTH = 100;

function Slider({ children }) {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE__WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE__WIDTH;
      const maxOffset = -(PAGE__WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  const handleOneClick = () => {
    setOffset(() => {
      const newOffset = 0;
      return newOffset;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleRightArrowClick(),
    onSwipedRight: () => handleLeftArrowClick(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleTwoClick = () => {
    setOffset(() => {
      const newOffset = -100;
      return newOffset;
    });
  };

  const handleThreeClick = () => {
    setOffset(() => {
      const newOffset = -200;
      return newOffset;
    });
  };

  const handleFourClick = () => {
    setOffset(() => {
      const newOffset = -300;
      return newOffset;
    });
  };

  let colorOne = "";
  let colorTwo = "";
  let colorThree = "";
  let colorFour = "";
  const changeColor = () => {
    if (offset == 0) {
      colorOne = "#8487A4";
    } else if (offset == -100) {
      colorTwo = "#8487A4";
    } else if (offset == -200) {
      colorThree = "#8487A4";
    } else if (offset == -300) {
      colorFour = "#8487A4";
    } else {
      colorOne = "#c7c8ca";
      colorTwo = "#c7c8ca";
      colorThree = "#c7c8ca";
      colorFour = "#c7c8ca";
    }
  };

  changeColor();

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE__WIDTH}%`,
            maxWidth: `${PAGE__WIDTH}%`,
          },
        });
      })
    );
  }, []);

  $(function () {
    $("#draggable").draggable({
      axis: "x",
      containment: "parent",
    });
  });

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.mainContainer} id={"feedback"}>
          <motion.h2
            custom={1}
            variants={textAnimation}
            className={style.title}
          >
            Що кажуть про нас <span>наші клієнти</span>
          </motion.h2>
          <motion.div
            custom={3}
            variants={textAnimation}
            className={style.container}
          >
            <FaChevronLeft
              className={style.arrow}
              onClick={handleLeftArrowClick}
            ></FaChevronLeft>
            <div className={style.window}>
              <div
                id="draggable"
                className={style.slide}
                style={{
                  transform: `translateX(${offset}%)`,
                }}
                {...handlers}
              >
                {pages}
              </div>
            </div>
            <FaChevronRight
              className={style.arrow}
              onClick={handleRightArrowClick}
            ></FaChevronRight>
          </motion.div>
          <div className={style.dots}>
            <button
              className={style.dotOne}
              style={{
                backgroundColor: `${colorOne}`,
              }}
              onClick={handleOneClick}
            ></button>
            <button
              className={style.dotTwo}
              style={{
                backgroundColor: `${colorTwo}`,
              }}
              onClick={handleTwoClick}
            ></button>
            <button
              className={style.dotThree}
              style={{
                backgroundColor: `${colorThree}`,
              }}
              onClick={handleThreeClick}
            ></button>
            <button
              className={style.dotThree}
              style={{
                backgroundColor: `${colorFour}`,
              }}
              onClick={handleFourClick}
            ></button>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Slider;
