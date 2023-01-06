import React from "react";
import styles from "./contakts.module.css";
import map from "../../assets/img/contacts/map.svg";
import mail from "../../assets/img/contacts/mail.svg";
import phone from "../../assets/img/contacts/phone.svg";
import clock from "../../assets/img/contacts/clock.svg";
import viber from "../../assets/img/contacts/viber.svg";
import telegram from "../../assets/img/contacts/telegram.svg";
import whatsapp from "../../assets/img/contacts/whatsapp.svg";
import worning from "../../assets/img/contacts/worning.svg";
import axios from "axios";
import config from "../../config.json";
import MainButton from "../../components/common/buttons/mainButton";
const Contakts = () => {
  const endpoint = `${config.apiEndpoint}message/`;
  const [data, setData] = React.useState({ name: "", mail: "", message: "" });
  const [errors, setErrors] = React.useState({
    name: "",
    mail: "",
    message: "",
    isErrors: true,
  });
  const [messageSended, setMessageSended] = React.useState(false);
  const pushButton = () => {
    setMessageSended(false);
  };
  const handleSetData = (target: HTMLInputElement | HTMLTextAreaElement) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  React.useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    setErrors({ name: "", mail: "", message: "", isErrors: false });
    if (!data.mail.trim()) {
      setErrors((prev) => ({
        ...prev,
        mail: "Поле обязательно для заполнения",
        isErrors: true,
      }));
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.mail)) {
      setErrors((prev) => ({
        ...prev,
        mail: "Некорректный e-mail",
        isErrors: true,
      }));
    }
    if (data.name.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Минимум 3 символа",
        isErrors: true,
      }));
    }
    if (data.message.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        message: "Минимум 10 символов",
        isErrors: true,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const respons = await axios.post(endpoint, {
        payload: data,
      });
      if (respons.status === 200) {
        setMessageSended(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.contaks}>
      {messageSended && (
        <div className={styles.send}>
          <div className={styles.send_window}>
            <div className={styles.send_title}>Ваше письмо отправлено!!</div>
            <MainButton
              btnData={{ name: "Закрыть окно", data: "close" }}
              mainClass="yellow_btn"
              pushButton={pushButton}
            />
          </div>
        </div>
      )}
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.title}>Контакты</h3>
            <p className={styles.text}>
              Если у Вас есть пожелания, предложения или претензии по
              организации работы сайта мы всегда рады услышать Ваше мнение.
            </p>
            <ul className={styles.order}>
              <li className={styles.order_item}>
                <img src={map} alt="map" />
                220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
              </li>
              <li className={styles.order_item}>
                <img src={phone} alt="phone" />
                +375 29 621-48-33
                <img src={viber} alt="viber" />
                <img src={telegram} alt="telegram" />
                <img src={whatsapp} alt="whatsapp" />
              </li>
              <li className={styles.order_item}>
                <img src={mail} alt="mail" />
                sdaem@sdaem.by
              </li>
              <li className={styles.order_item}>
                <img src={clock} alt="clock" />
                Режим работы: 08:00-22:00
              </li>
            </ul>
            <p className={styles.text}>
              ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом
              10.02.2016
            </p>
            <div className={styles.worning}>
              <img src={worning} alt="worning" />
              <p className={styles.worning_text}>
                Администрация сайта не владеет информацией о наличии свободных
                квартир
              </p>
            </div>
          </div>
          <div className={styles.col_form}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form_row}>
                <div className={styles.form_col}>
                  <div className={styles.label}>Ваше имя</div>
                  <input
                    placeholder="Введите имя"
                    className={styles.input}
                    name="name"
                    onChange={(e) => handleSetData(e.target)}
                    value={data.name}
                  ></input>
                  {errors.name && (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                </div>
                <div className={styles.form_col}>
                  <div className={styles.label}>Ваша электронная почта</div>
                  <input
                    placeholder="Ведите e-mail"
                    className={styles.input}
                    name="mail"
                    onChange={(e) => handleSetData(e.target)}
                    value={data.mail}
                  ></input>
                  <div className={styles.error}>{errors.mail}</div>
                </div>
              </div>
              <textarea
                className={styles.tetxarea}
                placeholder="Ваше сообщение"
                name="message"
                onChange={(e) => handleSetData(e.target)}
                value={data.message}
              ></textarea>
              <div className={styles.error}>{errors.message}</div>
              <button
                type="submit"
                className={styles.btn}
                disabled={errors.isErrors}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contakts;
