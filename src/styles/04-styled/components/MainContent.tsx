import styled from "styled-components";
import { ProductsContainer } from "./ProductsContainer";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 5px;
  background-color: theme.colors.body;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding-top: 100px;
`;

export function MainContent() {
  return (
    <MainWrapper>
      <Main>
        <ProductsContainer />
      </Main>
    </MainWrapper>
  );
}
