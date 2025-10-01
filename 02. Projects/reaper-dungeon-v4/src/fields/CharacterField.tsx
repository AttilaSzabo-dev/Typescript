import { useSkillStore } from "../store/useSkillStore";
import { useGearStore } from "../store/useGearStore";
import { Gear } from "../interfaces/gears/Gears";
import SkillPanel from "../components/character/SkillPanel";
import SkillInfoPanel from "../components/character/SkillInfoPanel";
import GearPanel from "../components/character/GearPanel";
import GearInfoPanel from "../components/character/GearInfoPanel";
//import CharacterBox from "./InventoryElements/CharacterBox";

import c from "./CharacterField.module.css";

const CharacterField = () => {
  const { skills, availableSkillPoints, hoveredSkillId } = useSkillStore();
  const { equipped, hoveredGearId } = useGearStore();

  const orderedTypes = ["offense", "defense", "magic"];

  const grouped = orderedTypes.map((type) =>
    skills.filter((item) => item.type === type)
  );

  const hoveredSkill = skills.find((s) => s.id === hoveredSkillId);
  const hoveredGear = Object.values(equipped).find(
    (s): s is Gear => !!s && s.id === hoveredGearId
  );

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
      {hoveredGear && <GearInfoPanel hoveredGear={hoveredGear} />}
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
