"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ThemeContextType {
  mode: string;
  toggle: () => void;
  setMode: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggle: () => {},
  setMode: () => {},
});

export const ThemeContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggle }}>
      <div className={`${mode==='dark'?'dark':'light'}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
