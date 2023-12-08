/* eslint-disable react/prop-types */
import styles from "./SquareLink.module.css";
import {FaExternalLinkAlt} from "react-icons/fa";

const SquareLink = ({img, title, link}) => {
  return (
    <div className={styles.square_link_container}>
      <div className={styles.square_link_bg}>
        <img src={img} alt="img bg" />
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={styles.square_link}>
            <div className={styles.square_link_header}>
              <div className={styles.square_link_icon}>
                <FaExternalLinkAlt />
              </div>
              <div className={styles.square_link_title}>
                {title}
                <span className={styles.ellipsis_text}>...</span>
              </div>
            </div>
            <div className={styles.square_link_image}>
              <img src={img} alt="img link" />
            </div>
          </div>
      </a>
    </div>
  );
};
export default SquareLink;
