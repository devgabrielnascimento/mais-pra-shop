import styles from "./Skeleton.module.css";
import { useTheme } from "../../../../hooks/useTheme";
import type { Skeleton as SkeletonType } from "../../../../types/skeleton";
export const Skeleton = ({
  width,
  height,
  radius,
  padding,
  alignSelf,
  aspectRatio,
}: SkeletonType) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.skeleton} ${styles[theme]}`}
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
