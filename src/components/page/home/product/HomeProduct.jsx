/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./HomeProduct.module.css";

import course from "../../../../assets/voepa-images/course.webp";
import {HiArrowSmRight} from "react-icons/hi";
import {BsCheckLg} from "react-icons/bs";
import CardBox from "../../../common/cardbox/CardBox";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomeProduct = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.product);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const productDetails = text?.list;

  return (
    <section className={styles.home_product}>
      <CardBox
        ctStyle={styles.home_product_card_ct}
        bgStyle="bg_color"
        cardDesc={text?.carddesc}
      >
        <div className={styles.home_product_content}>
          <div className={styles.home_product_header}>
            <div className={styles.home_product_text}>
              <h3>{text?.title}</h3>
              <p>{text?.description}</p>
            </div>
            <div className={styles.home_product_action}>
              <a
                href="https://www.cursodebitcoin.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.home_product_action__link}
              >
                {text?.button}
                <HiArrowSmRight />
              </a>
            </div>
          </div>
          <div className={styles.home_product_info}>
            <img
              src={course}
              alt="product"
              className={styles.home_product_image}
            />
            <ul className={styles.home_product_info_items}>
              {productDetails?.map((item, i) => (
                <li key={i}>
                  <BsCheckLg />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBox>
    </section>
  );
};
export default HomeProduct;
