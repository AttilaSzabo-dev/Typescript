import { create } from "zustand";
import { Skill } from "../interfaces/Skill";
import { allSkills } from "../data/skillsData";

interface SkillState {
  skills: Skill[];
  availableSkillPoints: number;
  infoPanel: boolean;
  hoveredSkillId: string | null;
  setInfoPanel: (status: boolean) => void;
  setHoveredSkillId: (id: string | null) => void;
  getSkillById: (id: string) => Skill | undefined;
  unlockSkill: (id: string) => void;
  levelUpSkill: (id: string) => void;
  changeAvailableSkillPoints: (amount: number) => void;
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skills: allSkills,
  availableSkillPoints: 10,
  infoPanel: false,
  hoveredSkillId: null,

  setInfoPanel: (status) => {
    set(() => ({
      infoPanel: status,
    }));
  },

  setHoveredSkillId: (id) => {
    set({ hoveredSkillId: id });
  },

  getSkillById: (id) => {
    return get().skills.find((skill) => skill.id === id);
  },

  unlockSkill: (id) => {
    set((state) => ({
      skills: state.skills.map((s) =>
        s.id === id ? { ...s, isUnlocked: true } : s
      ),
    }));
  },

  levelUpSkill: (id) => {
    set((state) => ({
      skills: state.skills.map((s) =>
        s.id === id ? { ...s, level: s.level + 1 } : s
      ),
    }));
  },

  changeAvailableSkillPoints: (amount) => {
    set((state) => {
      const newPoints = state.availableSkillPoints + amount;
      return {
        availableSkillPoints: Math.max(newPoints, 0),
      };
    });
  },
}));
