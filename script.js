// Tailwind CSS カスタムテーマ構成設定
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-tertiary": "#ffffff",
        "accent-gold": "#C5A059",
        "tertiary-fixed": "#e0e3e5",
        "primary-fixed-dim": "#ffb4aa",
        "background-main": "#FFFFFF",
        "on-secondary-fixed-variant": "#374765",
        "on-secondary-container": "#4f5f7f",
        "outline": "#946e69",
        "surface-dark": "#333333",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#cadaff",
        "inverse-surface": "#303031",
        "error-container": "#ffdad6",
        "on-primary-fixed-variant": "#930007",
        "on-background": "#1b1c1c",
        "on-tertiary-fixed": "#181c1e",
        "surface-bright": "#fbf9f9",
        "surface-variant": "#e4e2e2",
        "secondary": "#4e5f7e",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#5f3f3b",
        "status-error": "#FF4D4F",
        "surface-dim": "#dbdad9",
        "surface-container-low": "#f5f3f3",
        "on-tertiary-container": "#f6f9fb",
        "secondary-fixed-dim": "#b6c7eb",
        "surface-container-high": "#e9e8e7",
        "surface-container-highest": "#e4e2e2",
        "secondary-fixed": "#d7e2ff",
        "tertiary": "#565b5c",
        "inverse-on-surface": "#f2f0f0",
        "on-tertiary-fixed-variant": "#434749",
        "on-primary-fixed": "#410001",
        "primary": "#b7000c",
        "outline-variant": "#e9bcb6",
        "tertiary-fixed-dim": "#c4c7c9",
        "surface-tint": "#c0000d",
        "tertiary-container": "#6f7375",
        "on-primary-container": "#fff7f6",
        "on-primary": "#ffffff",
        "inverse-primary": "#ffb4aa",
        "surface": "#fbf9f9",
        "on-secondary-fixed": "#081b38",
        "on-error": "#ffffff",
        "on-surface": "#1b1c1c",
        "on-error-container": "#93000a",
        "background": "#fbf9f9",
        "surface-container": "#efeded",
        "error": "#ba1a1a",
        "primary-fixed": "#ffdad5",
        "primary-container": "#e60012"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px",
        "container-max-width": "1100px",
        "margin-mobile": "20px",
        "gutter": "24px"
      },
      "fontFamily": {
        "label-sm": ["Inter"],
        "headline-xl": ["Noto Sans JP"],
        "headline-xl-mobile": ["Noto Sans JP"],
        "numeral-display": ["Inter"],
        "body-lg": ["Noto Sans JP"],
        "headline-md": ["Noto Sans JP"],
        "display-lg": ["Noto Sans JP"],
        "body-md": ["Noto Sans JP"]
      },
      "fontSize": {
        "label-sm": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "headline-xl": ["32px", { "lineHeight": "1.4", "letterSpacing": "0.01em", "fontWeight": "700" }],
        "headline-xl-mobile": ["24px", { "lineHeight": "1.4", "fontWeight": "700" }],
        "numeral-display": ["40px", { "lineHeight": "1", "letterSpacing": "0", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.8", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "1.5", "fontWeight": "700" }],
        "display-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.7", "fontWeight": "400" }]
      }
    }
  }
};

// 解説者カルーセルの制御ロジック
(() => {
  const carousel = document.querySelector(".speaker-carousel");
  const slides = [...document.querySelectorAll(".speaker-slide")];
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");

  if (!carousel || !slides.length || !prev || !next) return;

  const currentIndex = () => {
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    return slides.reduce((closest, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(center - slideCenter);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: 0, distance: Infinity }).index;
  };

  const goTo = (index) => {
    const target = slides[(index + slides.length) % slides.length];
    carousel.scrollTo({ left: target.offsetLeft - carousel.offsetLeft, behavior: "smooth" });
  };

  prev.addEventListener("click", () => goTo(currentIndex() - 1));
  next.addEventListener("click", () => goTo(currentIndex() + 1));
})();
