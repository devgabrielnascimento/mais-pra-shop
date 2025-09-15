import styles from "./ProductCard.module.css";
import type { ProductCard as ProductCardType } from "../../../../types/productcard";
import { useTheme } from "../../../../hooks/useTheme";
import { useProductCardLoading } from "../../../../hooks/useProductCardLoading";
import { Skeleton } from "../Skeleton/Skeleton";
import { Button } from "../Button/Button";
import NewIcon from "../../../../assets/new-icon.svg";
export function ProductCard({
  id,
  title,
  price,
  rating,
  tag,
  image,
}: ProductCardType) {
  const { isLoading } = useProductCardLoading();

  const { theme } = useTheme();
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      {isLoading ? (
        <div className={styles.skeletonTagAndId}>
          <Skeleton width="40px" height="40px" alignSelf="flex-start" />
          <Skeleton width="120px" alignSelf="flex-end" height="40px" />
        </div>
      ) : (
        <div className={styles.containerTagAndId}>
          <div
            className={`${styles.containerId} ${
              theme === "dark" ? styles.containerIdDark : ""
            }`}
          >
            {id}
          </div>
          <div
            className={`${styles.tag} ${
              theme === "dark" ? styles.darkTag : ""
            }`}
          >
            <img src={NewIcon} alt="new" /> {tag}
          </div>
        </div>
      )}

      {isLoading ? (
        <Skeleton width="100%" aspectRatio="1/1" />
      ) : (
        <img src={image} alt={title} className={styles.image} loading="lazy" />
      )}

      {isLoading ? (
        <Skeleton width="100%" height="32px" />
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}

      {isLoading ? (
        <Skeleton width="97.42px" height="24px" alignSelf="flex-start" />
      ) : (
        <p className={styles.price}>R$ {price}</p>
      )}

      {isLoading ? (
        <Skeleton width="120px" height="24px" alignSelf="flex-start" />
      ) : (
        <p className={styles.rating}>⭐ {rating}</p>
      )}

      {isLoading ? (
        <Skeleton width="100%" height="40px" />
      ) : (
        <Button variant="solid">Comprar</Button>
      )}
    </div>
  );
}
