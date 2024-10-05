import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { type Themes } from "@/stores/themeSlice";
import { icons } from "@/components/Base/Lucide";
import sideMenu from "@/main/side-menu";
import simpleMenu from "@/main/simple-menu";
import topMenu from "@/main/top-menu";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface MenuState {
  menu: Array<Menu | string>;
}

const initialState: MenuState = {
  menu: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

const { adminSideMenu } = sideMenu;
const { adminSideSimpleMenu } = simpleMenu;
const { adminSideTopMenu } = topMenu;

// Selector to get the menu based on layout and role
export const selectMenu = (layout: Themes["layout"]) => (state: RootState) => {
  if (layout === "top-menu") {
    return adminSideTopMenu;
  }

  if (layout === "simple-menu") {
    return adminSideSimpleMenu;
  }

  // Return the appropriate side menu based on user role
  return adminSideMenu;
};

export default menuSlice.reducer;
