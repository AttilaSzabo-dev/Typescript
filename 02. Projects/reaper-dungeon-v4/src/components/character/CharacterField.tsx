import {
  offenseImages,
  defenseImages,
  magicImages,
} from "../../stores/skillImagesStore";
import SkillBox from "./SkillBox";
import GearBox from "./GearBox";
//import CharacterBox from "./InventoryElements/CharacterBox";

import classes from "./CharacterField.module.css";

const CharacterField = () => {
  return (
    <div className={`${classes.field} ${classes["inventory-field"]}`}>
      <SkillBox images={offenseImages} />
      <SkillBox images={defenseImages} />
      <SkillBox images={magicImages} />
      <GearBox />
      {/* <CharacterBox /> */}
    </div>
  );
};

export default CharacterField;
