/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import styles from "./HomeFinal.module.css";
import CardBox from "./../../../common/cardbox/CardBox";

const HomeFinal = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.finals);

  const [text, setText] = useState([]);

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  return (
    <section className={styles.home_about}>
      <ul className={styles.home_about_list}>
        {/* bg circles */}
        <li className={styles.home_about_list_bg}>
          <div
            className={`${styles.home_about_list_bg_circle} ${styles.home_about_list_bg_circle1}`}
          ></div>
          <div
            className={`${styles.home_about_list_bg_circle} ${styles.home_about_list_bg_circle2}`}
          ></div>
          <div
            className={`${styles.home_about_list_bg_circle} ${styles.home_about_list_bg_circle3}`}
          ></div>
        </li>

        {text?.map((item, i) => (
          <li
            key={i}
            className={`${styles.home_about_list_item} ${
              styles["home_about_list_item_" + i]
            }`}
          >
            <CardBox bgStyle='bg_bubbles_orange'>
              <div className={styles.home_about_list_item_content}>
                <h4 className={styles.home_about_list_item_title}>
                  {item?.title}
                </h4>
                <p className={styles.home_about_list_item_desc}>
                  {item?.parag}
                </p>
              </div>
            </CardBox>
          </li>
        ))}
      </ul>
      <div className={styles.home_about_gradient}>
      </div>
    </section>
  );
};
export default HomeFinal;
