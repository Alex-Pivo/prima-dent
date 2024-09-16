import App from "./App";
import Portfolio from "./Portfolio/Portfolio";
import Prices from "./Prices/Prices";
import Header from "./header/Header";
import Modal from "./Modal/Modal";
import NotesTwo from "./notes/NotesTwo";
import EighthBlock from "./8Block/EighthBlock";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { DNA } from "react-loader-spinner";
import styles from "./mainapp.module.scss";
import Team from "./Team/Team";

function MainApp() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Устанавливаем таймер на 2 секунды
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);

  //   // Очищаем таймер при размонтировании компонента
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    // Таймер для завершения загрузки через 4 секунды
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setCount(start);

        if (start === 100) {
          clearInterval(interval);
        }
      }, 29); // 100 шагов за 4000мс (40мс на каждый шаг)

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className={styles.wrapper}>
          {/* <DNA
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          /> */}
          <div className={styles.block}>
            <img className={styles.tooth} src="/anim/Tooth.png" alt="" />
            <div className={styles.box}>
              <img className={styles.prima} src="/anim/Primadent.png" alt="" />
              <img className={styles.sto} src="/anim/Sto.png" alt="" />
            </div>
          </div>

          <p className={styles.count}>{count}</p>
        </div>
      ) : (
        <BrowserRouter>
          {/* {active && (
            <Modal active={active} setActive={setActive}>
              <NotesTwo></NotesTwo>
            </Modal>
          )} */}
          <Header setModal={() => setActive(true)}></Header>
          <Routes>
            <Route path="/" element={<App></App>}></Route>
            <Route path="prices" element={<Prices></Prices>}></Route>
            <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route path="team" element={<Team></Team>}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default MainApp;
