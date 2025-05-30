"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "@/store/slices/categorySlice";

interface Props {
  categories: any[];
}

const LayoutInitializer = ({ categories }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [dispatch, categories]);

  return null;
};

export default LayoutInitializer;
