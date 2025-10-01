import { Skill } from "../../interfaces/skills/Skill";
import { useSkillStore } from "../../store/useSkillStore";
import c from "./SkillItem.module.css";

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = (props: SkillItemProps) => {
  const { skill } = props;
  const availableSkillPoints = useSkillStore(
    (state) => state.availableSkillPoints
  );
  const changeSkillPoints = useSkillStore(
    (state) => state.changeAvailableSkillPoints
  );
  const levelUpSkill = useSkillStore((state) => state.levelUpSkill);
  const setInfoPanel = useSkillStore((state) => state.setInfoPanel);
  const setHoveredSkillId = useSkillStore((state) => state.setHoveredSkillId);

  return (
    <div
      className={`${c["skill-container"]} ${
        !skill.isUnlocked ? c["locked"] : ""
      }`}
    >
      <button
        className={c["image-wrapper"]}
        onClick={() => {
          if (availableSkillPoints > 0) {
            changeSkillPoints(-1);
            levelUpSkill(skill.id);
          }
        }}
        onMouseEnter={() => {
          setInfoPanel(true);
          setHoveredSkillId(skill.id);
        }}
        onMouseLeave={() => setInfoPanel(false)}
      >
        <img className={c["skill-picture"]} src={skill.image} alt={skill.id} />
      </button>
      <div className={c["stat-container"]}>
        <span>{skill.level}</span>
      </div>
    </div>
  );
};

export default SkillItem;
