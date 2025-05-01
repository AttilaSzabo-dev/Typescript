import { useEffect, useState } from "react";
import { skillImages } from "../../store/skillImagesStore";
import classes from "./SkillBox.module.css";

interface Image {
  id: string;
  image: string;
}

interface SkillBoxProps {
  type: string;
}

const SkillBox = (props: SkillBoxProps) => {
  const { type } = props;
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    switch (type) {
      case "offense":
        setImages(skillImages.offense);
        break;
      case "defense":
        setImages(skillImages.defense);
        break;
      case "magic":
        setImages(skillImages.magic);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className={classes.sections}>
      {images &&
        images.map((item) => (
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
