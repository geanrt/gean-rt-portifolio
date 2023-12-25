/* eslint-disable react-hooks/exhaustive-deps */
import ProductBanner from "../../../common/productbanner/ProductBanner";
import smartphoneDesigner from "../../../../assets/images/smartphone-designer.webp";
import logo from "../../../../assets/images/logo.webp";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import styles from "./HomeDesigner.module.css";

const HomeDesigner = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.designer);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const listDetails = text?.list;

  return (
    <section className={styles.home_designer}>
      <h2 className={styles.home_designer_title}>{text?.sectionTitle}</h2>
      <ProductBanner
        carddesc={text?.carddesc}
        title={text?.title}
        description={text?.description}
        link="https://web.whatsapp.com/send/?phone=558892339729&text=Olá, vi seu portfólio e me interessei!&type=phone_number&app_absent=0"
        linktext={text?.button}
        img={smartphoneDesigner}
        list={listDetails}
        logo={logo}
      />
    </section>
  );
};
export default HomeDesigner;
