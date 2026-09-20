declare const elevationTokens: {
    readonly focus: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(16, 185, 129, 0.08)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 3;
    }, {
        readonly type: "inner-shadow";
        readonly color: "#b5e9d8";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 0;
        readonly spread: 1;
    }];
    readonly focusError: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(248, 109, 109, 0.51)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 3;
    }, {
        readonly type: "inner-shadow";
        readonly color: "#dc2626";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 0;
        readonly spread: 1;
    }];
    readonly depth4: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.13)";
        readonly offsetX: 0;
        readonly offsetY: 1.6;
        readonly blur: 3.6;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.10)";
        readonly offsetX: 0;
        readonly offsetY: 0.3;
        readonly blur: 0.9;
        readonly spread: 0;
    }];
    readonly depth8: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.13)";
        readonly offsetX: 0;
        readonly offsetY: 3.2;
        readonly blur: 7.2;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.10)";
        readonly offsetX: 0;
        readonly offsetY: 0.6;
        readonly blur: 1.8;
        readonly spread: 0;
    }];
    readonly depth16: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.13)";
        readonly offsetX: 0;
        readonly offsetY: 6.4;
        readonly blur: 14.4;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.10)";
        readonly offsetX: 0;
        readonly offsetY: 1.2;
        readonly blur: 3.6;
        readonly spread: 0;
    }];
    readonly depth64: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.22)";
        readonly offsetX: 0;
        readonly offsetY: 25.6;
        readonly blur: 57.6;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.18)";
        readonly offsetX: 0;
        readonly offsetY: 4.8;
        readonly blur: 14.4;
        readonly spread: 0;
    }];
    readonly menu: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.10)";
        readonly offsetX: 0;
        readonly offsetY: 2;
        readonly blur: 4;
        readonly spread: -2;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.10)";
        readonly offsetX: 0;
        readonly offsetY: 4;
        readonly blur: 6;
        readonly spread: -1;
    }];
    readonly light4: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.40)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.16)";
        readonly offsetX: 0;
        readonly offsetY: 6;
        readonly blur: 6;
        readonly spread: -6;
    }];
    readonly light8: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.40)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.16)";
        readonly offsetX: 0;
        readonly offsetY: 12;
        readonly blur: 12;
        readonly spread: -6;
    }];
    readonly light16: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.40)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.16)";
        readonly offsetX: 0;
        readonly offsetY: 8;
        readonly blur: 24;
        readonly spread: -6;
    }];
    readonly light32: readonly [{
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.20)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 1;
        readonly spread: 0;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.12)";
        readonly offsetX: 0;
        readonly offsetY: 0;
        readonly blur: 32;
        readonly spread: -8;
    }, {
        readonly type: "drop-shadow";
        readonly color: "rgba(0, 0, 0, 0.08)";
        readonly offsetX: 0;
        readonly offsetY: 32;
        readonly blur: 32;
        readonly spread: -8;
    }];
};
type ElevationTokenName = keyof typeof elevationTokens;

