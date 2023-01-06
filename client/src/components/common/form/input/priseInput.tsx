import * as React from "react";
import styles from "../../tabs/tabs.module.css";
interface Props {
  name: string;
  onInput: Function;
  defaultValue: string;
}
const PriceInput = ({ name, onInput, defaultValue }: Props) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <input
      className={styles.price}
      name={name}
      value={value}
      placeholder={defaultValue}
      onChange={({ target }) => {
        setValue((prev) => (prev = target.value));
        onInput(name, target.value);
      }}
    />
  );
};
export default PriceInput;
