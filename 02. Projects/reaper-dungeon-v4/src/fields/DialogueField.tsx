import OptionsBox from "../components/dialogue/OptionsBox";
import StoryBox from "../components/dialogue/StoryBox";
import c from "./DialogueField.module.css";

const DialogueField = () => {
  const story = "story";
  const option_1 = "option_1";
  const option_2 = "option_2";
  const option_3 = "option_3";

  return (
    <div className={`${c.field}`}>
      <StoryBox story={story} />
      <div className={`${c["option-container"]}`}>
        <OptionsBox option={option_1} />
        <OptionsBox option={option_2} />
        <OptionsBox option={option_3} />
      </div>
    </div>
  );
};

export default DialogueField;
