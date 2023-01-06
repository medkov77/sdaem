import * as React from "react";
import styles from "./slider.module.css";
import prev from "../../assets/img/main/prev.svg";
import next from "../../assets/img/main/next.svg";
import Slider from "react-slick";
import FlatKart from "../flats/falt_kart";
import { Iflat } from "../../models";

const MainSlider = ({ slider }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className={`next-slick-arrow ${styles.next}`}> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className={`prev-slick-arrow ${styles.prev_arrow}`}> </div>
      </div>
    ),
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slider.map((flat: Iflat) => (
          <FlatKart key={flat._id} {...flat} />
        ))}
      </Slider>
    </div>
  );
};
export default MainSlider;
