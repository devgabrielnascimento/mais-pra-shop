import { useState } from "react";

export type DropdownItem = {
  label: string;
  onClick?: () => void;
  to?: string;
};

export const useDropdown = (items: DropdownItem[]) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item: DropdownItem) => {
    if (item.onClick) item.onClick();
    setOpen(false); 
  };

  return {
    open,
    setOpen,
    handleClick,
    items,
  };
};
