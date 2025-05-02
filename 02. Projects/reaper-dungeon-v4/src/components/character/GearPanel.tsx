import { gearImages } from "../../store/gearImagesStore";
import c from "./GearPanel.module.css";

const GearPanel = () => {
  return (
    <div className={c.section}>
      <div className={c["body-image-wrapper"]}></div>
      <div className={`${c.image} ${c["corner_t_l"]}`}></div>
      <div className={`${c.image} ${c["corner_t_r"]}`}></div>
      <div className={`${c.image} ${c["corner_b_l"]}`}></div>
      <div className={`${c.image} ${c["corner_b_r"]}`}></div>
      <div className={`${c.gear} ${c["gear-head"]}`}>
        <img src={gearImages.head[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-body"]}`}>
        <img src={gearImages.body[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-belt"]}`}>
        <img src={gearImages.belt[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-leg"]}`}>
        <img src={gearImages.leg[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-feet"]}`}>
        <img src={gearImages.feet[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-hand-left"]}`}>
        <img src={gearImages.sword[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-hand-right"]}`}>
        <img src={gearImages.shield[0].image} alt="" />
      </div>
      <div className={`${c.gear} ${c["gear-hand"]}`}>
        <img src={gearImages.hand[0].image} alt="" />
      </div>
    </div>
  );
};

export default GearPanel;
