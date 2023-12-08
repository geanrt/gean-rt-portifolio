/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./Crypto.module.css";
import {useEffect, useRef} from "react";
import BoxLink from "../boxlink/BoxLink";

const Crypto = ({
  chartType,
  chartCode,
  icon,
  title,
  desc,
  linksTitle,
  threeLinks,
}) => {
  // chartCode ex:
  // BTCUSD|60M

  // chartType ex:
  // BITSTAMP, BINANCE

  const container = useRef();

  useEffect(() => {
    const tv = document.querySelector(`#tradingview_${chartCode.slice(0, 6)}`);
    if (!tv) {
      const script = document.createElement("script");
      script.id = `tradingview_${chartCode.slice(0, 6)}`;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "${chartType}:${chartCode}"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "br",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.crypto_container}>
      <div className={styles.crypto}>
        <div className={styles.crypto_chart_container}>
          <div ref={container} className={styles.crypto_chart} />
        </div>
        <div className={styles.crypto_info_container}>
          <div className={styles.crypto_info}>
            <div className={styles.crypto_info_image}>
              <img src={icon} alt="icon crypto" />
            </div>
            <div className={styles.crypto_info_desc}>
              <span className={styles.crypto_info_desc_title}>{title}</span>
              <p className={styles.crypto_info_desc_text}>{desc}</p>
            </div>
          </div>
          <div className={styles.crypto_actions}>
            <span className={styles.crypto_actions_title}>{linksTitle}</span>
            <ul className={styles.crypto_actions_links}>
              {threeLinks?.map((item, i) => (
                <li className={styles[`crypto_actions_link_${i}`]} key={i}>
                  <BoxLink
                    link={item.link}
                    icon={item.icon}
                    customClassIcon={styles[item.customClassIcon]}
                    title={item.title}
                    desc={item.desc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crypto;
