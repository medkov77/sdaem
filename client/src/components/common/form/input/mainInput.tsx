import * as React from "react";
import styles from "./mainInput.module.css";
interface Props {
  name: string;
  onInput: Function;
  defaultValue: string;
}
const MainInput = ({ name, onInput, defaultValue }: Props) => {
  const [value, setValue] = React.useState("");

  return (
    <div className={styles.row}>
      <input
        className={styles.main_input}
        name={name}
        value={value}
        placeholder={defaultValue}
        onChange={({ target }) => {
          setValue(target.value);
          onInput(value);
        }}
      />
      <button
        className={styles.btn}
        onClick={() => {
          onInput(value);
          setValue("");
        }}
      ></button>
    </div>
  );
};
export default MainInput;
