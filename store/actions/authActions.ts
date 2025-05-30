import { Dispatch } from "@reduxjs/toolkit";
import { fetchUserFromCookie } from "@/services/apis/authAPIs";
import { loginUser } from "../slices/userSlice";

export const fetchUser = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetchUserFromCookie();
    if (response?.status != 200) {
      console.error("Error fetching user:", response?.data?.message);
    } else {
      const { user, token } = response.data;
      const userDetails = {
        'user' : { ...user, expiry: null },
        token,
        rememberMe: false,
      };
      if (userDetails) {
        dispatch(loginUser(userDetails));
      }
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
