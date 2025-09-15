import type { Button as ButtonProps } from "../../../types/button";

export const Button = ({ disabled = true, children }: ButtonProps) => {
;
  return (
    <button className="button solid" disabled={disabled}>
      {children}
    </button>
  );
};
