import { StateCreator } from "zustand";
import { Store } from "./store";

export type MenuType = {
  menu: boolean;
  setMenu: (value?: boolean) => void; 
};

export const useMenuStore: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  MenuType
> = (set) => ({
  menu: false,
  setMenu: (value) =>
    set((state) => {
      state.menu = typeof value === "boolean" ? value : !state.menu;
    }),
});