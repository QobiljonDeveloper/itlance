import React from "react";
import { FiUser, FiPhone } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-subtitle">СПРОЕКТИРУЕМ СИСТЕМУ ВИДЕОНАБЛЮДЕНИЯ</h2>

      <div className="contact-card">
        <h3 className="contact-title">РЕШИМ ВАШУ IT - ЗАДАЧУ</h3>

        <form className="contact-form">
          <div className="contact-row">
            <label className="contact-label">
              <span>Меня зовут</span>
              <div className="contact-input">
                <FiUser className="icon" />
                <input type="text" placeholder="Ваше имя" />
              </div>
            </label>

            <label className="contact-label">
              <span>телефон</span>
              <div className="contact-input">
                <FiPhone className="icon" />
                <input type="tel" placeholder="Ваш номер телефона" />
              </div>
            </label>
          </div>

          <p className="contact-text">мне нужна система видеонаблюдения для</p>

          <textarea placeholder="Пожалуйста, опишите направление Вашего Бизнеса." />

          <button type="submit" className="btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
