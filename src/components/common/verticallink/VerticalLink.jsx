/* eslint-disable react/prop-types */
import CardBox from "../cardbox/CardBox";
import styles from "./VerticalLink.module.css";
import {CgArrowTopRight} from "react-icons/cg";

const VerticalLink = ({img, title, desc, titleLink, link}) => {
  return (
    <>
      <CardBox bgStyle="bg_black_glass">
        <div className={styles.vertical_link_contain}>
          <div className={styles.vertical_link_header}>
            <div className={styles.vertical_link_logo}>
              <img src={img} alt={title} className={styles.vertical_link_img} />
            </div>
            <div className={styles.vertical_link_text}>
              <span className={styles.vertical_link_name}>{title}</span>
              <div className={styles.vertical_link_desc}>{desc}</div>
            </div>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vertical_link_link}
          >
            {titleLink}
            <CgArrowTopRight />
          </a>
        </div>
      </CardBox>
    </>
  );
};
export default VerticalLink;
