import { Navbar } from "../components/Navbar";
import { MainContent } from "../components/MainContent";
import { useTheme, ThemeProvider } from "../../../hooks/useTheme";
import { Themed } from "../components/ThemeProvider";
import { GlobalStyle } from "../theme/GlobalStyle";

function InnerStyledContainer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Themed theme={theme}>
      <GlobalStyle />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <MainContent />
    </Themed>
  );
}

export function StyledContainer() {
  return (
    <ThemeProvider>
      <InnerStyledContainer />
    </ThemeProvider>
  );
}
