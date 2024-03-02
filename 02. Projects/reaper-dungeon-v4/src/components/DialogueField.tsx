import StoryBox from "./StoryBox";
import OptionsBox from "./OptionsBox";

import classes from "./DialogueField.module.css";

const DialogueField = () => {
  const story = "story";
  const option_1 = "option_1";
  const option_2 = "option_2";
  const option_3 = "option_3";

  return (
    <div className={`${classes.field}`}>
      <StoryBox story={story} />
      <div className={`${classes["option-container"]}`}>
        <OptionsBox option={option_1} />
        <OptionsBox option={option_2} />
        <OptionsBox option={option_3} />
      </div>
    </div>
  );
};

export default DialogueField;
