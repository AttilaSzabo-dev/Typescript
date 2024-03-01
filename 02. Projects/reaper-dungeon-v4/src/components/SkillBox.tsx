import classes from "./SkillBox.module.css";

interface Image {
  id: string;
  image: string;
}

interface SkillBoxProps {
  images: Image[];
}

const SkillBox = (props: SkillBoxProps) => {
  const { images } = props;
  return (
    <div className={classes.sections}>
      {images.map((item) => (
        <div key={item.id} className={classes.box}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.skillPicture}
              src={item.image}
              alt={item.id}
            />
          </div>

          <div className={classes.buttonContainer}>
            <button className={`${classes.button} ${classes.ready}`}>
              <div className={classes.statHolder}></div>
            </button>
          </div>

          <div className={classes.statContainer}>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBox;
