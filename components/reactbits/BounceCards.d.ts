// Khai báo kiểu cho BounceCards.jsx (React Bits, biến thể JS-CSS)
import type { CSSProperties, FC } from "react";

export type BounceCardImage = string | { src: string; alt?: string };

export interface BounceCardsProps {
  images?: BounceCardImage[];
  className?: string;
  style?: CSSProperties;
  containerWidth?: number | string;
  containerHeight?: number | string;
  cardSize?: number;
  spread?: number;
  rotation?: number;
  arc?: number;
  animationDelay?: number;
  animationStagger?: number;
  bounciness?: number;
  enableHover?: boolean;
  pushDistance?: number;
  hoverScale?: number;
  borderWidth?: number;
  borderColor?: string;
  radius?: number;
  shadow?: boolean;
  transformStyles?: string[];
  onCardClick?: (index: number) => void;
}

declare const BounceCards: FC<BounceCardsProps>;
export default BounceCards;
