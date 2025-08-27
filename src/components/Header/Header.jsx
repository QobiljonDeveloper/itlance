import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar-lists">
            <li>
              <a href="#">Наши услуги</a>
            </li>
            <li>
              <a href="#">Статьи</a>
            </li>
            <li>
              <a href="#">Информация</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>

          <div className="navbar-buttons">
            <button>Отправить заявку</button>
            <select name="" id="">
              <option value="rus">Rus</option>
              <option value="uz">Uz</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
