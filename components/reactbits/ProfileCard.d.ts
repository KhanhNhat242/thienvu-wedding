// Khai báo kiểu cho ProfileCard.jsx (React Bits, biến thể JS-CSS — đã bỏ @hugeicons, thêm contactIcon)
import type { FC, ReactNode } from "react";

export interface ProfileCardProps {
  avatarUrl?: string;
  iconUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  statusColor?: string;
  contactText?: string;
  contactIcon?: ReactNode;
  showUserInfo?: boolean;
  onContactClick?: () => void;
  theme?: "dark" | "light";
  backdropColor?: string;
  radius?: number;
  holo?: number;
  glare?: number;
  enableTilt?: boolean;
  tiltStrength?: number;
  parallax?: number;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  intro?: boolean;
  className?: string;
}

declare const ProfileCard: FC<ProfileCardProps>;
export default ProfileCard;
