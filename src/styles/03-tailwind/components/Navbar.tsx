import { useTheme } from "../../../hooks/useTheme";
import { Dropdown } from "../components/Dropdown";
import { LogoMaisPraShopLight } from "../../../assets/LogoMaisPraShopLight";
import { LogoMaisPraShopDark } from "../../../assets/LogoMaisPraShopDark";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Skeleton } from "../components/Skeleton";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const { isLoading } = useProductCardLoading();
  return (
    <header className="flex fixed top-0 left-0 right-0 z-10 flex-col w-full  justify-center items-center bg-[var(--background)]">
      <nav className="flex w-full max-w-[1200px] justify-between h-[60px] items-center py-0 px-5  transition-colors duration-200 ease-in-out">
        {theme === "light" ? <LogoMaisPraShopLight /> : <LogoMaisPraShopDark />}
        <div className="flex gap-2">
          {isLoading ? (
            <Skeleton width="35px" height="35px" radius="8px" />
          ) : (
            <button
              onClick={toggleTheme}
              className="rounded-[8px] w-[35px] h-[35px] bg-[var(--secondary)] transition duration-200 ease-in-out  cursor-pointer hover:bg-gray-600"
            >
              {theme === "light" ? (
                <BedtimeIcon sx={{ color: "#ffffff" }} />
              ) : (
                <SunnyIcon sx={{ color: "#000000" }} />
              )}
            </button>
          )}

          {isLoading ? (
            <Skeleton width="35px" height="35px" radius="8px" />
          ) : (
            <button className="rounded-[8px] w-[35px] h-[35px] bg-[var(--secondary)] transition duration-200 ease-in-out  cursor-pointer  hover:bg-gray-600">
              <Badge badgeContent={6} color="primary">
                {theme === "light" ? (
                  <ShoppingCartIcon sx={{ color: "#ffffff" }} />
                ) : (
                  <ShoppingCartIcon sx={{ color: "black" }} />
                )}
              </Badge>
            </button>
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
        </div>
      </nav>
      <div className="flex w-full max-w-[1200px] h-10 text-white gap-2 bg-[var(--btn-bg)] items-center px-5 justify-center">
        <p>Página feita com Tailwind</p>
      </div>
    </header>
  );
};
