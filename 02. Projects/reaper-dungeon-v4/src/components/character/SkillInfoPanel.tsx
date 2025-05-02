import { useEffect, useState } from "react";
import { useSkillStore } from "../../store/useSkillStore";
import { Skill } from "../../interfaces/Skill";
import c from "./SkillInfoPanel.module.css";

interface SkillInfoPanelProps {
  hoveredSkill: Skill;
}

const SkillInfoPanel = (props: SkillInfoPanelProps) => {
  const { hoveredSkill } = props;
  const { infoPanel } = useSkillStore();
  const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(infoPanel);

  useEffect(() => {
    if (infoPanel) {
      setIsInfoPanelVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsInfoPanelVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [infoPanel]);
  return (
    <div
      className={`${c["skill-info-panel"]} ${
        isInfoPanelVisible ? c["open"] : ""
      }`}
    >
      <div className={c["top"]}>
        <img src={hoveredSkill.image} alt={hoveredSkill.id} />
        <span>{hoveredSkill.name}</span>
      </div>
      <div className={c["bottom"]}>
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
      </div>
    </div>
  );
};

export default SkillInfoPanel;
