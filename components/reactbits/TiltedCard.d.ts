// Khai báo kiểu cho TiltedCard.jsx (React Bits, biến thể JS-CSS)
import type { CSSProperties, FC, MouseEvent, ReactNode } from "react";

export interface TiltedCardProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string | number;
  containerWidth?: string | number;
  imageHeight?: string | number;
  imageWidth?: string | number;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
  overlayDepth?: number;
  children?: ReactNode;
  backContent?: ReactNode;
  flipOnClick?: boolean;
  flipped?: boolean;
  onFlip?: (flipped: boolean) => void;
  radius?: string | number;
  perspective?: string | number;
  smoothness?: number;
  glare?: number;
  glareColor?: string;
  shadow?: number;
  parallax?: number;
  axis?: "both" | "horizontal" | "vertical";
  reverse?: boolean;
  trackWindow?: boolean;
  floating?: boolean;
  gyroscope?: boolean;
  intro?: boolean;
  introDelay?: number;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  style?: CSSProperties;
}

export interface TiltedCardLayerProps {
  depth?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const TiltedCardLayer: FC<TiltedCardLayerProps>;
declare const TiltedCard: FC<TiltedCardProps>;
export default TiltedCard;