declare const gridTokens: {
    readonly desktop: readonly [{
        readonly columns: 12;
        readonly gutter: 24;
        readonly offset: 80;
        readonly alignment: "stretch";
    }];
    readonly tablet: readonly [{
        readonly columns: 8;
        readonly gutter: 16;
        readonly offset: 32;
        readonly alignment: "stretch";
    }];
    readonly mobile: readonly [{
        readonly columns: 4;
        readonly gutter: 16;
        readonly offset: 16;
        readonly alignment: "stretch";
    }];
    readonly expandedSidebar: readonly [{
        readonly columns: 12;
        readonly columnWidth: 70;
        readonly gutter: 24;
        readonly offset: 32;
        readonly alignment: "right";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 272;
        readonly alignment: "left";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 0;
        readonly alignment: "right";
    }];
    readonly collapsedSidebar: readonly [{
        readonly columns: 12;
        readonly columnWidth: 86;
        readonly gutter: 24;
        readonly offset: 32;
        readonly alignment: "right";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 80;
        readonly alignment: "left";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 0;
        readonly alignment: "right";
    }];
    readonly collapsedWithSubmenu: readonly [{
        readonly columns: 12;
        readonly columnWidth: 64;
        readonly gutter: 24;
        readonly offset: 32;
        readonly alignment: "right";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 344;
        readonly alignment: "left";
    }, {
        readonly columns: 1;
        readonly columnWidth: 32;
        readonly gutter: 0;
        readonly offset: 0;
        readonly alignment: "right";
    }];
    readonly topNav: readonly [{
        readonly columns: 12;
        readonly columnWidth: 80;
        readonly gutter: 24;
        readonly alignment: "center";
    }, {
        readonly columns: 1;
        readonly columnWidth: 108;
        readonly gutter: 0;
        readonly offset: 0;
        readonly alignment: "left";
    }, {
        readonly columns: 1;
        readonly columnWidth: 108;
        readonly gutter: 0;
        readonly offset: 0;
        readonly alignment: "right";
    }];
    readonly draftNewDesktop: readonly [{
        readonly columns: 12;
        readonly gutter: 24;
        readonly offset: 42;
        readonly alignment: "stretch";
    }];
    readonly draftDashboard: readonly [{
        readonly columns: 12;
        readonly gutter: 24;
        readonly offset: 68;
        readonly alignment: "stretch";
    }];
};
type GridTokenName = keyof typeof gridTokens;

declare const colorTokens: {
    readonly 'color.primary.50': "#e9ebf3";
    readonly 'color.primary.100': "#b9c2db";
    readonly 'color.primary.200': "#98a4c9";
    readonly 'color.primary.300': "#687bb1";
    readonly 'color.primary.400': "#4b61a1";
    readonly 'color.primary.500': "#1e3a8a";
    readonly 'color.primary.600': "#1b357e";
    readonly 'color.primary.700': "#152962";
    readonly 'color.primary.800': "#11204c";
    readonly 'color.primary.900': "#0d183a";
    readonly 'color.secondary.50': "#e7f8f2";
    readonly 'color.secondary.100': "#b5e9d8";
    readonly 'color.secondary.200': "#91dfc5";
    readonly 'color.secondary.300': "#5fd0ab";
    readonly 'color.secondary.400': "#40c79a";
    readonly 'color.secondary.500': "#10b981";
    readonly 'color.secondary.600': "#0fa875";
    readonly 'color.secondary.700': "#0b835c";
    readonly 'color.secondary.800': "#096647";
    readonly 'color.secondary.900': "#074e36";
    readonly 'color.neutral.text.primary': "#111827";
    readonly 'color.neutral.text.secondary': "#6b7280";
    readonly 'color.neutral.background.offWhite': "#f9fafb";
    readonly 'color.neutral.background.white': "#ffffff";
    readonly 'color.neutral.border': "#d1d5db";
    readonly 'color.neutral.gray': "#eceff3";
    readonly 'color.status.success': "#059669";
    readonly 'color.status.warning': "#f59e0b";
    readonly 'color.status.error': "#dc2626";
    readonly 'color.status.info': "#38bdf8";
};
declare const spacingTokens: {
    readonly 'spacing.4': 4;
    readonly 'spacing.8': 8;
    readonly 'spacing.12': 12;
    readonly 'spacing.16': 16;
    readonly 'spacing.24': 24;
    readonly 'spacing.32': 32;
    readonly 'spacing.40': 40;
    readonly 'spacing.48': 48;
    readonly 'spacing.64': 64;
};
declare const measurementTokens: {
    readonly 'measurement.abstract.8': 8;
};
type ColorTokenName = keyof typeof colorTokens;
type SpacingTokenName = keyof typeof spacingTokens;
type MeasurementTokenName = keyof typeof measurementTokens;

/**
 * Intentionally empty in Phase 2.
 *
 * Figma currently provides primitives but no approved semantic alias layer.
 * See DESIGN-DECISIONS.md before adding role-based tokens.
 */
