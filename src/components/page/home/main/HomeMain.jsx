/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./HomeMain.module.css";
import geanrt from "../../../../assets/images/geanrt-profile.webp";
import {FaBolt} from "react-icons/fa";
import CardBox from "../../../common/cardbox/CardBox";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const HomeMain = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.main);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const [card, setCard] = useState("bg_bubbles");

  useEffect(() => {
    const screenWidth = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        setCard("bg_clear");
      } else {
        setCard("bg_bubbles");
      }
    };

    screenWidth();

    window.addEventListener("resize", screenWidth);

    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, []);
 

  return (
    <section className={styles.home_main} id="home_aprensatation">
      <h2 className={styles.home_main_title}>
        {text?.title}
        {/* <ul className={styles.title_links}>
          <li>
            <a href="#"></a>
          </li>
        </ul> */}
      </h2>
      <CardBox
        ctStyle={card === "bg_bubbles" ? styles.home_main_card_ct : ""}
        bgStyle={card}
        cardDesc={text?.carddesc}
      >
        <div className={styles.home_main_card}>
          <div className={styles.home_main_card_img}>
            <div className={styles.home_main_card_profile}>
              <img src={geanrt} alt="main profile" />
            </div>
            <FaBolt />
          </div>
          <div className={styles.home_main_card_text}>
            <h3 className={styles.home_main_card_text_name}>{text?.name}</h3>
            <span className={styles.home_main_card_text_job}>{text?.job}</span>
            <p className={styles.home_main_card_text_bio}>
              {text?.description}
            </p>
          </div>
        </div>
      </CardBox>
    </section>
  );
};
export default HomeMain;
