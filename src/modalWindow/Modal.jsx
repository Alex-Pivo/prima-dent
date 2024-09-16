import style from "./modalWindow.module.scss";
import { useState } from "react";
import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";

const Modal = ({ active, setActive }) => {
  let [box, setBox] = useState(false);
  let [flag, setFlag] = useState(0);
  let [phone, setPhone] = useState("");

  //----------------
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [vaild, setValid] = useState(true);

  const handleChange = (value) => {
    const formattedPhone = `+${value}`;
    setPhone(formattedPhone);
    setValid(validatePhoneNumber(formattedPhone));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
    exit: (custom) => ({
      y: -100,
      opacity: 0,
      transition: { delay: custom * 0.4 },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("phone", phone);
      // data.append("code", code);

      const response = await axios.post(
        "https://primaserver5-tja5-alex-pivo-alexpivos-projects.vercel.app/submit2",
        data
      );

      if (response.status === 200) {
        console.log("Данные успешно отправлены в Telegram");
        alert("Ви успішно записалися! Чекайте на дзвінок від лікаря :)");
        location.reload();
      } else {
        console.log("Произошла ошибка");
      }
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={active ? style.active : style.modal}
      >
        <p className={style.title}>Залиште свій номер і ми зателефонуємо вам</p>
        <PhoneInput
          className={style.phoneInput}
          country={"ua"}
          value={phone}
          onChange={handleChange}
          required
          inputProps={{
            name: "phone",
            required: true,
          }}
          inputClass={style.formNum}
          buttonClass={style.butNum}
        />
        <button className={style.btn}>Зателефонуйте нам</button>
        <p className={style.text}>
          Наш номер: <br /> +38 (050) 628 32 86
        </p>
      </form>
    </>
  );
};

export default Modal;
