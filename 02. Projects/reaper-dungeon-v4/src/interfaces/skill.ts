export interface Skill {
  id: string;
  name: string;
  type: "offense" | "defense" | "magic" | string;
  description: string;
  image: string;
  level: number;
  cooldown: number;
  manaCost: number;
  damage: number;
  effects?: string[];
  isUnlocked?: boolean;
}
