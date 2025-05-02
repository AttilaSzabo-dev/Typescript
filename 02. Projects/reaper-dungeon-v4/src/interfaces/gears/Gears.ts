export type GearType =
  | "helmet"
  | "armor"
  | "belt"
  | "pants"
  | "boots"
  | "glove"
  | "shield"
  | "sword"
  | "bow";

export interface Gear {
  id: string;
  name: string;
  type: GearType;
  image: string;
  rarity: "common" | "rare" | "epic" | "magic" | "set" | "legendary";
  stats: Record<string, number>;
}
