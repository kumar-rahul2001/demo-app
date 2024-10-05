import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define the interface for the user state.
interface UserState {
  role: string | null;
  companyName: string | null;
  companyLogo: string | null;
  isUserLoggedIn: boolean;
}

// Function to retrieve the user details from localStorage.
const getUserFromLocalStorage = () => {
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const user = JSON.parse(authUser);
    return {
      role: user?.userRole || null,
      companyName: user?.name || null,
      companyLogo: user?.logo || null,
    };
  }
  return { role: null, companyName: null, companyLogo: null };
};

// Extract initial user data from localStorage
const userFromLocalStorage = getUserFromLocalStorage();

// Initial state for the user slice.
const initialState: UserState = {
  role: userFromLocalStorage.role,
  companyName: userFromLocalStorage.companyName,
  companyLogo: userFromLocalStorage.companyLogo,
  isUserLoggedIn: !!userFromLocalStorage.role,
};

// Create the user slice using createSlice.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // This action updates role, companyName, and companyLogo in the state.
    setUserRole: (
      state,
      action: PayloadAction<{
        role: string;
        companyName: string;
        companyLogo: string;
      }>
    ) => {
      state.role = action.payload.role;
      state.companyName = action.payload.companyName;
      state.companyLogo = action.payload.companyLogo;
      state.isUserLoggedIn = true;
    },
    // This action logs the user out.
    logout: (state) => {
      state.role = null;
      state.companyName = null;
      state.companyLogo = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem("authUser");
    },
  },
});

// Export the actions to use in components.
export const { setUserRole, logout } = userSlice.actions;

// Selector to access the user role from the state.
export const selectUserRole = (state: RootState): string | null =>
  state.user.role;

// Selector to access the company name from the state.
export const selectCompanyName = (state: RootState): string | null =>
  state.user.companyName;

// Selector to access the company logo from the state.
export const selectCompanyLogo = (state: RootState): string | null =>
  state.user.companyLogo;

// Selector to check if the user is logged in.
export const selectIsUserLoggedIn = (state: RootState): boolean =>
  state.user.isUserLoggedIn;

// Export the reducer to be included in the store.
export default userSlice.reducer;
