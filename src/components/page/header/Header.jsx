/* eslint-disable react-hooks/exhaustive-deps */
import "./Header.css";
import logo from "../../../assets/images/logo.webp";
import brasilFlag from "../../../assets/br.webp";
import euaFlag from "../../../assets/eua.webp";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {FiChevronDown, FiGrid} from "react-icons/fi";
import {BiSolidGridAlt} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {updateLang} from "../../../slices/langSlice";
import CustomSelect from "../../common/customselect/CustomSelect";

const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.header);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const handleLang = (value) => {
    dispatch(updateLang(value));
    localStorage.setItem("lang", value);
  };

  const hlogo = [logo, "Gean Rt"];
  const hnlinks = [
    {path: "https://github.com/geanrt", text: text?.projects},
    {path: "#home_aprensatation", text: text?.about},
    {
      path: "https://web.whatsapp.com/send/?phone=558892339729&text=Olá, vi seu portfólio e me interessei!&type=phone_number&app_absent=0",
      text: text?.contact,
    },
  ];
  useEffect(() => {
    const headerBg = document.querySelector(".header");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!headerBg?.classList.contains("bg_blur")) {
          headerBg?.classList.add("bg_blur");
        }
      } else if (headerBg?.classList.contains("bg_blur")) {
        headerBg?.classList.remove("bg_blur");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [navClass, setNavClass] = useState(false);
  const handleNav = () => {
    setNavClass((prev) => !prev);
  };

  const location = useLocation();
  useEffect(() => {
    if (navClass) {
      setNavClass(false);
    }
  }, [location]);

  const options = {
    br: {
      title: "Brasil",
      img: brasilFlag,
      value: "br",
    },
    en: {
      title: "English",
      img: euaFlag,
      value: "en",
    },
  };

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/" className="header_logo_link">
          <div className="header_logo_image">
            <img src={hlogo[0]} alt="brand logo" />
          </div>
          <span className="header_logo_name">{hlogo[1]}</span>
        </Link>
      </div>
      <div className="header_nav">
        <nav
          className={`header_nav_links ${
            navClass ? "header_nav_links_display" : ""
          }`}
        >
          <ul className="header_nav_links_list">
            {hnlinks.map((item, i) => (
              <li key={i}>
                {item.path.includes("https") ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header_nav_link"
                  >
                    {item.text}
                    <FiChevronDown />
                  </a>
                ) : item.path.includes("#") ? (
                  <a href={item.path} className="header_nav_link">
                    {item.text}
                    <FiChevronDown />
                  </a>
                ) : (
                  <Link to={item.path} className="header_nav_link">
                    {item.text}
                    <FiChevronDown />
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="header_nav_lang">
            <CustomSelect
              options={options}
              selected={lang}
              action={handleLang}
            />
          </div>
        </nav>
      </div>
      <div className="side_nav_button" onClick={() => handleNav()}>
        {navClass ? <BiSolidGridAlt /> : <FiGrid />}
      </div>
    </div>
  );
};
export default Header;
