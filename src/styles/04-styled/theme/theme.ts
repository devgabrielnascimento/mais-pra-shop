import { base } from "./base";

export const lightTheme = {
  ...base,
  colors: {
    primary: "#CC3A0E",
    primaryHover: "rgba(204, 58, 14, 0.6)",
    secondaryHover: "#4B6A78",
    secondary: "#CC3A0E",
    third: "#F2F2F2",
    border: "#CC3A0E",
    text: "#333333",
    body: "#f5f5f5",
    linearSkeleton:
      "linear-gradient(45deg, rgba(204, 58, 14, 0.6) 0%, #cc3a0e 50%, rgba(204, 58, 14, 0.6) 100%)",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
};

export const darkTheme = {
  ...base,
  colors: {
    primary: "#222222",
    primaryHover: "rgba(204, 58, 14, 0.6)",
    secondaryHover: "#4B6A78",
    secondary: "#ffffff",
    third: "#121212",
    border: "#fff3",
    text: "#f5f5f5",
    body: "#000000",
    linearSkeleton:
      "linear-gradient(45deg, #2a2a2a 0%, #3d3d3f 50%, #1c1c1c 100%)",
  },
};
