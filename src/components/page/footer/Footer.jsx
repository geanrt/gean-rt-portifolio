/* eslint-disable react-hooks/exhaustive-deps */
import "./Footer.css";
import Container from "../../layout/container/Container";
import logo from "../../../assets/images/logo.webp";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CgArrowTopRight} from "react-icons/cg";
import {BsInstagram, BsTelegram, BsTwitter, BsYoutube} from "react-icons/bs";
import {BiRightArrow} from "react-icons/bi";

const Footer = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.footer);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const contact = text?.contact;
  // const company = text?.company;
  const brand = text?.brand;
  // const others = text?.others;
  const follow = text?.follow;

  const iLink = [
    logo,
    {
      title: contact?.title,
      path: "https://web.whatsapp.com/send/?phone=558892339729&text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20me%20interessei!&type=phone_number&app_absent=0",
      name: contact?.button,
    },
  ];
  const footerMore = [
    "Gean Rt",
    [
      {
        title: brand?.title,
        links: [{name: brand?.about, path: "#home_aprensatation"}],
      },
      {
        title: follow?.title,
        links: [
          {
            name: "instagram",
            path: "https://www.instagram.com/wn_dynamics/",
            icon: <BsInstagram />,
          },
        ],
      },
    ],
  ];

  return (
    <div className="footer_container">
      <Container>
        <div className="footer">
          <div className="footer_links_container">
            <div className="footer_important_link">
              <img src={iLink[0]} alt="brand logo" />
              <div className="footer_important_msg">
                <span>{iLink[1].title}</span>
                <a
                  href={iLink[1].path}
                  target="_blank"
                  rel="noopener  noreferrer"
                  className="footer_link"
                >
                  {iLink[1].name}
                  <CgArrowTopRight />
                </a>
              </div>
            </div>
            <span className="footer_title">{footerMore[0]}</span>
            <div className="footer_links_box">
              {footerMore[1].map((item, it) => (
                <div className="footer_links" key={it}>
                  <span className="footer_links_title">
                    {item?.title?.toUpperCase()}
                  </span>
                  <ul className="footer_links_list">
                    {item?.links.map((link, il) => (
                      <li key={il} className="footer_links_list_item">
                        {link.icon}
                        {link.path.includes("https") ? (
                          <a
                            className="footer_link"
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link?.name}
                          </a>
                        ) : link.path.includes("#") ? (
                          <a href={link.path} className="footer_link">
                            {link?.name}
                          </a>
                        ) : (
                          <Link to={link.path} className="footer_link">
                            {link?.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
