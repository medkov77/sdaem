import * as React from "react";
import styles from "./select.module.css";
interface Props {
  defaultName: string;
  selectImage?: string;
  name: string;
  options: { name: string; value: string }[];
  onSelect: Function;
}
const Select = ({
  defaultName,
  name,
  options,
  onSelect,
  selectImage,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultName);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.full_select} ref={ref}>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        {selectImage && (
          <img src={selectImage} alt="selectImage" className={styles.image} />
        )}
        {value}
      </div>

      {isOpen && (
        <div className={styles.list}>
          {options.map((option) => (
            <li
              className={styles.opt}
              key={option.value}
              data-value={option.value}
              onClick={(e) => {
                setIsOpen(false);
                setValue(option.name);
                onSelect(name, option.value);
              }}
            >
              {option.name}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
