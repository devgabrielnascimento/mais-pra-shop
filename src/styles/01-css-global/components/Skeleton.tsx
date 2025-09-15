import type { Skeleton as SkeletonType } from "../../../types/skeleton";
export const Skeleton = ({
  width,
  height,
  radius,
  padding,
  alignSelf,
  aspectRatio,
}: SkeletonType) => {

  return (
    <div
      className="skeleton"
      style={{
        width: width || "100%",
        borderRadius: radius || "8px",
        padding: padding || "0",
        height: height,
        aspectRatio: aspectRatio,
        alignSelf: alignSelf || "auto",
      }}
    />
  );
};
