import c from "./OptionsBox.module.css";

const OptionsBox = (props) => {
  return (
    <div className={`${c.box} ${c["option-box--container"]}`}>
      {props.option}
    </div>
  );
};

export default OptionsBox;
