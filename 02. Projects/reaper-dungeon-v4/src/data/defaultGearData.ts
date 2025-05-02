import { Gear } from "../interfaces/gears/Gears";
import { gearImages } from "../store/gearImagesStore";

export const defaultGears: Gear[] = [
  {
    id: "defaultHelmet",
    name: "Common Helmet",
    type: "helmet",
    image: gearImages.helmet.find((img) => img.id === "c_he_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultArmor",
    name: "Common Armor",
    type: "armor",
    image: gearImages.armor.find((img) => img.id === "c_ar_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultBelt",
    name: "Common Belt",
    type: "belt",
    image: gearImages.belt.find((img) => img.id === "c_be_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultPants",
    name: "Common Pants",
    type: "pants",
    image: gearImages.pants.find((img) => img.id === "c_pa_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultBoots",
    name: "Common Boots",
    type: "boots",
    image: gearImages.boots.find((img) => img.id === "c_bo_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultGlove",
    name: "Common Glove",
    type: "glove",
    image: gearImages.glove.find((img) => img.id === "c_gl_1")?.image || "",
    rarity: "common",
    stats: {
      armor: 1,
    },
  },
  {
    id: "defaultSword",
    name: "Common Sword",
    type: "sword",
    image: gearImages.sword.find((img) => img.id === "c_sw_1")?.image || "",
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
    image: gearImages.shield.find((img) => img.id === "c_sh_1")?.image || "",
    rarity: "common",
    stats: {
      blockChance: 2,
      armor: 1,
    },
  },
];
