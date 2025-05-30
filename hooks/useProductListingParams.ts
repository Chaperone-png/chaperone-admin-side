"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "@/types/ProductsType/ProductType";

export interface ProductListingParams {
  pincode: string;
  mainCategory: string;
  priceFilter: [number, number];
  subCategory: string;
  productNameSortBy: 0 | -1 | 1;
  productPriceSortBy: 0 | -1 | 1;
  itemsPerLoad: number;
  loadCount: number;
  searchedString: string;
  isBestSeller?: boolean;
}

export const useProductListingParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const isSearchView = pathname?.startsWith("/search");
  const isCollectionView = pathname?.startsWith("/collections");

  const [hasMounted, setHasMounted] = useState(false);
  const [params, setParams] = useState<ProductListingParams>({
    pincode: "",
    mainCategory: "all",
    priceFilter: [0, 10000],
    subCategory: "all",
    productNameSortBy: 0,
    productPriceSortBy: 0,
    itemsPerLoad: 2,
    loadCount: 1,
    searchedString: "",
    isBestSeller: false,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(false);
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const paramsRef = useRef(params);
  const isFirstRender = useRef(true);

  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  useEffect(() => {
    if (isCollectionView) {
      const segments = pathname.split("/").filter(Boolean);
      const mainCategory = segments[1] || "all";
      const subCategory = segments[2] || "all";

      const urlSortPrice = searchParams.get("sortPrice");
      const urlSortName = searchParams.get("sortName");
      const urlPrice = searchParams.get("price");
      const urlBestSeller = searchParams.get("bestSeller");
      const isBestSeller = urlBestSeller === "true";

      const priceFilter: [number, number] = [0, 10000];
      if (urlPrice && /^\d+-\d+$/.test(urlPrice)) {
        const [min, max] = urlPrice.split("-").map(Number);
        priceFilter[0] = min;
        priceFilter[1] = max;
      }

      setParams((prev) => {
        const newParams: ProductListingParams = {
          ...prev,
          mainCategory,
          subCategory,
          productNameSortBy:
            urlSortName === "Asc" ? 1 : urlSortName === "Desc" ? -1 : 0,
          productPriceSortBy:
            urlSortPrice === "Asc" ? 1 : urlSortPrice === "Desc" ? -1 : 0,
          priceFilter,
          isBestSeller,
        };

        return JSON.stringify(newParams) !== JSON.stringify(prev)
          ? newParams
          : prev;
      });
    }

    if (isSearchView) {
      const query = searchParams.get("q") || "";
      setParams((prev) => {
        if (prev.searchedString !== query) {
          return { ...prev, searchedString: query };
        }
        return prev;
      });
    }

    setHasMounted(true);
  }, [pathname, searchParams, isCollectionView, isSearchView]);

  useEffect(() => {
    const query: { [key: string]: string } = {};

    if (params.productPriceSortBy !== 0)
      query.sortPrice = params.productPriceSortBy === 1 ? "Asc" : "Desc";

    if (params.productNameSortBy !== 0)
      query.sortName = params.productNameSortBy === 1 ? "Asc" : "Desc";

    if (params.priceFilter[0] !== 0 || params.priceFilter[1] !== 10000)
      query.price = `${params.priceFilter[0]}-${params.priceFilter[1]}`;

    if (params.searchedString) query.q = params.searchedString;

    if (params.isBestSeller) query.bestSeller = "true"; 

    const newQueryString = new URLSearchParams(query).toString();
    const currentQueryString = window.location.search.slice(1); 

    if (newQueryString !== currentQueryString) {
      const url = `${pathname}?${newQueryString}`;
      router.replace(url, { scroll: false });
    }
  }, [
    params.productPriceSortBy,
    params.productNameSortBy,
    params.priceFilter,
    params.searchedString,
    params.isBestSeller,
    pathname,
    router,
  ]);

  useEffect(() => {
    if (!hasMounted || isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [params, hasMounted]);

  // ✅ Utility updaters
  const updatePincode = useCallback((pincode: string) => {
    setParams((prev) => ({ ...prev, pincode }));
  }, []);

  const updatePriceFilter = useCallback((filter: [number, number]) => {
    setParams((prev) => ({ ...prev, priceFilter: filter }));
  }, []);

  const updateSortBy = useCallback((nameSort: -1 | 1, priceSort: -1 | 1) => {
    setParams((prev) => ({
      ...prev,
      productNameSortBy: nameSort,
      productPriceSortBy: priceSort,
    }));
  }, []);

  const updateCategory = useCallback((main: string, sub: string) => {
    setParams((prev) => ({
      ...prev,
      mainCategory: main,
      subCategory: sub,
    }));
  }, []);

  const updateLoadCount = useCallback(() => {
    setParams((prev) => ({ ...prev, loadCount: prev.loadCount + 1 }));
  }, []);

  const resetLoadCount = useCallback(() => {
    setParams((prev) => ({ ...prev, loadCount: 1 }));
  }, []);

  const updateSearchedString = useCallback((str: string) => {
    setParams((prev) => ({ ...prev, searchedString: str }));
  }, []);

  const updateBestSeller = useCallback((value: boolean) => {
    setParams((prev) => ({ ...prev, isBestSeller: value }));
  }, []);

  const getApiBody = useCallback(() => {
    return { ...params };
  }, [params]);

  return {
    params,
    products,
    hasMoreProducts,
    dataFetched,
    updatePincode,
    updatePriceFilter,
    updateSortBy,
    updateCategory,
    updateLoadCount,
    resetLoadCount,
    updateSearchedString,
    updateBestSeller,
    getApiBody,
  };
};
