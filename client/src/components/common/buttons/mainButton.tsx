import * as React from "react";
import styles from "./button.module.css";
interface Props {
  mainClass: string;
  btnData: {
    name: string;
    data: string;
  };
  pushButton: Function;
  img?: string;
  imgPos?: string;
}

const MainButton = ({ mainClass, btnData, pushButton, img, imgPos }: Props) => {
  return (
    <>
      <button
        datatype={btnData.data}
        className={`${styles.btn} ${styles[mainClass]}`}
        onClick={() => {
          pushButton(btnData.data);
        }}
      >
        {imgPos === "left" && <img src={img} alt="btn-arrow" />}
        {btnData.name}
        {imgPos === "right" && <img src={img} alt="btn-arrow" />}
      </button>
    </>
  );
};
export default MainButton;
