import { ProductsContainer } from "../components/ProductsContainer";
// import { useTheme } from "../../../../hooks/useTheme";
export function MainContent() {
//   const { theme } = useTheme();
  return (
    <main className="main">
      <div className="containerMain">
        <ProductsContainer />
      </div>
    </main>
  );
}
