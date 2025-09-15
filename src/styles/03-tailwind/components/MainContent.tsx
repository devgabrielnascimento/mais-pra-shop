import { ProductsContainer } from "./ProductsContainer";


export const MainContent = () => {


  return (
    <div
      className={`flex justify-center w-full min-h-[calc(100vh-60px)] p-[5px] bg-[var(--background)] --transition-colors duration-200 ease-in-out`}
    >
      <main className="flex flex-col items-center justify-center w-full max-w-[1200px] pt-[100px] ">
        <ProductsContainer />
      </main>
    </div>
  );
};
