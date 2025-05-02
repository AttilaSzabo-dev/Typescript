import { useEffect, useState } from "react";
import { useSkillStore } from "../store/useSkillStore";
import SkillPanel from "../components/character/SkillPanel";
import GearPanel from "../components/character/GearPanel";
//import CharacterBox from "./InventoryElements/CharacterBox";

import c from "./CharacterField.module.css";

const CharacterField = () => {
  const { skills, availableSkillPoints, infoPanel, hoveredSkillId } =
    useSkillStore();
  const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(infoPanel);

  const orderedTypes = ["offense", "defense", "magic"];

  const grouped = orderedTypes.map((type) =>
    skills.filter((item) => item.type === type)
  );

  const hoveredSkill = skills.find((s) => s.id === hoveredSkillId);

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
    <div className={`${c.field} ${c["inventory-field"]}`}>
      <div className={c["available-skill-points-wrapper"]}>
        <span>Available Skill Points: </span>
        <span>{availableSkillPoints}</span>
      </div>
      {grouped &&
        grouped.map((skills) => (
          <SkillPanel key={skills[0].type} skills={skills} />
        ))}
      <div
        className={`${c["skill-info-panel"]} ${
          isInfoPanelVisible ? c["open"] : ""
        }`}
      >
        {hoveredSkill && hoveredSkill.name}
      </div>
      <GearPanel />
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
