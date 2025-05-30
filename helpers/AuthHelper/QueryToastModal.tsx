"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { showToast } from "@/store/slices/toastSlice";
import { loginUser } from "@/store/slices/userSlice";
import { getOAuthErrorMessage } from "@/utils/OAuthValidation/ErrorHandling";
import { getOAuthSuccessMessage } from "@/utils/OAuthValidation/SuccessHandling";
import { getGoogleUserInfo } from "@/actions/Auth/getUserInfo";
import { executeApiCall } from "@/utils/APIResponseHandling";
import { setUserId } from "@/store/slices/cartSlice";

const QueryToastHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const successParam = searchParams.get("success");
    const token = searchParams.get("token");

    if (errorParam) {
      const errorMessage = getOAuthErrorMessage(errorParam);
      dispatch(showToast({ type: "error", message: errorMessage }));
      router.replace("/");
      return;
    }

    const fetchUserInfo = async () => {
      if (successParam && token) {
        executeApiCall(
          dispatch,
          () => getGoogleUserInfo({ accessToken: token }),
          (data) => {
            dispatch(
              loginUser({
                user: {
                  ...data.user,
                  expiry: null,
                  token: null,
                  rememberMe: false,
                },
                token: data.token,
                rememberMe: false,
              })
            );
            dispatch(setUserId(data?.user?.id));
          },
          "Authentication Successful.",
          () => {
            router.replace("/");
          }
        );
      }
    };

    fetchUserInfo();
  }, [searchParams, dispatch, router]);

  return null;
};

export default QueryToastHandler;
