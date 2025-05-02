import { useSkillStore } from "../store/useSkillStore";
import SkillPanel from "../components/character/SkillPanel";
import GearPanel from "../components/character/GearPanel";
//import CharacterBox from "./InventoryElements/CharacterBox";

import c from "./CharacterField.module.css";

const CharacterField = () => {
  const { skills } = useSkillStore();

  const orderedTypes = ["offense", "defense", "magic"];

  const grouped = orderedTypes.map((type) =>
    skills.filter((item) => item.type === type)
  );

  return (
    <div className={`${c.field} ${c["inventory-field"]}`}>
      {grouped &&
        grouped.map((skills) => (
          <SkillPanel key={skills[0].type} skills={skills} />
        ))}
      <GearPanel />
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
