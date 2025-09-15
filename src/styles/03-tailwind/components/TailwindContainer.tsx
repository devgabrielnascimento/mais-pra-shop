import { Navbar } from "../../03-tailwind/components/Navbar";
import { MainContent } from "../../03-tailwind/components/MainContent";
import { ThemeProvider } from "../../../hooks/useTheme";
import "../tailwindstyles.css";
export function TailwindContainer() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}
