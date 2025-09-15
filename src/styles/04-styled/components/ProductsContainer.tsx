import styled from "styled-components";
import { ProductCard } from "./ProductCard";

export const Container = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  grid-template-columns: 1fr;
  color: ${({ theme }) => theme.colors.third};
  padding: 10px;
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.mobileSm}) and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.mobileLg}) and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export function ProductsContainer() {
  return (
    <Container>
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
    </Container>
  );
}
