import { Link } from "react-router-dom";
import { useDropdown, type DropdownItem } from "../../../hooks/useDropdown";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import { useTheme } from "../../../hooks/useTheme";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { Skeleton } from "./Skeleton";
type DropdownProps = {
  label: string;
  items: DropdownItem[];
  className?: string; 
};

export const Dropdown = ({ items, className }: DropdownProps) => {
  const { open, setOpen, handleClick } = useDropdown(items);
const { isLoading } = useProductCardLoading();
const {theme } = useTheme();
  return (
    <div
      className={`relative ${className || ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {isLoading ? (
        <Skeleton width="35px" height="35px" radius="8px" />
      ) : (
        <button
          className="w-[35px] h-[35px] rounded-[8px] transition duration-200 ease-in-out
               bg-[var(--secondary)] text-white cursor-pointer hover:bg-[var(--btn-hover)]"
        >
          {theme === "light" ? (
            <SwitchLeftIcon sx={{ color: "#ffffff" }} />
          ) : (
            <SwitchLeftIcon sx={{ color: "black" }} />
          )}
        </button>
      )}

      {open && (
        <ul className="absolute right-0  w-48 bg-white text-black shadow-lg rounded">
          {items.map((item, index) => (
            <li key={index}>
              {item.to ? (
                <Link
                  to={item.to}
                  onClick={() => handleClick(item)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
