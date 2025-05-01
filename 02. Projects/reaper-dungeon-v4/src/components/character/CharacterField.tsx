import SkillBox from "./SkillBox";
import GearBox from "./GearBox";
//import CharacterBox from "./InventoryElements/CharacterBox";

import classes from "./CharacterField.module.css";

const CharacterField = () => {
  return (
    <div className={`${classes.field} ${classes["inventory-field"]}`}>
      <SkillBox type="offense" />
      <SkillBox type="defense" />
      <SkillBox type="magic" />
      <GearBox />
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
