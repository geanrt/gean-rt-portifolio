/* eslint-disable react/prop-types */
import {HiArrowSmRight} from "react-icons/hi";
import CardBox from "../cardbox/CardBox";
import styles from "./ProductBanner.module.css";
import {BsCheckLg} from "react-icons/bs";
import {VscCircleFilled} from "react-icons/vsc";

const ProductBanner = ({
  carddesc,
  title,
  description,
  link,
  linktext,
  img,
  ifram,
  list,
  logo,
}) => {
  return (
    <div className={styles.home_product}>
      <CardBox
        ctStyle={styles.home_product_card_ct}
        bgStyle="bg_color"
        cardDesc={carddesc}
      >
        <div className={styles.home_product_content}>
          <div className={styles.home_product_header}>
            <div className={styles.home_product_border_radius}>
              <div className={styles.home_product_border_radius_0}></div>
              <div className={styles.home_product_border_radius_1}></div>
            </div>

            <div className={styles.home_product_text}>
              <div className={styles.home_product_text_header}>
                <h3>{title}</h3>
                <div className={styles.home_product_logo}>
                  <img src={logo} alt="home product logo" />
                </div>
              </div>
              <p>
                <VscCircleFilled />
                {description}
              </p>
            </div>
            <div className={styles.home_product_action}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.home_product_action__link}
              >
                {linktext}
                <HiArrowSmRight />
              </a>
            </div>
          </div>
          <div className={styles.home_product_info}>
            <div className={styles.home_product_info_media}>
              {img && (
                <div className={styles.home_product_info_media_image}>
                  <img src={img} alt="product" />
                </div>
              )}
              {ifram && (
                <div className={styles.home_product_info_media_iframe}>
                  {ifram}
                </div>
              )}
            </div>
            <ul className={styles.home_product_info_items}>
              {list?.map((item, i) => (
                <li key={i}>
                  <BsCheckLg />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBox>
    </div>
  );
};
export default ProductBanner;
