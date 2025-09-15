import styled, { keyframes } from "styled-components";
import type { Skeleton as SkeletonType } from "../../../types/skeleton";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

export const Skeleton = styled.div<{ skeleton?: SkeletonType }>`
  width: ${({ skeleton }) => skeleton?.width || "100%"};
  height: ${({ skeleton }) =>
    skeleton?.height || (skeleton?.aspectRatio ? "auto" : "16px")};
  border-radius: ${({ skeleton }) => skeleton?.radius || "8px"};
  padding: ${({ skeleton }) => skeleton?.padding || "0"};
  background: ${({ theme }) => theme.colors.linearSkeleton};
  background-size: 200% 100%;
  animation: ${pulse} 1.2s ease-in-out infinite;
  aspect-ratio: ${({ skeleton }) => skeleton?.aspectRatio || "auto"};
  align-self: ${({ skeleton }) => skeleton?.alignSelf || "auto"};
  gap: 12px;
`;
