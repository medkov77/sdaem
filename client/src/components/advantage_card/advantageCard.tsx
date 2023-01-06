import * as React from "react";
import styles from "./advantageCard.module.css";
import MainButton from "../common/buttons/mainButton";
interface Props {
  title: string;
  image?: string;
  text: string[][] | React.ReactNode[][];
  cardClass: string;
  btn: {
    mainClass: string;
    btnData: {
      name: string;
      data: string;
    };
    pushButton: Function;
    img?: string;
    imgPos?: string;
  };
}

const AdvantageCard = ({ title, image, text, btn, cardClass }: Props) => {
  return (
    <div className={`${styles[cardClass]} ${styles.card}`}>
      <div className={styles.row}>
        {image && <img src={image} alt="advantage" />}
        <div className={styles.title}>{title}</div>
      </div>
      {text.map((paragraf, index) => (
        <p className={styles.text} key={`paragpaf${index}`}>
          {paragraf.map((text, index) => (
            <span key={`paragpaf${index}`}>{text}</span>
          ))}
        </p>
      ))}
      <MainButton {...btn} />
    </div>
  );
};
export default AdvantageCard;
