import { ThemeProvider } from "../../../hooks/useTheme";
import { Navbar } from "./Navbar";
import "../../../styles/01-css-global/global.css";
import { MainContent } from "./MainContent";

export function CSSGlobalContainer() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}
