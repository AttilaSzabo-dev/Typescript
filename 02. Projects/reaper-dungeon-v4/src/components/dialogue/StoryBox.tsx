import classes from "./StoryBox.module.css";

const StoryBox = (props) => {
  return (
    <div className={`${classes.box} ${classes["story-box--container"]}`}>
      {props.story}
    </div>
  );
};

export default StoryBox;
