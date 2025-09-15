import { useTheme } from "../../../hooks/useTheme";
import { Dropdown } from "../components/Dropdown";
import { LogoMaisPraShopLight } from "../../../assets/LogoMaisPraShopLight";
import { LogoMaisPraShopDark } from "../../../assets/LogoMaisPraShopDark";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export function Navbar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          {theme === "light" ? (
            <LogoMaisPraShopLight />
          ) : (
            <LogoMaisPraShopDark />
          )}
        </div>

        <div className="toggleTheme">
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? <BedtimeIcon /> : <SunnyIcon />}
          </button>

          <button className="btn">
            <Badge badgeContent={6} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </button>

          <Dropdown
            items={[
              { label: "Tailwind", to: "/" },
              { label: "Styled", to: "/styled" },
              { label: "CSS Modules", to: "/modules" },
              { label: "CSS Global", to: "/global" },
            ]}
          />
        </div>
      </nav>

      <div className="techLabel">Página feita com CSS Globals</div>
    </header>
  );
}
