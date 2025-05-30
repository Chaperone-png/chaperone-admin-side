import { AxiosResponse } from "axios";

import { AppDispatch } from "@/store/store";
import { showToast } from "@/store/slices/toastSlice";
import { hideLoader, showLoader } from "@/store/slices/loaderSlice";
import { handleAuthError } from "./ErrorHandling";

/**
 * Handles API responses to return structured status and data. from the api Call
 */
export const handleApiResponse = async (
  apiCall: Promise<AxiosResponse>
): Promise<{ status: number; data: any }> => {
  try {
    const response = await apiCall;
    return { status: response.status, data: response.data };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      data: error.response?.data || { message: "Something went wrong" },
    };
  }
};

/**
 * Handles API responses Over the Component View
 */

export const handleApiSuccess = (
  dispatch: AppDispatch,
  data: any,
  successMessage?: string
) => {
  dispatch(
    showToast({
      type: "success",
      message: successMessage || data.message || "Success",
    })
  );
};

export const handleApiError = (dispatch: AppDispatch, error: any) => {
  const errorMessage = handleAuthError(error);
  dispatch(showToast({ type: "error", message: errorMessage }));
};

export const executeApiCall = async <T>(
  dispatch: AppDispatch,
  apiCall: () => Promise<{ status: number; data: T }>,
  successCallback?: (data: T) => void,
  successMessage?: string,
  finalHandler?: () => void
) => {
  dispatch(showLoader());
  try {
    const { status, data } = await apiCall();
    if (status === 200 || status == 201 || status == 204) {
      handleApiSuccess(dispatch, data, successMessage);
      successCallback?.(data);
    } else {
      throw { status, data };
    }
  } catch (error) {
    console.log({error})
    handleApiError(dispatch, error);
  } finally {
    dispatch(hideLoader());
    finalHandler?.();
  }
};
