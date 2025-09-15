import type { ProductCard as ProductCardType } from "../../../types/productcard";
// import { useTheme } from "../../../hooks/useTheme";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import { Skeleton } from "../components/Skeleton";
import { Button } from "./Button";
// import { Button } from "../Button/Button";
import NewIcon from "../../../assets/new-icon.svg";
import Rating from "@mui/material/Rating";
import { useTheme } from "../../../hooks/useTheme";
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
    <div className="card">
      {isLoading ? (
        <div className="skeletonTagAndId">
          <Skeleton width="40px" height="40px" alignSelf="flex-start" />
          <Skeleton width="120px" alignSelf="flex-end" height="40px" />
        </div>
      ) : (
        <div className="containerTagAndId">
          <div className="containerId">{id}</div>
          <div className="tag">
            <img src={NewIcon} alt="new" loading="lazy" />
            {tag}
          </div>
        </div>
      )}

      {isLoading ? (
        <Skeleton width="100%" aspectRatio="1/1" height="auto" />
      ) : (
        <img src={image} alt={title} className="image" loading="lazy" />
      )}

      {isLoading ? (
        <Skeleton width="100%" height="32px" />
      ) : (
        <h2 className="title">{title}</h2>
      )}

      {isLoading ? (
        <Skeleton width="97.42px" height="24px" alignSelf="flex-start" />
      ) : (
        <p className="price">R$ {price}</p>
      )}

      {isLoading ? (
        <Skeleton width="120px" height="24px" alignSelf="flex-start" />
      ) : (
        <div className="rating">
          {theme === "light" ? (
            <Rating
              name="simple-controlled"
              value={rating}
              readOnly
              sx={{
                color: "#CC340E",
                "& .MuiRating-iconEmpty": {
                  color: "#CC340E", // cor das estrelas vazias
                },
              }}
            />
          ) : (
            <Rating
              name="simple-controlled"
              value={rating}
              readOnly
              sx={{
                color: "#FFFFFF",
                "& .MuiRating-iconEmpty": {
                  color: "#FFFFFF",
                },
              }}
            />
          )}
        </div>
      )}

      {isLoading ? (
        <Skeleton width="100%" height="40px" />
      ) : (
        <Button>Comprar</Button>
      )}
    </div>
  );
}
