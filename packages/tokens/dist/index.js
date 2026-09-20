// src/elevation.ts
var elevationTokens = {
  focus: [
    {
      type: "drop-shadow",
      color: "rgba(16, 185, 129, 0.08)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 3
    },
    { type: "inner-shadow", color: "#b5e9d8", offsetX: 0, offsetY: 0, blur: 0, spread: 1 }
  ],
  focusError: [
    {
      type: "drop-shadow",
      color: "rgba(248, 109, 109, 0.51)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 3
    },
    { type: "inner-shadow", color: "#dc2626", offsetX: 0, offsetY: 0, blur: 0, spread: 1 }
  ],
  depth4: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.13)",
      offsetX: 0,
      offsetY: 1.6,
      blur: 3.6,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 0.3,
      blur: 0.9,
      spread: 0
    }
  ],
  depth8: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.13)",
      offsetX: 0,
      offsetY: 3.2,
      blur: 7.2,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 0.6,
      blur: 1.8,
      spread: 0
    }
  ],
  depth16: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.13)",
      offsetX: 0,
      offsetY: 6.4,
      blur: 14.4,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 1.2,
      blur: 3.6,
      spread: 0
    }
  ],
  depth64: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.22)",
      offsetX: 0,
      offsetY: 25.6,
      blur: 57.6,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.18)",
      offsetX: 0,
      offsetY: 4.8,
      blur: 14.4,
      spread: 0
    }
  ],
  menu: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 2,
      blur: 4,
      spread: -2
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 4,
      blur: 6,
      spread: -1
    }
  ],
  light4: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.40)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.16)",
      offsetX: 0,
      offsetY: 6,
      blur: 6,
      spread: -6
    }
  ],
  light8: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.40)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.16)",
      offsetX: 0,
      offsetY: 12,
      blur: 12,
      spread: -6
    }
  ],
  light16: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.40)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.16)",
      offsetX: 0,
      offsetY: 8,
      blur: 24,
      spread: -6
    }
  ],
  light32: [
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.20)",
      offsetX: 0,
      offsetY: 0,
      blur: 1,
      spread: 0
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.12)",
      offsetX: 0,
      offsetY: 0,
      blur: 32,
      spread: -8
    },
    {
      type: "drop-shadow",
      color: "rgba(0, 0, 0, 0.08)",
      offsetX: 0,
      offsetY: 32,
      blur: 32,
      spread: -8
    }
  ]
};

// src/grids.ts
var gridTokens = {
  desktop: [{ columns: 12, gutter: 24, offset: 80, alignment: "stretch" }],
  tablet: [{ columns: 8, gutter: 16, offset: 32, alignment: "stretch" }],
  mobile: [{ columns: 4, gutter: 16, offset: 16, alignment: "stretch" }],
  expandedSidebar: [
    { columns: 12, columnWidth: 70, gutter: 24, offset: 32, alignment: "right" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 272, alignment: "left" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: "right" }
  ],
  collapsedSidebar: [
    { columns: 12, columnWidth: 86, gutter: 24, offset: 32, alignment: "right" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 80, alignment: "left" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: "right" }
  ],
  collapsedWithSubmenu: [
    { columns: 12, columnWidth: 64, gutter: 24, offset: 32, alignment: "right" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 344, alignment: "left" },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: "right" }
  ],
  topNav: [
    { columns: 12, columnWidth: 80, gutter: 24, alignment: "center" },
    { columns: 1, columnWidth: 108, gutter: 0, offset: 0, alignment: "left" },
    { columns: 1, columnWidth: 108, gutter: 0, offset: 0, alignment: "right" }
  ],
  draftNewDesktop: [{ columns: 12, gutter: 24, offset: 42, alignment: "stretch" }],
  draftDashboard: [{ columns: 12, gutter: 24, offset: 68, alignment: "stretch" }]
};

// src/primitives.ts
var colorTokens = {
  "color.primary.50": "#e9ebf3",
  "color.primary.100": "#b9c2db",
  "color.primary.200": "#98a4c9",
  "color.primary.300": "#687bb1",
  "color.primary.400": "#4b61a1",
  "color.primary.500": "#1e3a8a",
  "color.primary.600": "#1b357e",
  "color.primary.700": "#152962",
  "color.primary.800": "#11204c",
  "color.primary.900": "#0d183a",
  "color.secondary.50": "#e7f8f2",
  "color.secondary.100": "#b5e9d8",
  "color.secondary.200": "#91dfc5",
  "color.secondary.300": "#5fd0ab",
  "color.secondary.400": "#40c79a",
  "color.secondary.500": "#10b981",
  "color.secondary.600": "#0fa875",
  "color.secondary.700": "#0b835c",
  "color.secondary.800": "#096647",
  "color.secondary.900": "#074e36",
  "color.neutral.text.primary": "#111827",
  "color.neutral.text.secondary": "#6b7280",
  "color.neutral.background.offWhite": "#f9fafb",
  "color.neutral.background.white": "#ffffff",
  "color.neutral.border": "#d1d5db",
  "color.neutral.gray": "#eceff3",
  "color.status.success": "#059669",
  "color.status.warning": "#f59e0b",
  "color.status.error": "#dc2626",
  "color.status.info": "#38bdf8"
};
var spacingTokens = {
  "spacing.4": 4,
  "spacing.8": 8,
  "spacing.12": 12,
  "spacing.16": 16,
  "spacing.24": 24,
  "spacing.32": 32,
  "spacing.40": 40,
  "spacing.48": 48,
  "spacing.64": 64
};
var measurementTokens = {
  "measurement.abstract.8": 8
};

// src/semantic.ts
var semanticTokens = {};

// src/themes.ts
var supportedThemes = ["light"];

// src/typography.ts
var typographyTokens = {
  display: {
    description: "Large KPIs and hero titles",
    fontFamily: "Poppins",
    fontStyle: "Bold",
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: "-1%"
  },
  h1: {
    description: "Page titles",
    fontFamily: "Poppins",
    fontStyle: "SemiBold",
    fontWeight: 600,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: "0.5%"
  },
  h2: {
    description: "Section headers",
    fontFamily: "Poppins",
    fontStyle: "SemiBold",
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: "0%"
  },
  h3: {
    description: "Module and card titles",
    fontFamily: "Poppins",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: "0%"
  },
  h4: {
    description: "Subtitles and supporting headers",
    fontFamily: "Poppins",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: "0%"
  },
  bodyLarge: {
    description: "Main body content",
    fontFamily: "Poppins",
    fontStyle: "Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: "0%"
  },
  bodyBase: {
    description: "Paragraphs and content blocks",
    fontFamily: "Poppins",
    fontStyle: "Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: "0%"
  },
  bodySmall: {
    description: "",
    fontFamily: "Poppins",
    fontStyle: "Light",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "normal",
    letterSpacing: "0%"
  },
  caption: {
    description: "Labels and captions",
    fontFamily: "Poppins",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: "0%"
  },
  button: {
    description: "Buttons",
    fontFamily: "Poppins",
    fontStyle: "Regular",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: "0%"
  },
  input: {
    description: "Form fields",
    fontFamily: "Inter",
    fontStyle: "Regular",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: "0%"
  }
};

export { colorTokens, elevationTokens, gridTokens, measurementTokens, semanticTokens, spacingTokens, supportedThemes, typographyTokens };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map