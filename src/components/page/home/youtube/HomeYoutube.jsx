/* eslint-disable react-hooks/exhaustive-deps */
import ProductBanner from "../../../common/productbanner/ProductBanner";
import styles from "./HomeYoutube.module.css";
import image from "../../../../assets/voepa-images/smartphone-frontal.webp";
import ytLogo from '../../../../assets/voepa-images/youtube-logo.webp'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const HomeYoutube = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.youtube);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const productDetails = text?.list;

  return (
    <section className={styles.home_youtube}>
      <ProductBanner
        carddesc={text?.carddesc}
        title={text?.title}
        description={text?.description}
        link="https://www.youtube.com/@voepatube"
        linktext={text?.button}
        img={image}
        list={productDetails}
        logo={ytLogo}
      />
    </section>
  );
};
export default HomeYoutube;
