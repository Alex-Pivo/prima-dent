import FirstBlock from "./1Block/FirstBlock.jsx";
import SecondBlock from "./2Block/SecondBlock.jsx";
import ThirdBlock from "./3Block/ThirdBlock.jsx";
import FourthBlock from "./4Block/FourthBlock.jsx";
import FifthBlock from "./5Block/FifthBlock.jsx";
import SixthBlock from "./6Block/SixthBlock.jsx";
import Slider from "./7Slider/Slider.jsx";
import EighthBlock from "./8Block/EighthBlock.jsx";
import Footer from "./9Footer/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./modalWindow/Modal.jsx";
import VisibilitySensor from "react-visibility-sensor";
import "./css/header.css";
import { DNA } from "react-loader-spinner";

import style from "./body/body.module.css";

function App() {
  const [modalActive, setModalActive] = useState(false);

  function onChange(isVisible) {
    if (isVisible === true) {
      $(function () {
        $("#serv").css({
          textDecoration: "underline",
          color: "#305381",
        });

        $("#serv1").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else if (isVisible === false) {
      $(function () {
        $("#serv").css({
          textDecoration: "none",
          color: "#282828",
        });

        $("#serv1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  }

  function onChangeAbout(isVisibleAbout) {
    if (isVisibleAbout === true) {
      $(function () {
        $("#about").css({
          textDecoration: "underline",
          color: "#305381",
        });

        $("#about1").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else if (isVisibleAbout === false) {
      $(function () {
        $("#about").css({
          textDecoration: "none",
          color: "#282828",
        });

        $("#about1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  }

  function onChangeSlider(isVisibleSlider) {
    if (isVisibleSlider === true) {
      $(function () {
        $("#slider").css({
          textDecoration: "underline",
          color: "#305381",
        });

        $("#slider1").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else if (isVisibleSlider === false) {
      $(function () {
        $("#slider").css({
          textDecoration: "none",
          color: "#282828",
        });

        $("#slider1").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  }

  return (
    <>
      <div className={style.body}>
        <FirstBlock></FirstBlock>
        {/* <div className={style.circle}>
          <div
            onClick={() => setModalActive(modalActive ? false : true)}
            className={modalActive ? style.cross : style.telegram}
          ></div>
        </div> */}
        <Modal active={modalActive} setActive={setModalActive}></Modal>
        <VisibilitySensor
          onChange={onChange}
          partialVisibility="top"
          minTopValue="220"
          minBottomValue="100"
        >
          <FifthBlock></FifthBlock>
        </VisibilitySensor>
        <SecondBlock></SecondBlock>
        <ThirdBlock></ThirdBlock>
        <FourthBlock></FourthBlock>

        <VisibilitySensor
          onChange={onChangeAbout}
          partialVisibility={top}
          minTopValue="220"
        >
          <SixthBlock></SixthBlock>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={onChangeSlider}
          partialVisibility={top}
          minTopValue="360"
        >
          <Slider>
            <div className={style.itemOne}>
              <div className={style.commentOne}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Велика подяка стоматологу Максиму за сумлінну майстерну роботу
                  з реставрації зубів. Лікування пройшло без болю, легко і
                  практично непомітно. Нарешті я знайшла чудового стоматолога
                  собі в м. Ужгород.
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#5b2162",
                    }}
                  >
                    С
                  </div>
                  <div className={style.name}>Світлана Аполова</div>
                </div>
              </div>
              <div className={style.commentTwo}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Я дуже задоволений якістю установки зубного імпланту та тим,
                  як лікар все детально розповідав на кожному кроці. Однозначно
                  рекомендую це найкраща стоматологія в Ужгороді!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#171a4d",
                    }}
                  >
                    М
                  </div>
                  <div className={style.name}>Михайло Грабовий</div>
                </div>
              </div>
            </div>
            <div className={style.itemTwo}>
              <div className={style.commentOne}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Лікувалась в стоматології Primadent у лікаря Валерія
                  Миколайовича з приводу лікування карієсу та чистці зубів.
                  Хотіла подякувати за якісно надані послуги!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#1d6324",
                    }}
                  >
                    А
                  </div>
                  <div className={style.name}>Анна Озарчук</div>
                </div>
              </div>
              <div className={style.commentTwo}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Довго не наважувався на імплантацію, проте Максим мене
                  переконав. В результаті отримав якісну роботу за вигідною
                  ціною та гарантією. Найкраща стоматологія!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#692323",
                    }}
                  >
                    Д
                  </div>
                  <div className={style.name}>Діма Кац</div>
                </div>
              </div>
            </div>
            <div className={style.itemThree}>
              <div className={style.commentOne}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Величезна подяка лікарям за професіоналізм, швидке та якісне
                  лікування та протезування зубів. Уважне ставлення до пацієнта.
                  Рекомендую як добрих фахівців!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#1b4f50",
                    }}
                  >
                    І
                  </div>
                  <div className={style.name}>Ірина Праченко</div>
                </div>
              </div>
              <div className={style.commentTwo}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Вітаю. В мене все чудово , нічого не боліло , їм прекрасно,
                  дуже острі зубчики. Дякую Вам дуже гарно. Ви майстер свого
                  діла. Дякую Богу і Вам ,за чудову роботу. Дай Вам Боже здоров
                  ячка . Bce оК.
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#501b4b",
                    }}
                  >
                    Ю
                  </div>
                  <div className={style.name}>Юлія Пащенко</div>
                </div>
              </div>
            </div>
            <div className={style.itemFour}>
              <div className={style.commentOne}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Дуже дякую стоматологу. Все зробив якісно та без болю.
                  Лікування пройшло швидко. Лікар швидко знайшов причину та
                  визначив методи лікування. Всім рекомендую лікування у цій
                  стоматології!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#1d6324",
                    }}
                  >
                    Л
                  </div>
                  <div className={style.name}>Людмила Сердюк</div>
                </div>
              </div>
              <div className={style.commentTwo}>
                <div className={style.stars}></div>
                <p className={style.text}>
                  Я дуже задоволений якістю установки зубного імпланту та тим,
                  як лікар все детально розповідав на кожному кроці. Однозначно
                  рекомендую це найкраща стоматологія в Ужгороді!
                </p>
                <div className={style.user}>
                  <div
                    className={style.box}
                    style={{
                      backgroundColor: "#928e49",
                    }}
                  >
                    Ю
                  </div>
                  <div className={style.name}>Юрій Кравченко</div>
                </div>
              </div>
            </div>
          </Slider>
        </VisibilitySensor>
        <EighthBlock></EighthBlock>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
