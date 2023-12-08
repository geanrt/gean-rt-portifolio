/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./HomeSponsorship.module.css";

import nuls from "../../../../assets/voepa-images/nuls.webp";
import costv from "../../../../assets/voepa-images/costv.webp";
import onekey from "../../../../assets/voepa-images/onekey.webp";

import VerticalLink from "../../../common/verticallink/VerticalLink";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomeSponsorship = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.sponsorship);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const textList = text?.list

  const sponsorshipList = [
    {
      img: nuls,
      title: "Nuls",
      description: textList?.nuls,
      link: "https://www.youtube.com/watch?v=ctBbD0UGASI&pp=ygUKdm9lcGEgbnVscw%3D%3D",
      csn: `${styles.home_sponsorship_item} ${styles.home_sponsorship_item_01}`,
    },
    {
      img: costv,
      title: "Cos Tv",
      description: textList?.costv,
      link: "https://www.youtube.com/watch?v=rsq0qASbJMY&pp=ygUMdm9lcGEgY29zIHR2",
      csn: `${styles.home_sponsorship_item} ${styles.home_sponsorship_item_02}`,
    },
    {
      img: onekey,
      title: "One Key",
      description: textList?.onekey,
      link: "https://www.youtube.com/watch?v=lYg1iH6xUJM&pp=ygUNdm9lcGEgb25lIGtleQ%3D%3D",
      csn: `${styles.home_sponsorship_item} ${styles.home_sponsorship_item_03}`,
    },
  ];
  return (
    <section className={styles.home_sponsorship}>
      <h3>{text?.title}</h3>
      <ul className={styles.home_sponsorship_list}>

        {/* bg circles */}
        <li className={styles.home_sponsorship_list_bg_circles}>
          <div
            className={`${styles.home_sponsorship_list_bg_circle} ${styles.home_sponsorship_list_bg_circle1}`}
          ></div>
          <div
            className={`${styles.home_sponsorship_list_bg_circle} ${styles.home_sponsorship_list_bg_circle2}`}
          ></div>
        </li>
        
        {sponsorshipList.map((item, i) => (
          <li key={i} className={item.csn}>
            <VerticalLink
              img={item.img}
              title={item.title}
              desc={item.description}
              titleLink={text?.button}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HomeSponsorship;
