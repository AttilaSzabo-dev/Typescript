import { Gear } from "../interfaces/gears/Gears";
import { gearImages } from "../store/gearImagesStore";

export const defaultGears: Gear[] = [
  {
    id: "defaultHelmet",
    name: "Common Helmet",
    type: "helmet",
    image: gearImages.head.find((img) => img.id === "b_he_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultArmor",
    name: "Common Armor",
    type: "armor",
    image: gearImages.body.find((img) => img.id === "b_bo_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultBelt",
    name: "Common Belt",
    type: "belt",
    image: gearImages.belt.find((img) => img.id === "b_be_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultPants",
    name: "Common Pants",
    type: "pants",
    image: gearImages.leg.find((img) => img.id === "b_le_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultBoots",
    name: "Common Boots",
    type: "boots",
    image: gearImages.feet.find((img) => img.id === "b_fe_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultGlove",
    name: "Common Glove",
    type: "glove",
    image: gearImages.hand.find((img) => img.id === "b_ha_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultSword",
    name: "Common Sword",
    type: "sword",
    image: gearImages.sword.find((img) => img.id === "b_sw_1")?.image || "",
    rarity: "common",
    stats: {
      minDamage: 1,
      maxDamage: 2,
    },
  },
  {
    id: "defaultShield",
    name: "Common Shield",
    type: "shield",
    image: gearImages.shield.find((img) => img.id === "b_sh_1")?.image || "",
    rarity: "common",
    stats: {
      blockChance: 2,
      armor: 1,
    },
  },
];
