import styles from "./Navbar.module.css";

import { useTheme } from "../../../../hooks/useTheme";
import { Dropdown } from "../Dropdown/Dropdown";
import { LogoMaisPraShopLight } from "../../../../assets/LogoMaisPraShopLight";
import { LogoMaisPraShopDark } from "../../../../assets/LogoMaisPraShopDark";
import { useProductCardLoading } from "../../../../hooks/useProductCardLoading";
import { Skeleton } from "../Skeleton/Skeleton";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
export function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const { isLoading } = useProductCardLoading();
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${styles[theme]}`}>
        
          <div className={styles.logo}>
            {theme === "light" ? (
              <LogoMaisPraShopLight />
            ) : (
              <LogoMaisPraShopDark />
            )}
          </div>
        

        <div className={styles.toggleTheme}>
          {isLoading ? (
            <Skeleton width="35px" height="35px" />
          ) : (
            <button
              onClick={toggleTheme}
              className={`${styles.btn} ${
                theme === "dark" ? styles.btnDark : ""
              }`}
            >
              {theme === "light" ? (
                <BedtimeIcon sx={{ color: "#ffffff" }} />
              ) : (
                <SunnyIcon sx={{ color: "#000000" }} />
              )}
            </button>
          )}
          {isLoading ? (
            <Skeleton width="35px" height="35px" />
          ) : (
            <button
              className={`${styles.btn} ${
                theme === "dark" ? styles.btnDark : ""
              }`}
            >
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
            items={[
              { label: "Tailwind", to: "/" },
              { label: "Styled", to: "/styled" },
              { label: "CSS Modules", to: "/modules" },
              { label: "CSS Global", to: "/global" },
            ]}
            className={styles.dropdown}
            label=""
          />
        </div>
      </nav>
      <div
        className={`${styles.techLabel} ${
          theme === "dark" ? styles.techLabelDark : ""
        }`}
      >
        Página feita com CSS Modules 
      </div>
    </header>
  );
}
