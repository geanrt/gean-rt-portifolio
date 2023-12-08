/* eslint-disable react/prop-types */
import s from "./CardBox.module.css";
import {RiLoopRightLine} from "react-icons/ri";

const CardBox = ({children, cardDesc, ctStyle, bgStyle}) => {
  return (
    <div className={`${s.card} ${ctStyle ? ctStyle : "rt"} ${s[bgStyle]}`}>
      {cardDesc && (
        <div className={s.card_description}>
          <RiLoopRightLine />
          {cardDesc}
        </div>
      )}

      {children}
    </div>
  );
};
export default CardBox;
