import { SkillBase } from "./SkillBase";

export interface DefenseSkill extends SkillBase {
  type: "defense";
  armorBoost: number;
  resistance: number;
}
