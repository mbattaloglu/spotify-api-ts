import { create } from "zustand";
import User from "../classes/User";

type UserStore = {
  user: User | null;
  accessToken: string | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  setAccessToken: (authToken: string) => void;
  clearAccessToken: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  accessToken: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
  setAccessToken: (authToken: string) => set({ accessToken: authToken }),
  clearAccessToken: () => set({ accessToken: null }),
}));
