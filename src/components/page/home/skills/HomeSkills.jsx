/* eslint-disable react-hooks/exhaustive-deps */
import {BiToggleRight} from "react-icons/bi";
import {HiArrowSmRight} from "react-icons/hi";

import styles from "./HomeSkills.module.css";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {BsCheckLg} from "react-icons/bs";
import {HiMiniSquare3Stack3D} from "react-icons/hi2";

const HomeSkills = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.skills);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const benefits = text?.list;

  return (
    <section className={styles.home_skills}>
      <div className={styles.home_skills_header}>
        <h3>{text?.title}</h3>
        <a
          href="https://web.whatsapp.com/send/?phone=558892339729&text=Olá, vi seu portfólio e me interessei!&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.home_skills_header_link}
        >
          {text?.button}
          <HiArrowSmRight />
        </a>
      </div>
      <div className={styles.home_skills_list_container}>
        <div className={styles.home_skills_subtitle}>
          <HiMiniSquare3Stack3D />
          {text?.subtitle}
        </div>
        <ul className={styles.home_skills_list}>
          {/* bg circles */}
          <li className={styles.home_skills_list_bg}>
            <div
              className={`${styles.home_skills_list_bg_circle} ${styles.home_skills_list_bg_circle1}`}
            ></div>
            <div
              className={`${styles.home_skills_list_bg_circle} ${styles.home_skills_list_bg_circle2}`}
            ></div>
            <div
              className={`${styles.home_skills_list_bg_circle} ${styles.home_skills_list_bg_circle3}`}
            ></div>
          </li>

          {benefits?.map((item, i) => (
            <li key={i} className={styles.home_skills_item}>
              <div className={styles.home_skills_item_text}>
                <BsCheckLg />
                {item}
              </div>
              <div className={styles.home_skills_item_link_container}>
                <a
                  href="https://web.whatsapp.com/send/?phone=558892339729&text=Olá, vi seu portfólio e me interessei!&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.home_skills_item_link}
                >
                  <BiToggleRight />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HomeSkills;
