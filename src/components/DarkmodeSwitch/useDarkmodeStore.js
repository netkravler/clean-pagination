import create from "zustand";

import { persist } from "zustand/middleware";

export const useDarkmodeStore = create(
  persist(
    (set) => ({
      mode: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      setMode: (mode) => set(() => ({ mode: mode })),
    }),
    { name: "darkmode" }
  )
);
