import { create } from "zustand";

type Item = {
  id: string;
  name: string;
  type: "weapon" | "armor" | "consumable";
};

interface GearState {
  charItems: Item[];
  backpackItems: Item[];
  addCharItem: (item: Item) => void;
  addBackpackItem: (item: Item) => void;
  removeCharItem: (id: string) => void;
  removeBackpackItem: (id: string) => void;
}

export const useCharacterStore = create<GearState>((set) => ({
  charItems: [],
  backpackItems: [],

  addCharItem: (item) =>
    set((state) => ({ charItems: [...state.charItems, item] })),
  removeCharItem: (id) =>
    set((state) => ({ charItems: state.charItems.filter((i) => i.id !== id) })),
  addBackpackItem: (item) =>
    set((state) => ({ backpackItems: [...state.backpackItems, item] })),
  removeBackpackItem: (id) =>
    set((state) => ({
      backpackItems: state.backpackItems.filter((i) => i.id !== id),
    })),
}));
