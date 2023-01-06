import * as React from "react";
import styles from "./saidbar.module.css";
interface Props {
  title: string;
  sityes: {
    name: string;
    count: number;
  }[];
}
const Saidbar = ({ title, sityes }: Props) => {
  return (
    <div className={styles.saidbar}>
      <div className={styles.title}>{title}</div>
      {sityes.map((sity) => (
        <div className={styles.row} key={`${sity.name}saidbar`}>
          <div className={styles.sity}>{sity.name}</div>
          <div className={styles.count}>{sity.count}</div>
        </div>
      ))}
    </div>
  );
};
export default Saidbar;
