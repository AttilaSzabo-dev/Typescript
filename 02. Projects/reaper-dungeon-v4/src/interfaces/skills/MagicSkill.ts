import { SkillBase } from "./SkillBase";

export interface MagicSkill extends SkillBase {
  type: "magic";
  manaCost: number;
  spellPower: number;
  element: "fire" | "ice" | "arcane";
}
