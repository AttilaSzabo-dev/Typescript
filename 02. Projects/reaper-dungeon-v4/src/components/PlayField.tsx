//import { useState } from "react";
import CharacterField from "./character/CharacterField";
import DialogueField from "./dialogue/DialogueField";
import BackpackField from "./backpack/BackpackField";

import c from "./PlayField.module.css";

const PlayField = () => {
  return (
    <div className={c.playField}>
      <CharacterField />
      <DialogueField />
      <BackpackField />
    </div>
  );
};

export default PlayField;
