import { type Menu } from "@/stores/menuSlice";

const adminSideSimpleMenu: Array<Menu | "divider"> = [
  {
    icon: "Home",
    pathname: "/",
    title: "Home",
  },
  // {
  //   icon: "Users",
  //   pathname: "/clients",
  //   title: "Clients",
  // },
  // {
  //   icon: "ShoppingBag",
  //   pathname: "/plans",
  //   title: "Plans",
  // },
  // {
  //   icon: "Info",
  //   pathname: "/purchase-history",
  //   title: "Total Purchase List",
  // },
  // {
  //   icon: "User",
  //   pathname: "/profile",
  //   title: "Profile",
  // },
];

export default { adminSideSimpleMenu };
