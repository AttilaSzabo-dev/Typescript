import { create } from "zustand";

type Skill = {
  name: string;
  level: number;
};

type Item = {
  id: string;
  name: string;
  type: "weapon" | "armor" | "consumable";
};

interface CharacterState {
  skills: Skill[];
  items: Item[];
  addSkill: (skill: Skill) => void;
  updateSkillLevel: (name: string, level: number) => void;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  getSkillByName: (name: string) => Skill | undefined;
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
  skills: [],
  items: [],
  addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
  updateSkillLevel: (name, level) =>
    set((state) => ({
      skills: state.skills.map((s) => (s.name === name ? { ...s, level } : s)),
    })),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  getSkillByName: (name) => {
    return get().skills.find((s) => s.name === name);
  },
}));
