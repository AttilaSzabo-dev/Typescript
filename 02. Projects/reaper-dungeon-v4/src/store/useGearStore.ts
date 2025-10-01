import { create } from "zustand";
import { Gear, GearType } from "../interfaces/gears/Gears";
import { defaultGears } from "../data/defaultGearData";

type GearSlots = Partial<Record<GearType, Gear>>;

interface CharacterState {
  equipped: GearSlots;
  backpack: Gear[];
  gearInfoPanel: boolean;
  hoveredGearId: string | null;
  setGearPanel: (status: boolean) => void;
  setHoveredGearId: (id: string | null) => void;
  equipGear: (gear: Gear) => void;
  unequipGear: (type: GearType) => void;
  moveToBackpack: (gear: Gear) => void;
  dropItem: (gearId: string) => void;
  swapWithBackpack: (gear: Gear) => void;
}

export const useGearStore = create<CharacterState>((set, get) => {
  // Convert defaultGears array to equipped object
  const initialEquipped = defaultGears.reduce<GearSlots>((acc, gear) => {
    acc[gear.type] = gear;
    return acc;
  }, {});

  return {
    equipped: initialEquipped,
    backpack: [],
    gearInfoPanel: false,
    hoveredGearId: null,

    setGearPanel: (status) => {
      set(() => ({
        gearInfoPanel: status,
      }));
    },

    setHoveredGearId: (id) => {
      set({ hoveredGearId: id });
    },

    equipGear: (gear) => {
      const { equipped, backpack } = get();
      const newBackpack = backpack.filter((item) => item.id !== gear.id);
      const currentEquipped = equipped[gear.type];

      // If there's already gear in this slot, push it to backpack
      if (currentEquipped) newBackpack.push(currentEquipped);

      set({
        equipped: { ...equipped, [gear.type]: gear },
        backpack: newBackpack,
      });
    },

    unequipGear: (type) => {
      const { equipped, backpack } = get();
      const item = equipped[type];
      if (!item) return;

      const newEquipped = { ...equipped };
      delete newEquipped[type];

      set({
        equipped: newEquipped,
        backpack: [...backpack, item],
      });
    },

    moveToBackpack: (gear) => {
      const { backpack } = get();
      set({ backpack: [...backpack, gear] });
    },

    dropItem: (gearId) => {
      const { backpack } = get();
      set({
        backpack: backpack.filter((item) => item.id !== gearId),
      });
    },

    swapWithBackpack: (gear) => {
      const { equipped, backpack } = get();
      const current = equipped[gear.type];
      const newBackpack = backpack.filter((item) => item.id !== gear.id);
      if (current) newBackpack.push(current);

      set({
        equipped: { ...equipped, [gear.type]: gear },
        backpack: newBackpack,
      });
    },
  };
});
