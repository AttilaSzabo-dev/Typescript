import { useGearStore } from "../../store/useGearStore";
import c from "./GearPanel.module.css";

const GearPanel = () => {
  const { equipped } = useGearStore();

  const setHoveredGearId = useGearStore((state) => state.setHoveredGearId);
  const setInfoPanel = useGearStore((state) => state.setGearPanel);

  return (
    <div className={c.section}>
      <div className={c["body-image-wrapper"]}></div>
      <div className={`${c.image} ${c["corner_t_l"]}`}></div>
      <div className={`${c.image} ${c["corner_t_r"]}`}></div>
      <div className={`${c.image} ${c["corner_b_l"]}`}></div>
      <div className={`${c.image} ${c["corner_b_r"]}`}></div>
      <div
        className={`${c.gear} ${c["gear-helmet"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.helmet!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.helmet && (
          <img src={equipped.helmet.image} alt={equipped.helmet.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-armor"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.armor!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.armor && (
          <img src={equipped.armor.image} alt={equipped.armor.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-belt"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.belt!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.belt && (
          <img src={equipped.belt.image} alt={equipped.belt.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-pants"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.pants!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.pants && (
          <img src={equipped.pants.image} alt={equipped.pants.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-boots"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.boots!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.boots && (
          <img src={equipped.boots.image} alt={equipped.boots.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-hand-left"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.sword!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.sword && (
          <img src={equipped.sword.image} alt={equipped.sword.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-hand-right"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.shield!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.shield && (
          <img src={equipped.shield.image} alt={equipped.shield.id} />
        )}
      </div>
      <div
        className={`${c.gear} ${c["gear-glove"]}`}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredGearId(equipped.glove!.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        {equipped.glove && (
          <img src={equipped.glove.image} alt={equipped.glove.id} />
        )}
      </div>
    </div>
  );
};

export default GearPanel;
