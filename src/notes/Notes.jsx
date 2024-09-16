import style from "./notes.module.scss";
import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import pF1 from "/src/assets/img/Flag.svg";
import pF2 from "/src/8Block/flags/Slovakia.svg";
import pF3 from "/src/8Block/flags/Czech.svg";
import pF4 from "/src/8Block/flags/Hungary.svg";

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

function Notes({ serviceTitle }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("phone", phone);
      data.append("service", serviceTitle);

      const response = await axios.post(
        "https://primaserver5-tja5-alex-pivo-alexpivos-projects.vercel.app/submit3",
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

  //----------------
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [vaild, setValid] = useState(true);

  const handleChange = (value) => {
    // Format the phone number with a leading '+' sign
    const formattedPhone = `+${value}`;
    setPhone(formattedPhone);
    setValid(validatePhoneNumber(formattedPhone));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className={style.eighthBlock}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Запишись <span>{serviceTitle}</span> онлайн
            </motion.h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <motion.div
                custom={2}
                variants={textAnimation}
                className={style.inputs}
              >
                <div className={style.first}>
                  <p className={style.text}>Ваше ім’я:</p>
                  <input
                    type="text"
                    name="name"
                    className={style.name}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={style.second}>
                  <p className={style.text}>Ваш телефон:</p>
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
                </div>
              </motion.div>
              <motion.button
                custom={3}
                variants={textAnimation}
                type="submit"
                className={style.btn}
              >
                Записатись
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Notes;
