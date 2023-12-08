/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from "react";
import styles from "./CustomSelect.module.css";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const CustomSelect = ({options, selected, action}) => {
  // options structure
  // {
  //   br: {
  //     title: 'Brasil',
  //     img: brasilFlag,
  //     value: 'br',
  //   },
  //   en: {
  //     title: 'English',
  //     img: euaFlag,
  //     value: 'en',
  //   }
  // }

  const [display, setDisplay] = useState(false);

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setDisplay(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);

  const handleClick = () => {
    setDisplay((prev) => !prev)
  }

  const handleSlct = (key) => {
    action(key)
    setDisplay(false)
  }

  return (
    <div className={styles.custom_select} ref={divRef}>
      <div className={styles.custom_select_selected}>
        <button
          onMouseUp={() => handleClick()}
          className={styles.custom_select_button}
        >
          {options[selected].img && (
            <div className={styles.custom_select_image}>
              <img src={options[selected].img} alt="selected img" />
            </div>
          )}
          {display ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      <ul
        className={`${styles.custom_select_options} ${
          display ? styles.custom_select_options_display : "rt"
        }`}
      >
        {Object.keys(options).map((key) => (
          <li
            key={options[key].value}
            className={`${styles.custom_select_option} ${
              options[key].value === selected
                ? styles.custom_select_option_selected
                : styles.custom_select_option_inselected
            }`}
          >
            <button
              className={styles.custom_select_option_button}
              onMouseUp={() => handleSlct(options[key].value)}
              disabled={options[key].value === selected}
            >
              {options[key].img && (
                <div className={styles.custom_select_image}>
                  <img src={options[key].img} alt="options img" />
                </div>
              )}
              {options[key].title && <span>{options[key].title}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomSelect;
