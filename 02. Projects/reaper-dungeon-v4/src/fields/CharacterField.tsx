import { useEffect, useState } from "react";
import { useSkillStore } from "../store/useSkillStore";
import SkillPanel from "../components/character/SkillPanel";
import GearPanel from "../components/character/GearPanel";
//import CharacterBox from "./InventoryElements/CharacterBox";

import c from "./CharacterField.module.css";
import SkillInfoPanel from "../components/character/SkillInfoPanel";

const CharacterField = () => {
  const { skills, availableSkillPoints, hoveredSkillId } = useSkillStore();

  const orderedTypes = ["offense", "defense", "magic"];

  const grouped = orderedTypes.map((type) =>
    skills.filter((item) => item.type === type)
  );

  const hoveredSkill = skills.find((s) => s.id === hoveredSkillId);

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
      {hoveredSkill && <SkillInfoPanel hoveredSkill={hoveredSkill} />}
      <GearPanel />
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
