/* eslint-disable react-hooks/exhaustive-deps */
import {HiSquare2Stack} from "react-icons/hi2";
import CardBox from "../../../common/cardbox/CardBox";
import {CgArrowTopRight} from "react-icons/cg";
import styles from "./HomeNfts.module.css";

import nft1 from "./../../../../assets/voepa-images/nft1.webp";
import nft2 from "./../../../../assets/voepa-images/nft2.webp";
import nft3 from "./../../../../assets/voepa-images/nft3.webp";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomeNfts = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.nfts);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  const benefitsList = text?.list;

  return (
    // <section className={styles.home_nfts_container}>
    //   {/* <CardBox bgStyle={styles.home_nfts_card}> */}
    //   <CardBox bgStyle='bg_cotton'>
    //     <div className={styles.home_nfts}>
    //       <div className={styles.home_nfts_content}>
    //         <div className={styles.home_nfts_image}>
    //           <img src={nfts} alt="nft image" />
    //         </div>
    //         <div className={styles.home_nfts_text_and_action}>
    //           <h3 className={styles.home_nfts_text_and_action_title}>
    //             {text?.title}
    //           </h3>
    //           <p className={styles.home_nfts_text_and_action_desc}>
    //           {text?.description}
    //           </p>
    //           <ul className={styles.home_nfts_text_and_action_list}>
    //             {benefitsList?.map((item, i) => (
    //               <li key={i} className={styles.home_nfts_text_and_action_list_item}>
    //                 <BsFillCircleFill />
    //                 {item}
    //               </li>
    //             ))}
    //           </ul>
    //           <a
    //             href="https://opensea.io/collection/epatube"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={styles.home_nfts_link}
    //           >
    //             {text?.button}
    //             <CgArrowTopRight />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </CardBox>
    // </section>
    <section className={styles.home_nfts}>
      <div className={styles.home_nfts_header}>
        <h3 className={styles.home_nfts_header_title}>{text?.title}</h3>
        <p className={styles.home_nfts_header_desc}>{text?.description}</p>
      </div>

      <div className={styles.home_nfts_list_container}>
        <CardBox bgStyle="bg_bubbles" cardDesc={text?.carddesc}>
          <ul className={styles.home_nfts_list}>
            {benefitsList?.map((item, i) => (
              <li key={i} className={styles.home_nfts_list_item}>
                <HiSquare2Stack />
                {item}
              </li>
            ))}
          </ul>
        </CardBox>
      </div>

      <div className={styles.home_nfts_actions}>
        <div className={styles.home_nfts_actions_images}>
          <div className={styles.home_nfts_actions_image}>
            <img src={nft1} alt="nft image" />
          </div>
          <div className={styles.home_nfts_actions_image}>
            <img src={nft2} alt="nft image" />
          </div>
          <div className={styles.home_nfts_actions_image}>
            <img src={nft3} alt="nft image" />
          </div>
        </div>
        <a
          href="https://opensea.io/collection/epatube"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.home_nfts_actions_link}
        >
          {text?.button}
          <CgArrowTopRight />
        </a>
      </div>

      <div className={styles.home_nfts_bg_circles}>
        <div
          className={`${styles.home_nfts_bg_circle} ${styles.home_nfts_bg_circle1}`}
        ></div>
        <div
          className={`${styles.home_nfts_bg_circle} ${styles.home_nfts_bg_circle2}`}
        ></div>
        
      </div>
    </section>
  );
};
export default HomeNfts;
