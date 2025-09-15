import styles from "./MainContent.module.css";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import { useTheme } from "../../../../hooks/useTheme";
export function MainContent() {
  const { theme } = useTheme();
  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={styles.container}>
        <ProductsContainer />
      </div>
    </main>
  );
}
