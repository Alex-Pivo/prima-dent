import styles from "./team.module.scss";
import Footer from "../9Footer/Footer";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

// import required modules
import { EffectCards } from "swiper/modules";
import { Navigation } from "swiper/modules";

function Team() {
  return (
    <>
      <div id="team" className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.title}>Наша команда</h2>

          <section className={styles.box}>
            <div
              className={styles.item}
              style={{
                backgroundColor: "#e2e4ec",
              }}
            >
              <div className={styles.left}>
                <img
                  className={styles.img}
                  src="/maks.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className={styles.info}>
                  <h4 className={styles.name}>
                    <span>Прийма Максим Борисович</span> <br />{" "}
                    Стоматолог-хірург, ортопед
                  </h4>
                  <p className={styles.descr}>
                    Власник стоматології Прімадент. Вирішив стати лікарем ще у 4
                    роки як його батько. <br /> Пройшов більше 50 курсів з
                    хірургії та естетичної стоматології. <br /> Спеціалізується
                    на повному відновленні зубного ряду за допомогою дентальних
                    імплантатів в методиках all-on-4, all-on-6 та на безпечній
                    зміні усмішки керамічними вінірами.
                  </p>
                </div>
              </div>

              <div className={styles.right}>
                <Swiper
                  pagination={true}
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  cardsEffect={{
                    slideShadows: false,
                  }}
                  //   autoHeight={true}
                  centeredSlides={true}
                  className={styles.swiper}
                >
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/1.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/2.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/3.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/4.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/5.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/6.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/7.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/8.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/9.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/10.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/11.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/MaksSert/12.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className={`${styles.item} ${styles.itemVal}`}>
              <div className={`${styles.right} ${styles.rightVal}`}>
                <Swiper
                  pagination={true}
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  cardsEffect={{
                    slideShadows: false,
                  }}
                  //   autoHeight={true}
                  centeredSlides={true} /* Центрирование слайдов */
                  className={styles.swiper}
                >
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/1.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/2.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/3.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/4.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/5.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/6.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/ValeraSert/7.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div
                className={`${styles.left} ${styles.leftVal}`}
                // style={{
                //   alignItems: "flex-end",
                // }}
              >
                <img
                  className={styles.img}
                  src="/valera.jpg"
                  alt=""
                  loading="lazy"
                />
                <div
                  className={styles.info}
                  //   style={{
                  //     alignItems: "flex-end",
                  //   }}
                >
                  <h4 className={styles.name}>
                    <span>Валерій Малець</span> <br /> Лікар-стоматолог терапевт
                  </h4>
                  <p className={styles.descr}>
                    Виконує такі маніпуляції як: професійна гігієна; кюретаж;
                    відбілювання зубів; лікуванню карієсу та художньому
                    відновленню анатомії зуба; лікуванню та переліковуванню
                    кореневих каналів.
                    <br /> Головний девіз «Я сприймаю стоматологію як мистецтво:
                    у рамках цієї професії можна створювати шедеври, яким би
                    респектнув сам Да Вінчі.»
                  </p>
                </div>
              </div>
            </div>

            <div
              className={styles.item}
              style={{
                backgroundColor: "#e2e4ec",
              }}
            >
              <div className={styles.left}>
                <img
                  className={`${styles.img} ${styles.diana}`}
                  src="/diana4.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className={styles.info}>
                  <h4 className={styles.name}>
                    <span>Скирчук Діана Олексіївна</span> <br /> Лікар-терапевт
                  </h4>
                  <p className={styles.descr}>
                    Скирчук Діана Олексіївна - лікар-терапевт стоматології
                    PRIMADENT. Спеціалізується на високоестечних реставраціях,
                    парадонтологічному лікуванні, професійній гігієні.
                  </p>
                </div>
              </div>

              <div className={styles.right}>
                <Swiper
                  pagination={true}
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  cardsEffect={{
                    slideShadows: false,
                  }}
                  //   autoHeight={true}
                  centeredSlides={true}
                  className={`${styles.swiper} ${styles.swiperDi}`}
                >
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/Diana/1.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/Diana/2.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/Diana/3.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/Diana/4.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <img
                      className={styles.img}
                      src="/Diana/5.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          <div className={styles.gallery}>
            <h2 className={styles.title}>Галерея</h2>

            <Swiper
              navigation={true}
              effect={"coverflow"}
              grabCursor={true}
              modules={[Navigation, Pagination, EffectCoverflow]}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              className={styles.gallery_slider}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
            >
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/1.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/2.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/3.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/4.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/5.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/6.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/7.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/8.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/9.jpg" alt="" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <img src="/Gallery/10.jpg" alt="" loading="lazy" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Team;
