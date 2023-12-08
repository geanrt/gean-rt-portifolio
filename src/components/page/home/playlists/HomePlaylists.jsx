/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./HomePlaylists.module.css";

import imge1 from "../../../../assets/voepa-images/CARTEIRA-SEM-SEGREDO.webp";
import imge2 from "../../../../assets/voepa-images/CONHECE-DO-AS-CRIPTOMOEDAS.webp";
import imge3 from "../../../../assets/voepa-images/COS.webp";
import imge4 from "../../../../assets/voepa-images/CURSO-BITCOIN-DO-ZERO.webp";
import imge5 from "../../../../assets/voepa-images/EPACAST.webp";
import imge6 from "../../../../assets/voepa-images/VIDEOS-NOVOS.webp";
import SquareLink from "../../../common/squarelink/SquareLink";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomePlaylists = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.playlists);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const titles = text?.listtitles;

  const playLists = [
    {
      img: imge1,
      title: titles?.slice(0, 1),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGOcywLHKq-Nhe-Y-wbDhks8&si=itDPDYrX_Phwj4RI",
    },
    {
      img: imge2,
      title: titles?.slice(1, 2),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGN0cP4fj_n9AoLaVWe2aPG5&si=R6nRA_yTvu-vNLd3",
    },
    {
      img: imge3,
      title: titles?.slice(2, 3),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGP9-3j4Ju0hAX8DQjQ6EgPp&si=n9OvmI4z24uaJc08",
    },
    {
      img: imge4,
      title: titles?.slice(3, 4),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGNPsjepUqPh9C71-fYODxSk&si=ijykhxTEhmGnlzrB",
    },
    {
      img: imge5,
      title: titles?.slice(4, 5),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGO9rNoS_79sUtgBg31laS1I&si=u0TbDpwPOSEnZHcF",
    },
    {
      img: imge6,
      title: titles?.slice(5, 6),
      desc: "",
      link: "https://youtube.com/playlist?list=PLFk5MfETZAGOVhVXm9OSoAc-OdX8P_hkz&si=a6Krra83rp4GKki6",
    },
  ];
  return (
    <section className={styles.home_playlists}>
      <h3>{text?.title}</h3>
      <ul className={styles.home_playlists_list}>
        {playLists.map((item, i) => (
          <li key={i} className={styles.home_playlists_list_item}>
            <SquareLink img={item.img} title={item.title} link={item.link} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HomePlaylists;
