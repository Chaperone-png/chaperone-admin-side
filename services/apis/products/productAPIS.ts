"use server";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";
import {
  collectionProductsPayloadType,
  homePageProductsPayloadType,
  SearchedProductsPayloadType,
  SpecificProductsPayloadType,
} from "@/types/Auth/apis";

const userProductApi = getApiInstance("USERS");

// ✅ Get Home Page Products API
export const homePageProducts = async (
  payload: homePageProductsPayloadType
) => {
  return await handleApiResponse(
    userProductApi.post("/product/products", payload)
  );
};

// ✅ Get Specific Product API
export const TrendingSearchesAndProductS = async () => {
  return await handleApiResponse(
    userProductApi.get(`/product/products/trending-products`)
  );
};

// ✅ Get All Products API
export const AllProducts = async (payload: collectionProductsPayloadType) => {
  return await handleApiResponse(
    userProductApi.post("/product/all-products", JSON.stringify(payload))
  );
};

// ✅ Get Specific Product API
export const SpecificProduct = async (payload: SpecificProductsPayloadType) => {
  return await handleApiResponse(
    userProductApi.get(`/product/products/${payload.product_id}`)
  );
};

// ✅ Get Searched Products API
export const SearchedProducts = async (
  payload: SearchedProductsPayloadType
) => {
  return await handleApiResponse(
    userProductApi.get(`/product/products/search/${payload.searchedString}`)
  );
};
