import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "@/store/slices/loaderSlice";
import { showToast } from "@/store/slices/toastSlice";
import { getSearchedProducts } from "@/actions/Products/collectionProducts";
import { Product } from "@/types/ProductsType/ProductType";
import { debounce } from "@/utils/debounce";

export const useSearchProducts = (searchText: string) => {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const fetchSearchedProducts = useCallback(
    async (text: string) => {
      try {
        dispatch(showLoader());
        const response = await getSearchedProducts({ searchedString: text });
        const { products, message } = response.data;

        if (response.status === 200) {
          setSearchedProducts(products);
        } else {
          dispatch(showToast({ type: "error", message }));
        }
      } catch (err: any) {
        dispatch(
          showToast({
            type: "error",
            message: err.message || "Error while fetching",
          })
        );
      } finally {
        dispatch(hideLoader());
      }
    },
    [dispatch]
  );

  const debouncedFetch = useCallback(debounce(fetchSearchedProducts, 400), [
    fetchSearchedProducts,
  ]);

  useEffect(() => {
    if (searchText.trim()) {
      debouncedFetch(searchText.trim());
    } else {
      setSearchedProducts([]);
    }
  }, [searchText, debouncedFetch]);

  return searchedProducts;
};
