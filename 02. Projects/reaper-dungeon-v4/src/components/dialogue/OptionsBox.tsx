import classes from "./OptionsBox.module.css";

const OptionsBox = (props) => {
  return (
    <div className={`${classes.box} ${classes["option-box--container"]}`}>
      {props.option}
    </div>
  );
};

export default OptionsBox;
