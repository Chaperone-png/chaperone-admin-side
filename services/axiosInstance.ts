import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || "";

export const API_ROUTES = {
  PUBLIC: "public",
  USERS: "api/users",
  ADMIN: "api/admin",
  ADMIN_PINCODE: "api/admin/pincode",
  ADMIN_CATEGORY: "api/admin/categories",
  //ADMIN MAIN
  ADMIN_PLANT_MASTER: "api/admin/plant-master",
  ADMIN_POT_MASTER: "api/admin/pot-master",
  ADMIN_NURSERIES: "api/admin/nurseries",
};

const defaultHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

export const getApiInstance = (
  routeKey: keyof typeof API_ROUTES
): AxiosInstance => {
  const apiPath = API_ROUTES[routeKey];

  return axios.create({
    baseURL: `${BASE_URL}/${apiPath}`,
    headers: defaultHeaders,
    timeout: 10000,
    withCredentials: true,
  });
};
