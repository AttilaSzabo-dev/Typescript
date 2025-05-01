import c from "./StoryBox.module.css";

const StoryBox = (props) => {
  return (
    <div className={`${c.box} ${c["story-box--container"]}`}>{props.story}</div>
  );
};

export default StoryBox;
