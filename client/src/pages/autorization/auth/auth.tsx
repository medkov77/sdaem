import * as React from "react";
import styles from "./auth.module.css";
import login from "../../../assets/img/auth/login.svg";
import email from "../../../assets/img/auth/mail.svg";
import password from "../../../assets/img/auth/password.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { singIn } from "../../../store/ActionCreators";
import { NavLink } from "react-router-dom";
const Auth = () => {
  const [data, setData] = React.useState({
    login: "",
    email: "",
    password: "",
    doublePassword: "",
  });
  const [errors, setErrors] = React.useState({
    login: "",
    email: "",
    password: "",
    doublePassword: "",
    isErrors: true,
  });
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  const handleChange = (target: HTMLInputElement | HTMLTextAreaElement) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      singIn({ email: data.email, password: data.password, name: data.login })
    );
  };

  const validate = () => {
    setErrors({
      login: "",
      email: "",
      password: "",
      doublePassword: "",
      isErrors: false,
    });
    if (!data.email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Поле обязательно для заполнения",
        isErrors: true,
      }));
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Некорректный e-email",
        isErrors: true,
      }));
    }
    if (data.login.trim().length < 5) {
      setErrors((prev) => ({
        ...prev,
        login: "Минимум 5 символов",
        isErrors: true,
      }));
    }
    if (data.password.trim().length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Минимум 8 символов",
        isErrors: true,
      }));
    }
    if (data.password.trim() !== data.doublePassword.trim()) {
      setErrors((prev) => ({
        ...prev,
        doublePassword: "Пароли не совпадают",
        isErrors: true,
      }));
    }
    console.log(errors);
  };

  React.useEffect(() => {
    validate();
  }, [data]);
  return (
    <div className={styles.overlay}>
      {isLoggedIn && (
        <div className={styles.window}>
          <div className={styles.title}>Регистрация прошла успешно</div>
          <NavLink to="/">
            <button className={styles.btn}>На глвную</button>
          </NavLink>
        </div>
      )}
      {!isLoggedIn && (
        <div className={styles.window}>
          <div className={styles.title}>Регистрация</div>
          <div className={styles.row}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input_item}>
                <img src={login} alt="login" className={styles.icon} />
                <input
                  className={
                    errors.login
                      ? `${styles.input} ${styles.error}`
                      : `${styles.input}`
                  }
                  placeholder="login"
                  type="text"
                  name="login"
                  value={data.login}
                  onChange={(e) => {
                    handleChange(e.target);
                  }}
                ></input>
                <div className={styles.error_message}>{errors.login}</div>
              </div>
              <div className={styles.input_item}>
                <img src={email} alt="email" className={styles.icon} />
                <input
                  className={
                    errors.email
                      ? `${styles.input} ${styles.error}`
                      : `${styles.input}`
                  }
                  type="eemail"
                  placeholder="e-email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    handleChange(e.target);
                  }}
                ></input>
                <div className={styles.error_message}>{errors.email}</div>
              </div>
              <div className={styles.input_item}>
                <img src={password} alt="password" className={styles.icon} />
                <input
                  className={
                    errors.password
                      ? `${styles.input} ${styles.error}`
                      : `${styles.input}`
                  }
                  placeholder="пароль"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={(e) => {
                    handleChange(e.target);
                  }}
                ></input>
                <div className={styles.error_message}>{errors.password}</div>
              </div>
              <div className={styles.input_item}>
                <img src={password} alt="password" className={styles.icon} />
                <input
                  className={
                    errors.doublePassword
                      ? `${styles.input} ${styles.error}`
                      : `${styles.input}`
                  }
                  placeholder="повторите пароль"
                  type="password"
                  name="doublePassword"
                  value={data.doublePassword}
                  onChange={(e) => {
                    handleChange(e.target);
                  }}
                ></input>
                <div className={styles.error_message}>
                  {errors.doublePassword}
                </div>
              </div>
              <button
                type="submit"
                className={styles.btn}
                disabled={errors.isErrors}
              >
                Зарегистрироваться
              </button>
            </form>
            <div className={styles.text}>
              Пользователь обязуется: предоставлять достоверную и актуальную
              информацию при регистрации и добавлении объекта; добавлять
              фотографии объектов соответствующие действительности.
              Администрация сайта sdaem.by оставляет за собой право удалять
              любую информацию, размещенную пользователем, если сочтет, что
              информация не соответствует действительности, носит оскорбительный
              характер, нарушает права и законные интересы других граждан либо
              действующее законодательство Республики Беларусь.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Auth;
