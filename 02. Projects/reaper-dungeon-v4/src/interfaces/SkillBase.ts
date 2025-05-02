export interface SkillBase {
  id: string;
  name: string;
  type: "offense" | "defense" | "magic";
  description: string;
  image: string;
  level: number;
  isUnlocked?: boolean;
}
