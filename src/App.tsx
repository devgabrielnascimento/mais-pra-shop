import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledContainer } from "./styles/04-styled/components/StyledContainer";
import { CSSModulesContainer } from "./styles/02-css-modules/CSSModulesContainer";
import { TailwindContainer } from "./styles/03-tailwind/components/TailwindContainer";
import { CSSGlobalContainer } from "./styles/01-css-global/components/CSSGlobalContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TailwindContainer />} />
        <Route path="/styled" element={<StyledContainer />} />
        <Route path="/modules" element={<CSSModulesContainer />} />
        <Route path="/global" element={<CSSGlobalContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
