"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
interface IProviderProps {
  children: ReactNode;
}

export const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};
