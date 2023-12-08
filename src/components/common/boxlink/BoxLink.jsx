/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./BoxLink.module.css";

import {CgArrowTopRight} from "react-icons/cg";
import CardBox from "../cardbox/CardBox";
import {useEffect, useRef, useState} from "react";

function BoxLink({ link, customClassIcon, icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  const [titleEllipsis, setTitleEllipsis] = useState(false);
  const [descEllipsis, setDescEllipsis] = useState(false);

  const titleRef = useRef();
  const descRef = useRef();

  const checkHeight = (element) => {
    if (element) {
      return element.getBoundingClientRect().height > 20;
    }
    return false;
  };

  const updateEllipsis = () => {
    const titleElem = titleRef.current;
    const descElem = descRef.current;

    setTitleEllipsis(checkHeight(titleElem));
    setDescEllipsis(checkHeight(descElem));
  };

  useEffect(() => {
    const resizeHandler = () => {
      updateEllipsis();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    updateEllipsis();
  }, [titleRef.current, descRef.current]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.box_link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setHovered(true)}
      onMouseUp={() => setHovered(false)}
    >
      <CardBox
        ctStyle={styles.box_link_card_ct}
        bgStyle={hovered ? 'bg_color' : 'rt'}
      >
        <div className={styles.box_link_card}>
          <div className={`${styles.box_link_card_icon} ${customClassIcon}`}>
            {icon}
          </div>
          <div className={styles.box_link_card_text}>
            <div className={styles.box_link_card_text_title_container}>
              <div
                className={`${styles.box_link_card_text_title} ${
                  titleEllipsis ? styles.titleEllipsis : 'rt'
                }`}
                ref={titleRef}
              >
                {title}
                {titleEllipsis && <span className={styles.ellipsis_title}>...</span>}
                <CgArrowTopRight />
              </div>
            </div>
            <div className={styles.box_link_card_text_desc_container}>
              <div
                className={`${styles.box_link_card_text_desc} ${
                  descEllipsis ? styles.descEllipsis : 'rt'
                }`}
                ref={descRef}
              >
                {desc}
                {descEllipsis && <span className={styles.ellipsis_text}>...</span>}
              </div>
            </div>
          </div>
        </div>
      </CardBox>
    </a>
  );
}

export default BoxLink;
