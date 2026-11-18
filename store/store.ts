import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { MenuType, useMenuStore } from "./menu";

export type Store = MenuType;

const persistOptions: PersistOptions<Store> = {
  name: "albert.technology", 
  version: 4,
  partialize: (state) =>
    ({
    }) as Store,
};

export const useBoundStore = create<Store>()(
  persist(
    immer((set, get, store) => ({
      ...useMenuStore(set, get, store),
    })),
    persistOptions,
  ),
);
