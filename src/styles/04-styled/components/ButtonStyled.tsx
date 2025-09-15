import styled from "styled-components";
import { css } from "styled-components";
import type { Button as ButtonType } from "../../../types/button";


const BtnStyled = styled.button<{
  variant?: ButtonType["variant"];
  disabled?: boolean;
}>`
  font-family: ${(theme) => theme.theme.fonts.body};
  font-weight: 600;
  border-radius: ${(theme) => theme.theme.radius};
  padding: 10px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: none;

  /* Variantes */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background-color: ${(theme) => theme.theme.colors.primary};
      color: var(--btn-color);
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      border: 2px solid var(--btn-bg-outline);
      color: var(--btn-bg-outline);
      &:hover {
        background-color: var(--btn-bg-outline-hover);
        color: var(--btn-color);
      }
    `}

  ${({ variant }) =>
    variant === "ghost" &&
    css`
      background-color: var(--btn-bg-ghost);
      color: var(--btn-bg-outline);
      &:hover {
        background-color: var(--btn-bg-ghost-hover);
      }
    `}

  /* Estado desabilitado */
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export function ButtonStyled({
  children,
  variant = "solid",
  disabled = false,
}: ButtonType) {
  return (
    <BtnStyled variant={variant} disabled={disabled}>
      {children}
    </BtnStyled>
  );
}