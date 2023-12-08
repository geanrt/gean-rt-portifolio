/* eslint-disable react/prop-types */
import styles from "./IconLink.module.css";

const IconLink = ({link, icon}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon_link}
    >
      {icon}
    </a>
  );
};
export default IconLink;
