/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Missing.module.css";
import {useNavigate} from "react-router-dom";

import errorImg from "../../assets/images/404.webp";
import Container from "./../../components/layout/container/Container";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Missing = () => {
  const navigate = useNavigate();

  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.missing);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  return (
    <div className={styles.missing_container}>
      <Container>
        <div className={styles.missing}>
          <span>{text?.title}</span>
          <div className={styles.missing_svg_principal}>
            <img src={errorImg} alt="Error 404" />
          </div>

          <span>{text?.subtitle}</span>
          <div className={styles.missing_button}>
            <button onMouseUp={() => navigate("/")}>{text?.button}</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Missing;
