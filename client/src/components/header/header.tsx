import * as React from "react";
import FirstLine from "./firstLine";
import styles from "./header.module.css";
import grayMap from "../../assets/img/header/grayMap.svg";
import heart from "../../assets/img/header/heart.png";
import yellowMap from "../../assets/img/header/yellowMap.svg";
import logo from "../../assets/img/header/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getLine, setLine } from "../../store/underline/underline.slice";
const Header = () => {
  interface links {
    name: string;
    link: string;
    class: string;
    img?: string;
    imgPos?: string;
    notUnderLine?: boolean;
  }
  const dispatch = useAppDispatch();
  const underLine = useAppSelector(getLine());
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const handleUnderline = (currentLink: string) => {
    dispatch(setLine(currentLink));
    setMobileMenu(false);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const firstLine: links[] = [
    { name: "Главная", link: "/", class: "first_item" },
    { name: "Новости", link: "/news", class: "first_item" },
    { name: "Размещение и тарифы", link: "/tarifs", class: "first_item" },
    {
      name: "Объявления на карте",
      link: "/map",
      class: "first_item",
      img: grayMap,
      imgPos: "left",
    },
    { name: "Контакты", link: "/contacts", class: "first_item" },
  ];
  const firstLineRight: links[] = [
    {
      name: "Закладки",
      link: "/bookmarks",
      img: heart,
      imgPos: "right",
      class: "bookmarks",
    },
    { name: "Вход и регистрация", link: "login", class: "login" },
  ];
  const secondLine: links[] = [
    {
      name: "Квартиры на сутки",
      link: "/for_a_day",
      class: "second_item",
      img: yellowMap,
      imgPos: "right",
    },
    { name: "Коттеджи и усадьбы", link: "/houses", class: "second_item" },
    { name: "Бани и Сауны", link: "/bath", class: "second_item" },
    { name: "Авто напрокат", link: "/auto", class: "second_item" },
    {
      name: "+  Разместить объявление",
      link: "/add",
      class: "add",
      notUnderLine: true,
    },
  ];
  const mobile: links[] = [
    { name: "Главная", link: "/", class: "mobile_item" },
    { name: "Новости", link: "/news", class: "mobile_item" },
    { name: "Размещение и тарифы", link: "/tarifs", class: "mobile_item" },
    {
      name: "Объявления на карте",
      link: "/map",
      class: "mobile_item",
      img: grayMap,
      imgPos: "left",
    },
    { name: "Контакты", link: "/contacts", class: "mobile_item" },
    {
      name: "Закладки",
      link: "/bookmarks",
      img: heart,
      imgPos: "right",
      class: "mobile_item",
    },
    { name: "Вход и регистрация", link: "login", class: "mobile_item" },
    {
      name: "Квартиры на сутки",
      link: "/for_a_day",
      class: "second_item",
      img: yellowMap,
      imgPos: "right",
    },
    { name: "Коттеджи и усадьбы", link: "/houses", class: "mobile_item" },
    { name: "Бани и Сауны", link: "/bath", class: "mobile_item" },
    { name: "Авто напрокат", link: "/auto", class: "mobile_item" },
  ];
  return (
    <header>
      <div className={styles.wrapper}>
        <div className="container">
          {mobileMenu && (
            <div className={styles.mobile_menu}>
              <MdClose
                size={30}
                className={styles.close}
                onClick={closeMobileMenu}
              />
              <FirstLine
                links={mobile}
                onUnderline={handleUnderline}
                currentLink={underLine}
                mainClass="mobile_wrapper"
              />
            </div>
          )}
          <div className={styles.row}>
            <GiHamburgerMenu
              size={22}
              className={styles.meunu_btn}
              onClick={() => {
                setMobileMenu(true);
              }}
            />
            <FirstLine
              links={firstLine}
              onUnderline={handleUnderline}
              currentLink={underLine}
            />
            <FirstLine
              links={firstLineRight}
              onUnderline={handleUnderline}
              currentLink={underLine}
            />
          </div>
        </div>
      </div>
      <div className={styles.secong_line}>
        <div className={`container ${styles.second_container}`}>
          <img src={logo} alt="logo" className={styles.logo} />
          <FirstLine
            links={secondLine}
            onUnderline={handleUnderline}
            currentLink={underLine}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