declare const semanticTokens: {};

/** Figma currently defines one unnamed color mode and no dark-theme values. */
declare const supportedThemes: readonly ["light"];
type SupportedTheme = (typeof supportedThemes)[number];

declare const typographyTokens: {
    readonly display: {
        readonly description: "Large KPIs and hero titles";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Bold";
        readonly fontWeight: 700;
        readonly fontSize: 48;
        readonly lineHeight: 56;
        readonly letterSpacing: "-1%";
    };
    readonly h1: {
        readonly description: "Page titles";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "SemiBold";
        readonly fontWeight: 600;
        readonly fontSize: 36;
        readonly lineHeight: 44;
        readonly letterSpacing: "0.5%";
    };
    readonly h2: {
        readonly description: "Section headers";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "SemiBold";
        readonly fontWeight: 600;
        readonly fontSize: 28;
        readonly lineHeight: 36;
        readonly letterSpacing: "0%";
    };
    readonly h3: {
        readonly description: "Module and card titles";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Medium";
        readonly fontWeight: 500;
        readonly fontSize: 22;
        readonly lineHeight: 32;
        readonly letterSpacing: "0%";
    };
    readonly h4: {
        readonly description: "Subtitles and supporting headers";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Medium";
        readonly fontWeight: 500;
        readonly fontSize: 18;
        readonly lineHeight: 28;
        readonly letterSpacing: "0%";
    };
    readonly bodyLarge: {
        readonly description: "Main body content";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Regular";
        readonly fontWeight: 400;
        readonly fontSize: 16;
        readonly lineHeight: 24;
        readonly letterSpacing: "0%";
    };
    readonly bodyBase: {
        readonly description: "Paragraphs and content blocks";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Regular";
        readonly fontWeight: 400;
        readonly fontSize: 16;
        readonly lineHeight: 22;
        readonly letterSpacing: "0%";
    };
    readonly bodySmall: {
        readonly description: "";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Light";
        readonly fontWeight: 300;
        readonly fontSize: 14;
        readonly lineHeight: "normal";
        readonly letterSpacing: "0%";
    };
    readonly caption: {
        readonly description: "Labels and captions";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Medium";
        readonly fontWeight: 500;
        readonly fontSize: 12;
        readonly lineHeight: 16;
        readonly letterSpacing: "0%";
    };
    readonly button: {
        readonly description: "Buttons";
        readonly fontFamily: "Poppins";
        readonly fontStyle: "Regular";
        readonly fontWeight: 400;
        readonly fontSize: 14;
        readonly lineHeight: 16;
        readonly letterSpacing: "0%";
    };
    readonly input: {
        readonly description: "Form fields";
        readonly fontFamily: "Inter";
        readonly fontStyle: "Regular";
        readonly fontWeight: 400;
        readonly fontSize: 14;
        readonly lineHeight: 20;
        readonly letterSpacing: "0%";
    };
};
type TypographyTokenName = keyof typeof typographyTokens;

interface TypographyToken {
    readonly description: string;
    readonly fontFamily: string;
    readonly fontSize: number;
    readonly fontStyle: string;
    readonly fontWeight: number;
    readonly letterSpacing: string;
    readonly lineHeight: number | 'normal';
}
interface ShadowLayer {
    readonly color: string;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly blur: number;
    readonly spread: number;
    readonly type: 'drop-shadow' | 'inner-shadow';
}
interface GridColumnDefinition {
    readonly alignment: 'stretch' | 'left' | 'right' | 'center';
    readonly columns: number;
    readonly columnWidth?: number;
    readonly gutter: number;
    readonly offset?: number;
}

export { type ColorTokenName, type ElevationTokenName, type GridColumnDefinition, type GridTokenName, type MeasurementTokenName, type ShadowLayer, type SpacingTokenName, type SupportedTheme, type TypographyToken, type TypographyTokenName, colorTokens, elevationTokens, gridTokens, measurementTokens, semanticTokens, spacingTokens, supportedThemes, typographyTokens };
