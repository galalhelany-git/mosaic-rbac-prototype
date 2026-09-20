/** Figma currently defines one unnamed color mode and no dark-theme values. */
export const supportedThemes = ['light'] as const;

export type SupportedTheme = (typeof supportedThemes)[number];
