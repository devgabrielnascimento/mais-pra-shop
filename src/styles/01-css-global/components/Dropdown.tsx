import { useDropdown, type DropdownItem } from "../../../hooks/useDropdown";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { Skeleton } from "../components/Skeleton";
import { Link } from "react-router-dom";

type DropdownProps = {
  items: DropdownItem[];
};

export const Dropdown = ({ items }: DropdownProps) => {
  const { open, setOpen, handleClick } = useDropdown(items);
  const { isLoading } = useProductCardLoading();

  return (
    <div
      className="dropdownContainer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {isLoading ? (
        <Skeleton width="35px" height="35px" radius="8px" />
      ) : (
        <button className="btn" onClick={() => setOpen((prev) => !prev)}>
          <SwitchLeftIcon />
        </button>
      )}

      {open && (
        <ul className="menu">
          {items.map((item, index) => (
            <li key={index}>
              {item.to ? (
                <Link
                  to={item.to}
                  className="menuItemLink"
                  onClick={() => handleClick(item)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="menuItemButton"
                  onClick={() => handleClick(item)}
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
