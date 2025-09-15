import { Link } from "react-router-dom";
import { useDropdown, type DropdownItem } from "../../../../hooks/useDropdown";
import { useProductCardLoading } from "../../../../hooks/useProductCardLoading";
import { useTheme } from "../../../../hooks/useTheme";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  className?: string;
};

export const Dropdown = ({ items, className }: DropdownProps) => {
  const { open, setOpen, handleClick } = useDropdown(items);
  const { isLoading } = useProductCardLoading();
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.dropdownContainer} ${className || ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {isLoading ? (
        <Skeleton width="35px" height="35px" radius="8px" />
      ) : (
        <button
          className={`${styles.btn} ${theme === "dark" ? styles.btnDark : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <SwitchLeftIcon
            className={theme === "light" ? styles.iconLight : styles.iconDark}
          />
        </button>
      )}

      {open && (
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li key={index}>
              {item.to ? (
                <Link
                  to={item.to}
                  onClick={() => handleClick(item)}
                  className={styles.menuItemLink}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item)}
                  className={styles.menuItemButton}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
