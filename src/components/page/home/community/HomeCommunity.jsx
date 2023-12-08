/* eslint-disable react-hooks/exhaustive-deps */
import {PiInstagramLogoFill} from "react-icons/pi";

import styles from "./HomeCommunity.module.css";
import BoxLink from "../../../common/boxlink/BoxLink";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeCommunity = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.community);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  // configurar conforme os dados no json
  const lnk = text?.links?.linkedin;
  const git = text?.links?.github;
  const nst = text?.links?.instagram;

  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/gean-rt-b86b4525b/",
      cci: styles.home_community_card_linkedin,
      icon: <FaLinkedin />,
      title: lnk?.title,
      desc: lnk?.description,
    },
    {
      link: "https://github.com/geanrt",
      cci: styles.home_community_card_github,
      icon: <FaGithub />,
      title: git?.title,
      desc: git?.description,
    },
    {
      link: "https://www.instagram.com/wn_dynamics/",
      cci: styles.home_community_card_instagram,
      icon: <PiInstagramLogoFill />,
      title: nst?.title,
      desc: nst?.description,
    },
  ];

  return (
    <section className={styles.home_community}>
      <div className={styles.home_community_text}>
        <h3>{text?.title}</h3>
        <p>{text?.description}</p>
      </div>
      <ul className={styles.home_community_links}>
        {/* bg circles */}
        <li className={styles.home_community_bg}>
          <div
            className={`${styles.home_community_bg_circle} ${styles.home_community_bg_circle1}`}
          ></div>
          <div
            className={`${styles.home_community_bg_circle} ${styles.home_community_bg_circle2}`}
          ></div>
        </li>
        
        {socialLinks.map((item, i) => (
          <li
            key={i}
            className={`${styles.home_community_link} ${
              styles[`home_community_link_${i}`]
            }`}
          >
            <BoxLink
              link={item.link}
              customClassIcon={item.cci}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HomeCommunity;
