import * as React from "react";
import styles from "./auth.module.css";
import loginImg from "../../../assets/img/auth/login.svg";
import password from "../../../assets/img/auth/password.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { login } from "../../../store/ActionCreators";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = React.useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    login: "",
    password: "",
    isErrors: true,
  });
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const navigate = useNavigate();
  const handleChange = (target: HTMLInputElement | HTMLTextAreaElement) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email: data.login, password: data.password }));
    if (isLoggedIn) {
      navigate(-1);
    }
  };

  const validate = () => {
    setErrors({
      login: "",
      password: "",
      isErrors: false,
    });

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
  };

  React.useEffect(() => {
    validate();
  }, [data]);
  return (
    <div className={styles.overlay}>
      <div className={styles.window}>
        <div className={styles.login_title}>Авторизация</div>
        <p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <div className={styles.input_item}>
            <img src={loginImg} alt="login" className={styles.icon} />
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
          <button
            type="submit"
            className={styles.btn}
            disabled={errors.isErrors}
          >
            Войти
          </button>
        </form>
        <p className={styles.login_text}>
          Еще нет аккаунта?{" "}
          <NavLink to="/auth" className={styles.login_link}>
            Создайте акканут
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Login;
