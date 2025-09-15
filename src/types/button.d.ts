export interface Button {
  variant?: "solid" | "outline" | "ghost";
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}