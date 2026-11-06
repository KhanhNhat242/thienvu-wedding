import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** Icon nét mảnh (stroke 1.3) — đồng bộ phong cách tối giản */
const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6V17a2 2 0 0 1-2 2A14.9 14.9 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.2 4.2L19 7" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconChevron = ({ dir = "right", ...p }: P & { dir?: "left" | "right" }) => (
  <svg {...base(p)}>
    {dir === "right" ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const IconFacebook = (p: P) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
  </svg>
);

export const IconMessenger = (p: P) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M12 2.8c-5.1 0-9.2 3.8-9.2 8.6 0 2.7 1.3 5.1 3.4 6.7V21l3.1-1.7c.9.2 1.8.4 2.7.4 5.1 0 9.2-3.8 9.2-8.6S17.1 2.8 12 2.8Zm1 11.5-2.3-2.5-4.6 2.5 5-5.4 2.4 2.5 4.5-2.5-5 5.4Z" />
  </svg>
);

export const IconZalo = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...p}>
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontSize="9"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
      fill="currentColor"
    >
      Zalo
    </text>
  </svg>
);
