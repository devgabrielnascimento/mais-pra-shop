import styles from "./Button.module.css";
import type { Button as ButtonProps } from "../../../../types/button";
import { useTheme } from "../../../../hooks/useTheme";
export const Button = ({ disabled = true, children }: ButtonProps) => {
  const { theme } = useTheme();
  const classNames = `${styles.button}   ${disabled ? styles.disabled : ""} ${
    styles[theme]
  }`;

  return (
    <button className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};
