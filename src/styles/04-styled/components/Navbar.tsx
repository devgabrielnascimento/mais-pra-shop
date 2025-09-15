import styled from "styled-components";
import { Skeleton } from "../components/Skeleton";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import { Dropdown } from "./Dropddown";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { LogoMaisPraShopDark } from "../../../assets/LogoMaisPraShopDark";
import { LogoMaisPraShopLight } from "../../../assets/LogoMaisPraShopLight";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;

  width: 100%;
  z-index: 1000;
  align-items: center;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  height: 60px;
  background-color: white;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.third};
`;

const TechLabel = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 40px;
  color: white;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 0 20px;
  text-align: center;
  justify-content: center;

  transition: background-color 200ms ease-in-out;
`;

const ToggleButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const ShopCartButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
`;
const ToggleAndShopCart = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 8px;
`;

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { isLoading } = useProductCardLoading();

  return (
    <HeaderWrapper>
      <NavbarWrapper>
        <LogoContainer>
          {theme === "light" ? (
            <LogoMaisPraShopLight />
          ) : (
            <LogoMaisPraShopDark />
          )}
        </LogoContainer>

        <ToggleAndShopCart>
          {isLoading ? (
            <Skeleton
              skeleton={{ width: "35px", height: "35px", radius: "8px" }}
            />
          ) : (
            <ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? (
                <BedtimeIcon sx={{ color: "#ffffff" }} />
              ) : (
                <SunnyIcon sx={{ color: "#000000" }} />
              )}
            </ToggleButton>
          )}
          {isLoading ? (
            <Skeleton
              skeleton={{ width: "35px", height: "35px", radius: "8px" }}
            >
              <Skeleton
                skeleton={{ width: "20px", height: "20px", radius: "8px" }}
              />
            </Skeleton>
          ) : (
            <ShopCartButton>
              <Badge badgeContent={6} color="primary">
                {theme === "light" ? (
                  <ShoppingCartIcon sx={{ color: "#ffffff" }} />
                ) : (
                  <ShoppingCartIcon sx={{ color: "black" }} />
                )}
              </Badge>
            </ShopCartButton>
          )}

          <Dropdown
            label=""
            items={[
              { label: "Tailwind", to: "/" },
              { label: "Styled", to: "/styled" },
              { label: "CSS Modules", to: "/modules" },
              { label: "CSS Global", to: "/global" },
            ]}
          />
        </ToggleAndShopCart>
      </NavbarWrapper>

      <TechLabel>
        <p>Página feita com Styled Components</p>
      </TechLabel>
    </HeaderWrapper>
  );
}
