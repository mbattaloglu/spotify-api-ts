import { create } from "zustand";
import User from "../classes/User";

type UserStore = {
  user: User | null;
  authToken: string | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  setAuthToken: (authToken: string) => void;
  clearAuthToken: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  authToken: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
  setAuthToken: (authToken: string) => set({ authToken }),
  clearAuthToken: () => set({ authToken: null }),
}));
