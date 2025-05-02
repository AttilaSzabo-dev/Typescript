//import { useState } from "react";
import BackpackField from "./BackpackField";
import CharacterField from "./CharacterField";
import DialogueField from "./DialogueField";
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
