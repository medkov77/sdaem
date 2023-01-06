import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./newsItem.module.css";
import * as images from "../../assets/img/news";
interface Props {
  title: string;
  text: Array<string>;
  image: string;
  date: string;
  _id: string;
  subTitle: string;
}

const NewsItem = ({ title, subTitle, image, date, _id }: Props) => {
  return (
    <div className={styles.cart}>
      <img
        src={images[image as keyof object]}
        className={styles.image}
        alt="newsimage"
      />
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <div className={styles.row}>
          <div className={styles.date}>{date}</div>
          <NavLink to={`/news/${_id}`} className={styles.read}>
            Читать
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
