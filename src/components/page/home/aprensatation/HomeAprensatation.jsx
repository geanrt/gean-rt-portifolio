/* eslint-disable react-hooks/exhaustive-deps */
import {BsInstagram} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiArrowSmRight} from "react-icons/hi";
import smart from "../../../../assets/images/smartphone.webp";
import rot from "../../../../assets/images/rotate-circle.webp";

import styles from "./HomeAprensatation.module.css";
import IconLink from "../../../common/iconlink/IconLink";

import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const HomeAprensatation = () => {
  const socialLinks = [
    {
      link: "https://github.com/geanrt",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/gean-rt-b86b4525b/",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/wn_dynamics/",
      icon: <BsInstagram />,
    },
  ];

  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.aprensatation);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  return (
    <section className={styles.home_aprensatation}>
      <div className={styles.home_aprensatation_text}>
        <h1 className={styles.home_aprensatation_text_title}>
          <span>{text?.title?.slice(0, 1)}</span>
          <span>{text?.title?.slice(1, 2)}</span>
          <span>{text?.title?.slice(2, 3)}</span>
          <span className={styles.home_aprensatation_text_title_emphasis}>
            {text?.title?.slice(3, 4)}
          </span>
        </h1>
        <p>{text?.description}</p>
        <a
          href="https://github.com/geanrt"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.home_aprensatation_text__link}
        >
          {text?.button}
          <HiArrowSmRight />
        </a>
        <ul className={styles.home_aprensatation_text_actions}>
          {socialLinks.map((item, i) => (
            <li key={i}>
              <IconLink link={item.link} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.home_aprensatation_img}>
        <img
          src={smart}
          alt="smartphone"
          className={styles.home_aprensatation_img__smart}
        />
        <img
          src={rot}
          alt="rotate logo"
          className={styles.home_aprensatation_img__rot}
        />
      </div>
    </section>
  );
};
export default HomeAprensatation;
