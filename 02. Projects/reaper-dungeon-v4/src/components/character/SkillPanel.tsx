import SkillItem from "./SkillItem";
import { Skill } from "../../interfaces/skill";

import c from "./SkillPanel.module.css";

interface SkillPanelProps {
  skills: Skill[];
}

const SkillPanel = (props: SkillPanelProps) => {
  const { skills } = props;

  return (
    <div className={c.sections}>
      {skills && skills.map((item) => <SkillItem key={item.id} skill={item} />)}
    </div>
  );
};

export default SkillPanel;
