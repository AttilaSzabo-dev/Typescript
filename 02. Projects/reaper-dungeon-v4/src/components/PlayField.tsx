//import { useState } from "react";
import CharacterField from "./character/CharacterField";
import DialogueField from "./dialogue/DialogueField";
import BackpackField from "./backpack/BackpackField";

import classes from "./PlayField.module.css";

const PlayField = () => {
  return (
    <div className={classes.playField}>
      <CharacterField />
      <DialogueField />
      <BackpackField />
    </div>
  );
};

export default PlayField;
