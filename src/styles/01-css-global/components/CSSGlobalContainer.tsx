import { ThemeProvider } from "../../../hooks/useTheme";
import { Navbar } from "./Navbar";
// import { MainContent } from "./components/MainContent/MainContent";
import "../../../styles/01-css-global/globals.css";
import { MainContent } from "./MainContent";

export function CSSGlobalContainer() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}
