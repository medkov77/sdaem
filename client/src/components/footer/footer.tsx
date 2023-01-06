import * as React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/img/header/logo.png";
import { NavLink } from "react-router-dom";
import visa from "../../assets/img/footer/visa.svg";
import webPay from "../../assets/img/footer/webpay.svg";
import verify from "../../assets/img/footer/verified-by-visa.svg";
import master from "../../assets/img/footer/mastercard.svg";
import secure from "../../assets/img/footer/securecode.svg";
import belcard from "../../assets/img/footer/belkart.svg";
import Social from "../social/social";
const Footer = () => {
  interface Ilinks {
    name: string;
    link: string;
    class: string;
  }
  const links: Ilinks[] = [
    { name: "Коттеджи и усадьбы", link: "/houses", class: "bold" },
    { name: "Бани и Сауны", link: "/bath", class: "bold" },
    { name: "Авто напрокат", link: "/auto", class: "bold" },
    { name: "Квартиры", link: "/flats", class: "bold" },
    { name: "Квартиры в Минске", link: "/flats/Minsk", class: "normal" },
    { name: "Квартиры в Гомеле", link: "/flats/Gomel", class: "normal" },
    { name: "Квартиры в Бресте", link: "/flats/Brest", class: "normal" },
    {
      name: "Квартиры в Витебске",
      link: "/flats/Vitebsk",
      class: "normal",
    },
    { name: "Квартиры в Гродно", link: "/flats/Grodno", class: "normal" },
    {
      name: "Квартиры в Могилеве",
      link: "/flats/Mogilev",
      class: "normal",
    },
    { name: "Новости", link: "/news", class: "normal" },
    { name: "Размещение и тарифы", link: "/tarifs", class: "normal" },
    {
      name: "Объявления на карте",
      link: "/map",
      class: "normal",
    },
    { name: "Контакты", link: "/contacts", class: "normal" },
  ];

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <NavLink to="/" className={styles.link}>
              <img src={logo} alt="logo" />
            </NavLink>
            <div className={styles.subtitle}>СДАЁМ БАЙ</div>
            <p className={styles.data}>
              ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом{" "}
              <br /> 10.02.2016 220068, <br /> РБ, г. Минск, ул. Осипенко, 21,
              кв.23 +375 29 621 48 33, sdaem@sdaem.by <br /> Режим работы:
              08:00-22:00
            </p>
          </div>
          <div className={styles.right}>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.link}>
                  <NavLink to={link.link} className={styles[link.class]}>
                    {link.name}
                  </NavLink>{" "}
                </li>
              ))}
            </ul>
            <div className={styles.down_row}>
              <Social />
              <div className={styles.pay}>
                <img src={visa} alt="visa" />
                <img src={webPay} alt="webpay" />
                <img src={verify} alt="verify" />
                <img src={master} alt="master-card" />
                <img src={secure} alt="secure" />
                <img src={belcard} alt="belcard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
