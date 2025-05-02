import { useSkillStore } from "../../store/useSkillStore";
import { Skill } from "../../interfaces/skill";

import c from "./SkillPanel.module.css";

interface SkillPanelProps {
  skills: Skill[];
}

const SkillPanel = (props: SkillPanelProps) => {
  const { skills } = props;
  const availableSkillPoints = useSkillStore(
    (state) => state.availableSkillPoints
  );
  const changeSkillPoints = useSkillStore(
    (state) => state.changeAvailableSkillPoints
  );
  const levelUpSkill = useSkillStore((state) => state.levelUpSkill);

  return (
    <div className={c.sections}>
      {skills &&
        skills.map((item) => (
          <div key={item.id} className={c.box}>
            <div className={c.imageWrapper}>
              <img className={c.skillPicture} src={item.image} alt={item.id} />
            </div>

            <div className={c.buttonContainer}>
              <button
                className={`${c.button} ${c.ready}`}
                onClick={() => {
                  changeSkillPoints(-1), levelUpSkill(item.id);
                }}
                disabled={availableSkillPoints <= 0}
              >
                <div className={c.statHolder}>{availableSkillPoints}</div>
              </button>
            </div>

            <div className={c.statContainer}>
              <span>{item.level}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkillPanel;
