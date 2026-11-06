"use client";

import { useEffect } from "react";

/** Thêm .is-revealed cho phần tử [data-reveal] khi cuộn tới (hiện 1 lần). */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((el) => io.observe(el));
    };
    observeAll();

    // Theo dõi phần tử mới (vd. đổi bộ lọc album)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
