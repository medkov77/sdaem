import * as React from "react";
import styles from "./social.module.css";
import istagramm from "../../assets/img/footer/istagramm.svg";
import vc from "../../assets/img/footer/vc.svg";
import facebook from "../../assets/img/footer/facebook.svg";
import { NavLink } from "react-router-dom";
const Social = () => {
    return (
        <div className={styles.social}>
            <div className={styles.title}>Мы в соцсетях</div>
            <NavLink to="/intagramm.com" target="_blank">
                <img src={istagramm} alt="istargramm" />
            </NavLink>
            <a href="/https://vk.com/" target="_blank">
                <img src={vc} alt="vc" />
            </a>
            <NavLink to="/facebook.com">
                <img src={facebook} alt="facebook" />
            </NavLink>
        </div>
    );
};
export default Social;
