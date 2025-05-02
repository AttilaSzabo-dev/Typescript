import { Gear, GearType } from "../interfaces/gears/Gears";
import { gearImages } from "../store/gearImagesStore";

const gearTypes: GearType[] = [
  "helmet",
  "armor",
  "belt",
  "pants",
  "boots",
  "glove",
  "shield",
  "sword",
  "bow",
];

const gearBaseStats: Record<GearType, string[]> = {
  helmet: ["armor", "healthBonus"],
  armor: ["armor", "healthBonus"],
  belt: ["armor", "healthBonus"],
  pants: ["armor", "healthBonus"],
  boots: ["speed", "dodgeChance"],
  glove: ["speed", "dodgeChance"],
  shield: ["blockChance", "armor"],
  sword: ["minDamage", "maxDamage"],
  bow: ["manaBonus", "critChance"],
};

const optionalStats = [
  "critChance",
  "burn",
  "lifesteal",
  "resistFire",
  "resistMagic",
  "resistPoison",
  "healthRegen",
  "intelligence",
  "stamina",
  "stealth",
  "luck",
  "elementalAffinity",
];

const rarities = ["common", "rare", "epic", "magic", "set", "legendary"];

function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateImageId(type: GearType, rarity: string): string {
  return rarity
    .replace("common", "c")
    .replace("rare", "r")
    .replace("epic", "e")
    .replace("magic", "m")
    .replace("set", "s")
    .replace("legendary", "l")
    .concat(
      type
        .replace("belt", "be")
        .replace("armor", "ar")
        .replace("bow", "bw")
        .replace("boots", "bo")
        .replace("glove", "gl")
        .replace("helmet", "he")
        .replace("pants", "pa")
        .replace("shield", "sh")
        .replace("sword", "sw")
    );
}

export function generateRandomGear(): Gear {
  const type = gearTypes[Math.floor(Math.random() * gearTypes.length)];
  const rarity = rarities[Math.floor(Math.random() * rarities.length)];

  const baseStats = gearBaseStats[type];
  const stats: Record<string, number> = {};

  baseStats.forEach((stat) => {
    stats[stat] = getRandomValue(5, 20);
  });

  // Add 1–3 optional stats depending on rarity
  const extraCount = {
    common: 0,
    rare: 1,
    epic: 2,
    magic: 3,
    set: 4,
    legendary: 5,
  }[rarity];

  const shuffled = [...optionalStats].sort(() => 0.5 - Math.random());
  shuffled.slice(0, extraCount).forEach((stat) => {
    stats[stat] = getRandomValue(1, 10);
  });

  const imageId = generateImageId(type, rarity);
  const imageEntry = gearImages[type]?.find((entry) => entry.id === imageId);
  const image = imageEntry?.image ?? "";

  return {
    id: crypto.randomUUID(),
    name: `${rarity.charAt(0).toUpperCase() + rarity.slice(1)} ${type}`,
    type,
    image,
    rarity: rarity as Gear["rarity"],
    stats,
  };
}
