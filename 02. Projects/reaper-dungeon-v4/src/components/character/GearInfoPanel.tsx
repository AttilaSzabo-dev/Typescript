import { useEffect, useState } from "react";
import { useGearStore } from "../../store/useGearStore";
import { Gear } from "../../interfaces/gears/Gears";
import c from "./GearInfoPanel.module.css";

interface GearInfoPanelProps {
  hoveredGear: Gear;
}

const GearInfoPanel = (props: GearInfoPanelProps) => {
  const { hoveredGear } = props;
  const { gearInfoPanel } = useGearStore();
  const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(gearInfoPanel);

  useEffect(() => {
    if (gearInfoPanel) {
      setIsInfoPanelVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsInfoPanelVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gearInfoPanel]);

  return (
    <div
      className={`${c["gear-info-panel"]} ${
        isInfoPanelVisible ? c["open"] : ""
      }`}
    >
      <div className={`${c.image} ${c["corner_t_l"]}`}></div>
      <div className={`${c.image} ${c["corner_t_r"]}`}></div>
      <div className={`${c.image} ${c["corner_b_l"]}`}></div>
      <div className={`${c.image} ${c["corner_b_r"]}`}></div>
      <div className={c["top"]}>
        <img src={hoveredGear.image} alt={hoveredGear.id} />
        <span>{hoveredGear.name}</span>
      </div>
      {/* <div className={c["bottom"]}>
        <h3>Attributes:</h3>
        <div className={c["attribute-wrapper"]}>
          <span>Skill Level:</span>
          <span>{hoveredSkill.level}</span>
        </div>
        <div className={c["attribute-wrapper"]}>
          <span>Type:</span>
          <span>{hoveredSkill.type}</span>
        </div>
        {hoveredSkill.type === "offense" && (
          <>
            <div className={c["attribute-wrapper"]}>
              <span>Mana Cost:</span>
              <span>{hoveredSkill.manaCost}</span>
            </div>
            <div className={c["attribute-wrapper"]}>
              <span>Damage:</span>
              <span>{hoveredSkill.damage}</span>
            </div>
            <div className={c["attribute-wrapper"]}>
              <span>Cooldown:</span>
              <span>{hoveredSkill.cooldown}</span>
            </div>
            {hoveredSkill.effects && (
              <div className={c["attribute-wrapper"]}>
                <span>Effects:</span>
                <span>{hoveredSkill.effects.join(", ")}</span>
              </div>
            )}
          </>
        )}
        {hoveredSkill.type === "defense" && (
          <>
            <div className={c["attribute-wrapper"]}>
              <span>Armor Boost:</span>
              <span>{hoveredSkill.armorBoost}</span>
            </div>
            <div className={c["attribute-wrapper"]}>
              <span>Resistance:</span>
              <span>{hoveredSkill.resistance}</span>
            </div>
          </>
        )}
        {hoveredSkill.type === "magic" && (
          <>
            <div className={c["attribute-wrapper"]}>
              <span>Spell Power:</span>
              <span>{hoveredSkill.spellPower}</span>
            </div>
            <div className={c["attribute-wrapper"]}>
              <span>Mana Cost:</span>
              <span>{hoveredSkill.manaCost}</span>
            </div>
            <div className={c["attribute-wrapper"]}>
              <span>Element:</span>
              <span>{hoveredSkill.element}</span>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};

export default GearInfoPanel;
