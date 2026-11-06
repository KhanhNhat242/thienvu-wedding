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

/* Icon nét mảnh cho phần Giới thiệu (U1–U3) */
export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const IconDress = (p: P) => (
  <svg {...base(p)}>
    <path d="M9.5 2.5 10 6.5 8.5 9.5l1.2 1.3L5 21h14l-4.7-10.2 1.2-1.3L14 6.5l.5-4" />
    <path d="M10 6.5c.6.5 1.3.8 2 .8s1.4-.3 2-.8M8.5 9.5h7" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="m9.2 14.6 1.9 1.9 3.8-3.8" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  </svg>
);
