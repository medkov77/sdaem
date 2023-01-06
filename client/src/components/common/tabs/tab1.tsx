import * as React from "react";
import PriceInput from "../form/input/priseInput";
import Select from "../form/select/select";
import styles from "./tabs.module.css";
import shevron from "../../../assets/img/main/chevron.svg";
import mapBlue from "../../../assets/img/main/mapBlue.svg";
const Tab1 = () => {
  const initData: {
    sity: string;
    rooms: string;
    minPrice: string;
    maxPrice: string;
  } = {
    sity: "",
    rooms: "0",
    minPrice: "0",
    maxPrice: "0",
  };
  const [data, setData] = React.useState<typeof initData>(initData);
  const sityes: { name: string; value: string }[] = [
    { name: "Минск", value: "Minsk" },
    { name: "Гродно", value: "Grodno" },
    { name: "Витебск", value: "Vitebsk" },
  ];
  const rooms: { name: string; value: string }[] = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
  ];
  const onSelect = (name: string, value: string) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className={styles.tab_item}>
      <form className={styles.item_row} onSubmit={formSubmit}>
        <div className={styles.form_item}>
          <div className={styles.item_title}>Город</div>
          <Select
            options={sityes}
            name="sity"
            onSelect={onSelect}
            defaultName="Выберите"
          />
        </div>
        <div className={styles.form_item}>
          <div className={styles.item_title}>Комнаты</div>
          <Select
            options={rooms}
            name="rooms"
            onSelect={onSelect}
            defaultName="Выберите"
          />
        </div>
        <div className={styles.form_item}>
          <div className={styles.item_title}>Цена за сутки (BYN)</div>
          <div className={styles.inputs}>
            <PriceInput name="minPrice" defaultValue="От" onInput={onSelect} />
            <span className={styles.defis}>-</span>
            <PriceInput name="maxPrice" defaultValue="До" onInput={onSelect} />
          </div>
        </div>
        <div className={styles.form_item}>
          <div className={styles.right_item}>
            Больше опций
            <img src={shevron} alt="moo ptionss" />
          </div>
        </div>
        <div className={styles.form_item}>
          <div className={styles.right_item}>
            <div className={styles.map}>На карте </div>
            <img src={mapBlue} alt="on map" className={styles.map_img} />
          </div>
        </div>
        <div className={styles.form_item}>
          <button type="submit" className={styles.btn}>
            Показать
          </button>
        </div>
      </form>
    </div>
  );
};
export default Tab1;
