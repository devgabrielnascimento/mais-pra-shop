import styled from "styled-components";
import type { ProductCard as ProductCardType } from "../../../types/productcard";
import { ButtonStyled } from "./ButtonStyled";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import { Skeleton } from "../components/Skeleton";
import NewIcon from "../../../assets/new-icon.svg";
import Rating from "@mui/material/Rating";
import { useTheme } from "../../../hooks/useTheme";
const Card = styled.div<{ isLoading?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.third};
  justify-content: center;
  align-items: center;
  text-align: left;
  height: auto;
  max-width: 420px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  min-height: 320px;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* máximo 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: flex-start;

  height: 32px;
`;

const Price = styled.p`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.text};
`;

const RatingBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: auto;
`;

const ContainerTagAndId = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContainerId = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  color: white;
  font-weight: 700;
`;

const TagBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 40px;
  width: 120px;
  gap: 8px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  padding: 4px;
  transition: background-color 200ms ease-in-out;
`;
const Tag = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

const Image = styled.img.attrs({ loading: "lazy" })`
  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;
  border-radius: 8px;
`;

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
    <Card isLoading={isLoading}>
      {isLoading ? (
        <>
          <div className="flex w-full justify-between">
            <Skeleton
              skeleton={{
                width: "40px",
                height: "40px",
                radius: "8px",
                alignSelf: "flex-start",
              }}
            />
            <Skeleton
              skeleton={{
                width: "120px",
                height: "40px",
                radius: "8px",
                alignSelf: "flex-end",
              }}
            />
          </div>

          <Skeleton
            skeleton={{
              width: "100%",
              radius: "8px",
              aspectRatio: "1/1",
            }}
          />
          <Skeleton
            skeleton={{
              width: "100%",
              height: "32px",
              radius: "8px",
              alignSelf: "flex-start",
            }}
          />
          <Skeleton
            skeleton={{
              width: "97.42px",
              height: "24px",
              radius: "8px",
              alignSelf: "flex-start",
            }}
          />
          <Skeleton
            skeleton={{
              width: "120px",
              height: "24px",
              radius: "8px",
              alignSelf: "flex-start",
            }}
          />
          <Skeleton
            skeleton={{
              width: "100%",
              height: "40px",
              radius: "8px",
            }}
          />
        </>
      ) : (
        <>
          <ContainerTagAndId>
            <ContainerId>
              <h3>{id}</h3>
            </ContainerId>
            <TagBackground>
              <img
                src={NewIcon}
                alt="tag"
                style={{ width: "20px", height: "20px" }}
              />
              <Tag>{tag}</Tag>
            </TagBackground>
          </ContainerTagAndId>
          <Image src={image} alt={title} />
          <Title>{title}</Title>
          <Price>R$ {price}</Price>
          <RatingBackground>
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
            )
            }
          </RatingBackground>
          <ButtonStyled>Comprar</ButtonStyled>
        </>
      )}
    </Card>
  );
}
//#CC340E
