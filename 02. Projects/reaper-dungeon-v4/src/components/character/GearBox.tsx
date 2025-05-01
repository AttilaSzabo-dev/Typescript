import GearBoxItem from "./GearBoxItem";
import classes from "./GearBox.module.css";
import { useEffect } from "react";

const Gear = [
  {
    type: "head",
  },
];

const GearBox = () => {
  useEffect(() => {
    //console.log(Gear.leg.id);
  }, []);
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
    </div>
  );
};

export default GearBox;
