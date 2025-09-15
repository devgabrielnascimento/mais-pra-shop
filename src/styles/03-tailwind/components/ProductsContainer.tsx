import { ProductCard } from "./ProductCard";

export const ProductsContainer = () => {

  return (
    <div
      className={`  grid justify-items-center w-full h-full p-[10px] gap-[16px] grid-cols-1
  [@media(min-width:481px)_and_(max-width:768px)]:grid-cols-2
  [@media(min-width:769px)_and_(max-width:1024px)]:grid-cols-3
  [@media(min-width:1025px)]:grid-cols-4 bg-[var(--color-preto)] dark:bg-[var(--color-preto)] --transition-colors duration-500 ease-in-out`}
    >
      <ProductCard
        id="1"
        title="Tênis Adventure Running"
        price={29.99}
        rating={4.5}
        tag="New"
        image="https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_640.jpg"
      />
      <ProductCard
        id="2"
        title="Sapatilha Fina de Couro Preta Bela Historia 2025 Ultra Moderna Nova Geração"
        price={39.99}
        rating={4.0}
        tag="New"
        image="https://cdn.pixabay.com/photo/2015/01/05/12/32/black-shoe-589195_640.jpg"
      />
      <ProductCard
        id="3"
        title="Produto 3"
        price={19.99}
        rating={3.5}
        tag="New"
        image="https://cdn.pixabay.com/photo/2020/02/16/08/59/fossil-4852930_640.jpg"
      />
      <ProductCard
        id="4"
        title="Produto 4"
        price={49.99}
        rating={5.0}
        tag="New"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      />
      <ProductCard
        id="5"
        title="Produto 5"
        price={24.99}
        rating={4.2}
        tag="New"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      />
      <ProductCard
        id="6"
        title="Produto 6"
        price={34.99}
        rating={3.8}
        tag="New"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  );
};
