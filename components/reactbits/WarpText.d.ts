// Khai báo kiểu cho WarpText.jsx (React Bits, biến thể JS-CSS)
import type { CSSProperties, FC } from "react";

export interface WarpTextProps {
  text?: string;
  color?: string;
  warpStrength?: number;
  warpScale?: number;
  speed?: number;
  pointerInfluence?: number;
  pointerStrength?: number;
  refraction?: number;
  chromatic?: number;
  ripple?: boolean;
  clickRipple?: boolean;
  idleDrift?: number;
  lens?: "bulge" | "pinch" | "swirl";
  intro?: boolean;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  className?: string;
  style?: CSSProperties;
}

declare const WarpText: FC<WarpTextProps>;
export default WarpText;
