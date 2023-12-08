/* eslint-disable react-hooks/exhaustive-deps */
import "./About.css";
import Container from "./../../components/layout/container/Container";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useEffect} from "react";

const About = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.about);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  return (
    <div className="about_container">
      <div className="about">
        <Container>
          <h1>{text?.title}</h1>
          <p>{text?.paragraph}</p>
          {text?.paragraphs?.map((item, i) => (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
            </div>
          ))}
          <p>
            {text?.link?.text}
            <a
              href="https://www.youtube.com/@voepatube"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text?.link?.textlink}
            </a>
            .
          </p>
        </Container>
      </div>
    </div>
  );
};
export default About;
