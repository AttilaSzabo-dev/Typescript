import classes from "./GearBoxItem.module.css";

const GearBoxItem = ({ image }) => {
  return (
    <div className={classes.gearContainer}>
      <img
        className={classes.gearImageWrapper}
        src={require(`../../../../../../images/gear/${image}.png`)}
        alt=""
      />
    </div>
  );
};

export default GearBoxItem;
