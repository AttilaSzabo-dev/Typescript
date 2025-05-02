import { SkillBase } from "./SkillBase";

export interface OffenseSkill extends SkillBase {
  type: "offense";
  cooldown: number;
  manaCost: number;
  damage: number;
  effects?: string[];
}
