import { ThemeProvider } from "../../hooks/useTheme";
import { Navbar } from "./components/Navbar/Navbar";
import { MainContent } from "./components/MainContent/MainContent";

export function CSSModulesContainer() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}
