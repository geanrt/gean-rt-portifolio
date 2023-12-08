/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ProductBanner from "../../../common/productbanner/ProductBanner";
import styles from "./HomeInstagram.module.css";
import {InstagramEmbed} from "react-social-media-embed";
import { useSelector } from 'react-redux';
import instaLogo from '../../../../assets/voepa-images/instagram-logo.webp'

const HomeInstagram = () => {

  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.instagram);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const productDetails = text?.list;

  return (
    <section className={styles.home_instagram}>
      <ProductBanner
        carddesc={text?.carddesc}
        title={text?.title}
        description={text?.description}
        link="https://www.instagram.com/voepatube/"
        linktext={text?.button}
        ifram={
          <InstagramEmbed
            url="https://www.instagram.com/p/CufqWEPxoXu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            width={"100%"}
          />
        }
        list={productDetails}
        logo={instaLogo}
      />
    </section>
  );
};
export default HomeInstagram;
