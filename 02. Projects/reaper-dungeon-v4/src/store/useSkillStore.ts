import { create } from "zustand";
import { Skill } from "../interfaces/skill";
import { allSkills } from "../data/skillsData";

interface SkillState {
  skills: Skill[];
  availableSkillPoints: number;
  getSkillById: (id: string) => Skill | undefined;
  unlockSkill: (id: string) => void;
  levelUpSkill: (id: string) => void;
  changeAvailableSkillPoints: (amount: number) => void;
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skills: allSkills,
  availableSkillPoints: 10,

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
