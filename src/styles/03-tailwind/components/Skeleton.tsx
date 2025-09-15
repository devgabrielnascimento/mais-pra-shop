import "../tailwindstyles.css";
import type { Skeleton as SkeletonType } from "../../../types/skeleton";

export const Skeleton = ({
  width = "100%",
  height = "16px",
  aspectRatio = "1/1",
  alignSelf = "center",
  radius = "8px",
}: SkeletonType) => {
  return (
    <div
      className="block rounded  animate-shine"
      style={{ width, height, aspectRatio, alignSelf, borderRadius: radius }}
    />
  );
};
