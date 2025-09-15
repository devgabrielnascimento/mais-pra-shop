import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import type { ReactNode } from "react";

type ThemedProps = {
  children: ReactNode;
  theme: "light" | "dark";
};

export function Themed({ children, theme }: ThemedProps) {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
