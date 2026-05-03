"use client";

import { createContext, useContext } from "react";

export const LoadingContext = createContext(true);

export const useLoadingComplete = () => {
  const isLoading = useContext(LoadingContext);
  return !isLoading;
};
