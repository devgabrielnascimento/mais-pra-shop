import { ProductCard } from "../components/ProductCard";

export function ProductsContainer() {
  return (
    <div className="container">
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
        title="Relógio Preto Clássico
Design minimalista e elegante para o dia a dia e também para o trabalho"
        price={19.99}
        rating={3.5}
        tag="New"
        image="https://cdn.pixabay.com/photo/2020/02/16/08/59/fossil-4852930_640.jpg"
      />
      <ProductCard
        id="4"
        title="Colete em tecido leve  
Versátil e ideal para composições casuais
e para o trabalho"
        price={49.99}
        rating={5.0}
        tag="New"
        image="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg"
      />
      <ProductCard
        id="5"
        title="Jeans em diferentes lavagens  
Conforto e estilo para qualquer ocasião de vida modelo casual e elegante"
        price={24.99}
        rating={4.2}
        tag="New"
        image="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
      />
      <ProductCard
        id="6"
        title="Suéter em malha tricotada  
Conforto e estilo para dias frios modelo único e elegante"
        price={34.99}
        rating={3.8}
        tag="New"
        image="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
      />
    </div>
  );
}
