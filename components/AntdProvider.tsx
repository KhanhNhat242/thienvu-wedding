"use client";

import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import type { ReactNode } from "react";

dayjs.locale("vi");

const MOSS = "#5B6B4E";
/** Viền focus 3px (Conversion-Optimized) — vòng focus, không phải bóng đổ trang trí */
const FOCUS_RING = "0 0 0 3px rgba(91, 107, 78, 0.35)";

/** Theme antd khớp design tokens: bo 2px, ô nhập cao 48px, không bóng (R-STACK 3) */
export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          colorPrimary: MOSS,
          colorLink: MOSS,
          colorSuccess: MOSS,
          colorText: "#2B2A27",
          colorTextPlaceholder: "#8A8478",
          colorBorder: "#D9CFBE",
          colorBgContainer: "#FFFFFF",
          colorError: "#A8452F",
          borderRadius: 2,
          borderRadiusLG: 2,
          borderRadiusSM: 2,
          controlHeight: 48,
          controlOutlineWidth: 3,
          fontSize: 15,
          fontFamily: "var(--font-be-vietnam), system-ui, sans-serif",
          boxShadowSecondary: "0 0 0 1px #E3D9C8",
        },
        components: {
          Input: { activeShadow: FOCUS_RING, errorActiveShadow: "0 0 0 3px rgba(168, 69, 47, 0.25)" },
          Select: {
            activeOutlineColor: "rgba(91, 107, 78, 0.35)",
            optionSelectedBg: "#F7F1E8",
            optionActiveBg: "#FBF7F0",
          },
          DatePicker: {
            activeShadow: FOCUS_RING,
            errorActiveShadow: "0 0 0 3px rgba(168, 69, 47, 0.25)",
            cellActiveWithRangeBg: "#F7F1E8",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
