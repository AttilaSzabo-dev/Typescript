import { useCharacterStore } from "../../store/useGearStore";
import c from "./GearPanel.module.css";

const GearPanel = () => {
  const { equipped } = useCharacterStore();

  return (
    <div className={c.section}>
      <div className={c["body-image-wrapper"]}></div>
      <div className={`${c.image} ${c["corner_t_l"]}`}></div>
      <div className={`${c.image} ${c["corner_t_r"]}`}></div>
      <div className={`${c.image} ${c["corner_b_l"]}`}></div>
      <div className={`${c.image} ${c["corner_b_r"]}`}></div>
      <div className={`${c.gear} ${c["gear-helmet"]}`}>
        {equipped.helmet && (
          <img src={equipped.helmet.image} alt={equipped.helmet.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-armor"]}`}>
        {equipped.armor && (
          <img src={equipped.armor.image} alt={equipped.armor.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-belt"]}`}>
        {equipped.belt && (
          <img src={equipped.belt.image} alt={equipped.belt.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-pants"]}`}>
        {equipped.pants && (
          <img src={equipped.pants.image} alt={equipped.pants.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-boots"]}`}>
        {equipped.boots && (
          <img src={equipped.boots.image} alt={equipped.boots.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-hand-left"]}`}>
        {equipped.sword && (
          <img src={equipped.sword.image} alt={equipped.sword.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-hand-right"]}`}>
        {equipped.shield && (
          <img src={equipped.shield.image} alt={equipped.shield.id} />
        )}
      </div>
      <div className={`${c.gear} ${c["gear-glove"]}`}>
        {equipped.glove && (
          <img src={equipped.glove.image} alt={equipped.glove.id} />
        )}
      </div>
    </div>
  );
};

export default GearPanel;
