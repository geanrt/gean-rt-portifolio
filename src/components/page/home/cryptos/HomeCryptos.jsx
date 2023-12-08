/* eslint-disable react-hooks/exhaustive-deps */
import {FaYoutube} from "react-icons/fa";
import styles from "./HomeCryptos.module.css";
import bitcoin from "../../../../assets/voepa-images/bitcoin.webp";
// import eth from "../../../../assets/voepa-images/eth.webp";
// import bnb from "../../../../assets/voepa-images/bnb.webp";
import Crypto from "../../../common/crypto/Crypto";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomeCryptos = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.cryptos);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  // configurar conforme os dados no json
  const btc = text?.bitcoin;
  const btcLinks = [
    {
      link: "https://www.youtube.com/watch?v=Gt0VM19qy6o",
      icon: <FaYoutube />,
      customClassIcon: "crypto_actions_link_icon_yt",
      title: btc?.links[0]?.title,
      desc: btc?.links[0]?.description,
    },
    {
      link: "https://www.youtube.com/watch?v=7hysnh3lNBA&pp=ygUbdm9lcGEgYml0Y29pbiBzb2JyZSBiaXRjb2lu",
      icon: <FaYoutube />,
      customClassIcon: "crypto_actions_link_icon_yt",
      title: btc?.links[1]?.title,
      desc: btc?.links[1]?.description,
    },
    {
      link: "https://www.youtube.com/watch?v=_Xiiu9LT2fo&pp=ygUbdm9lcGEgYml0Y29pbiBzb2JyZSBiaXRjb2lu",
      icon: <FaYoutube />,
      customClassIcon: "crypto_actions_link_icon_yt",
      title: btc?.links[2]?.title,
      desc: btc?.links[2]?.description,
    },
  ];

  return (
    <section className={styles.home_cryptos}>
      <h3>{text?.title}</h3>
      <ul className={styles.home_cryptos_list}>
        <li>
          <Crypto
            chartType="BITSTAMP"
            chartCode="BTCUSD|60M"
            icon={bitcoin}
            title={btc?.title}
            desc={btc?.description}
            linksTitle={btc?.linksTitle}
            threeLinks={btcLinks}
          />
        </li>
        {/* <li className={styles.home_cryptos_gap}></li> */}

        {/* <li>
          <Crypto
            chartType="BITSTAMP"
            chartCode="ETHUSD|60M"
            icon={eth}
            title="Ethereum"
            desc="Conhecendo a Ethereum"
            threeLinks={[
              {
                link: "https://www.youtube.com/shorts/ySEwnnPojic",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "O que é a Ethereum?",
                desc: "youtube",
              },
              {
                link: "https://www.youtube.com/watch?v=SPvjjx9lj60",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "Mais",
                desc: "youtube",
              },
              {
                link: "https://www.youtube.com/watch?v=53YJ6B1B-0k",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "Outros",
                desc: "youtube",
              },
            ]}
          />
        </li> */}
        {/* <li className={styles.home_cryptos_gap}></li> */}

        {/* <li>
          <Crypto
            chartType="BINANCE"
            chartCode="BNBBUSD|60M"
            icon={bnb}
            title="Binance Coin"
            desc="Conhecendo a BNB"
            threeLinks={[
              {
                link: "https://www.youtube.com/watch?v=LIEIi66XYPw&pp=ygUfdm9lcGEgYml0Y29pbiBvIHF1ZSBlc29lcmFyIGJuYg%3D%3D",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "O que é a BNB?",
                desc: "youtube",
              },
              {
                link: "https://www.youtube.com/watch?v=8wV_RZQYERI",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "Mais",
                desc: "youtube",
              },
              {
                link: "https://www.youtube.com/shorts/CV5d1Ajdpgk",
                icon: <FaYoutube />,
                customClassIcon: "crypto_actions_link_icon_yt",
                title: "Outros",
                desc: "youtube",
              },
            ]}
          />
        </li> */}
      </ul>
    </section>
  );
};
export default HomeCryptos;
