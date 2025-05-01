import { useEffect, useState } from "react";
import { skillImages } from "../../store/skillImagesStore";
import c from "./SkillBox.module.css";

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
    <div className={c.sections}>
      {images &&
        images.map((item) => (
          <div key={item.id} className={c.box}>
            <div className={c.imageWrapper}>
              <img className={c.skillPicture} src={item.image} alt={item.id} />
            </div>

            <div className={c.buttonContainer}>
              <button className={`${c.button} ${c.ready}`}>
                <div className={c.statHolder}></div>
              </button>
            </div>

            <div className={c.statContainer}>
              <span></span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkillBox;
