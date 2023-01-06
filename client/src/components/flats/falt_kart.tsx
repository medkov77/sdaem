import * as React from "react";
import { Iflat } from "../../models";
import styles from "./flat_kart.module.css";
import peopleImg from "../../assets/img/main/people.svg";
import metroImg from "../../assets/img/main/metro.svg";
import map from "../../assets/img/header/grayMap.svg";
import phone from "../../assets/img/main/phone.svg";
import { url } from "inspector";
const FlatKart = ({
  price,
  people,
  sity,
  metro,
  department,
  adress,
  rooms,
  square,
  golg,
  flatImage,
}: Iflat) => {
  return (
    <div className={styles.kart}>
      <div className={styles.image}>
        <img src={flatImage} alt="flat" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.price_item}>
            <div className={styles.price}>{price} BYN</div>
            <div className={styles.day}>за сутки</div>
          </div>
          <div className={styles.item}>
            <img src={peopleImg} alt="people" />
            <div>{people} </div>
          </div>
          <div className={styles.item}>{rooms} комн.</div>
          <div className={styles.item}>
            {square} м <sup>2</sup>{" "}
          </div>
        </div>
        <div className={styles.adress}>
          <img src={map} alt="map" className={styles.icon} />
          <div>{adress}</div>
        </div>
        <div className={styles.adress}>
          <div className={styles.map}>
            <img src={metroImg} alt="map" className={styles.icon} />
            {metro}
          </div>
          <div className={styles.department}>{department}</div>
        </div>
        <p className={styles.text}>
          Какое-то описание квартиры, описание квартиры, описание квартиры,
          описание квартиры, описание квартиры, описание квартиры, описание
          квартиры, описание квартиры, описание квартиры, описание ...
        </p>
        <div className={styles.line}></div>
        <div className={styles.buttons}>
          <button
            className={styles.contaks}
            style={{
              background: `url("${phone}")`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "12px",
            }}
          >
            Контакты
          </button>
          <button className={styles.details}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};
export default FlatKart;
