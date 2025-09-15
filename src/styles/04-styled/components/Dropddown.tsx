import { Link } from "react-router-dom";
import { useDropdown, type DropdownItem } from "../../../hooks/useDropdown";
import styled from "styled-components";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { useProductCardLoading } from "../../../hooks/useProductCardLoading";
import { Skeleton } from "./Skeleton";
import { useTheme } from "../../../hooks/useTheme";
type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center; // centraliza verticalmente
  justify-content: center; // centraliza horizontalmente
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }

  transition: background-color 200ms ease;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  margin-top: 0.25rem;
  width: 12rem;
  background-color: white;
  color: black;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
`;

const DropdownItemButton = styled.button`
  width: 100%;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const DropdownItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const Dropdown = ({ items }: DropdownProps) => {
  const { open, setOpen, handleClick } = useDropdown(items);
  const { isLoading } = useProductCardLoading();
  const { theme: styledTheme } = useTheme();
  return (
    <DropdownWrapper>
      {isLoading ? (
        <Skeleton skeleton={{ width: "35px", height: "35px", radius: "8px" }} />
      ) : (
        <DropdownButton onClick={() => setOpen(!open)}>
          {styledTheme === "light" ? (
            <SwitchLeftIcon sx={{ color: "#ffffff" }} />
          ) : (
            <SwitchLeftIcon sx={{ color: "black" }} />
          )}
        </DropdownButton>
      )}
      {open && (
        <DropdownMenu>
          {items.map((item, index) => (
            <li key={index}>
              {item.to ? (
                <DropdownItemLink
                  to={item.to}
                  onClick={() => handleClick(item)}
                >
                  {item.label}
                </DropdownItemLink>
              ) : (
                <DropdownItemButton onClick={() => handleClick(item)}>
                  {item.label}
                </DropdownItemButton>
              )}
            </li>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
