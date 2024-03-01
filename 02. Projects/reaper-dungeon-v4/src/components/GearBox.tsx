import GearBoxItem from "./GearBoxItem";
import classes from "./GearBox.module.css";

const GearBox = () => {
  return (
    <div className={classes.section}>
      {/* {charItems.map((item) =>
        item.nonItem ? (
          <div
            key={item.id}
            className={`${classes.imageCommon} ${classes[item.id]}`}
          ></div>
        ) : (
          <GearBoxItem key={item.id} image={item.imagePath} />
        )
      )} */}
      <div className={classes.buttonTab}>
        <button type="button">test</button>
      </div>
    </div>
  );
};

export default GearBox;
