import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./firstLine.module.css";
interface Props {
  mainClass?: string;
  links: {
    name: string;
    link: string;
    class: string;
    img?: string;
    imgPos?: string;
    notUnderLine?: boolean;
  }[];
  onUnderline: Function;
  currentLink: string;
}

const FirstLine = ({
  links,
  onUnderline,
  currentLink,
  mainClass = "wrapper",
}: Props) => {
  return (
    <ul className={styles[mainClass]}>
      {links.map((link) => (
        <li className={styles[link.class]} key={link.link}>
          {link.img && link.imgPos === "left" && (
            <img src={link.img} alt={link.name} className="mr-1" />
          )}
          <NavLink
            to={link.link}
            onClick={() => {
              onUnderline(link.link);
            }}
          >
            {link.name}
          </NavLink>
          {link.img && link.imgPos === "right" && (
            <img src={link.img} alt={link.name} className="ml-1" />
          )}
          {currentLink === link.link && !link.notUnderLine && (
            <div className={styles.border}></div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default FirstLine;
