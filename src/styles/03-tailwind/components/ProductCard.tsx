import type { ProductCard as ProductCardType } from "../../../types/productcard";
import { Skeleton } from "./Skeleton";
import { Button } from "./Button";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import NewIcon from "../../../assets/new-icon.svg";
import Rating from "@mui/material/Rating";
import { useTheme } from "../../../hooks/useTheme";
export const ProductCard = ({
  id,
  title,
  price,
  rating,
  tag,
  image,
}: ProductCardType) => {
  const { isLoading } = useProductCardLoading();
  const { theme } = useTheme();
  return (
    <div
      className={`
        
    flex flex-col w-full max-w-[420px] min-h-[320px] 
   
    p-2 rounded-[8px] 
    border-[1px] border-[var(--color-border)]
    gap-3
   
    opacity-80
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:opacity-100
    relative
    text-left
    ${isLoading ? "pointer-events-none opacity-70" : ""}
  `}
    >
      <div className="flex w-full justify-between">
        {isLoading ? (
          <Skeleton width="40px" height="40px" />
        ) : (
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-[var(--btn-bg)] font-bold rounded-[8px] text-white">
            {id}
          </div>
        )}

        {isLoading ? (
          <Skeleton width="120px" alignSelf="flex-end" height="40px" />
        ) : (
          <div
            className=" border-white rounded-[8px] overflow-hidden bg-[var(--btn-bg)] 
        w-[120px] h-[40px] justify-center items-center  gap-2 p-[4px] flex self-end"
          >
            <img
              src={NewIcon}
              alt="New Icon"
              className="w-[24px] h-[24px] object-contain"
            />
            <p className="text-sm  font-bold text-white">{tag}</p>
          </div>
        )}
      </div>
      {isLoading ? (
        <Skeleton width="100%" aspectRatio="1/1" height="100%" />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full rounded-[8px] object-cover  aspect-square"
          loading="lazy"
        />
      )}
      {isLoading ? (
        <Skeleton width="100%" height="32px" />
      ) : (
        <h2 className="text-sm leading-[16px] font-medium text-[var(--color-text)]   line-clamp-2 self-start overflow-hidden text-ellipsis h-[32px]">
          {title}
        </h2>
      )}

      {isLoading ? (
        <Skeleton width="97.42px" height="24px" alignSelf="flex-start" />
      ) : (
        <p className="text-2xl leading-[24px] text-[var(--color-text)] font-bold  self-start ">
          R$ {price}
        </p>
      )}

      {isLoading ? (
        <Skeleton width="120px" height="24px" alignSelf="flex-start" />
      ) : (
        <div
          className="flex flex-col self-start
  w-auto"
        >
          {theme === "light" ? (
            <Rating
              name="simple-controlled"
              value={rating}
              readOnly
              sx={{
                color: "#CC340E",
                "& .MuiRating-iconEmpty": {
                  color: "#CC340E", 
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
        <Button variant="solid">Comprar</Button>
      )}
    </div>
  );
};
