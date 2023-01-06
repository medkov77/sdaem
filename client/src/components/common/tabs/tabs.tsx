import * as React from "react";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import styles from "./tabs.module.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <div className={styles.tabs}>
      <ul className={styles.row}>
        <li
          className={`${styles.tab} ${activeTab === "tab1" && styles.active}`}
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          Квартиры на сутки
        </li>
        <li
          className={`${styles.tab} ${activeTab === "tab2" && styles.active}`}
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          Коттеджи и усадьбы
        </li>
        <li
          className={`${styles.tab} ${activeTab === "tab3" && styles.active}`}
          onClick={() => {
            setActiveTab("tab3");
          }}
        >
          Бани и сауны
        </li>
        <li
          className={`${styles.tab} ${activeTab === "tab4" && styles.active}`}
          onClick={() => {
            setActiveTab("tab4");
          }}
        >
          Авто напрокат
        </li>
      </ul>
      {activeTab === "tab1" && <Tab1 />}
      {activeTab === "tab2" && <Tab2 />}
      {activeTab === "tab3" && <Tab3 />}
      {activeTab === "tab4" && <Tab4 />}
    </div>
  );
};
export default Tabs;
