import * as React from "react";
import { NavLink } from "react-router-dom";
import home from "../../../assets/img/news/home.svg";
import styles from "./breadcrumbs.module.css";
import { useAppDispatch } from "../../../hooks";
import { setLine } from "../../../store/underline/underline.slice";
interface Props {
  links: {
    name: string;
    link: string;
    img?: string;
    imgPos?: string;
  }[];
}

const Breadcrumbs = ({ links }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <ul className={styles.row}>
      <li>
        <NavLink
          to="/"
          onClick={() => {
            dispatch(setLine("/"));
          }}
        >
          <img src={home} alt="home" />
        </NavLink>
      </li>
      {links.map((link) => {
        return (
          <li key={link.link}>
            <div className={styles.point}></div>
            <NavLink
              to={link.link}
              className={styles.link}
              onClick={() => {
                dispatch(setLine(link.link));
              }}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Breadcrumbs;
