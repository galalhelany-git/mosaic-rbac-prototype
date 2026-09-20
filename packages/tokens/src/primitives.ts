export const colorTokens = {
  'color.primary.50': '#e9ebf3',
  'color.primary.100': '#b9c2db',
  'color.primary.200': '#98a4c9',
  'color.primary.300': '#687bb1',
  'color.primary.400': '#4b61a1',
  'color.primary.500': '#1e3a8a',
  'color.primary.600': '#1b357e',
  'color.primary.700': '#152962',
  'color.primary.800': '#11204c',
  'color.primary.900': '#0d183a',
  'color.secondary.50': '#e7f8f2',
  'color.secondary.100': '#b5e9d8',
  'color.secondary.200': '#91dfc5',
  'color.secondary.300': '#5fd0ab',
  'color.secondary.400': '#40c79a',
  'color.secondary.500': '#10b981',
  'color.secondary.600': '#0fa875',
  'color.secondary.700': '#0b835c',
  'color.secondary.800': '#096647',
  'color.secondary.900': '#074e36',
  'color.neutral.text.primary': '#111827',
  'color.neutral.text.secondary': '#6b7280',
  'color.neutral.background.offWhite': '#f9fafb',
  'color.neutral.background.white': '#ffffff',
  'color.neutral.border': '#d1d5db',
  'color.neutral.gray': '#eceff3',
  'color.status.success': '#059669',
  'color.status.warning': '#f59e0b',
  'color.status.error': '#dc2626',
  'color.status.info': '#38bdf8',
} as const;

export const spacingTokens = {
  'spacing.4': 4,
  'spacing.8': 8,
  'spacing.12': 12,
  'spacing.16': 16,
  'spacing.24': 24,
  'spacing.32': 32,
  'spacing.40': 40,
  'spacing.48': 48,
  'spacing.64': 64,
} as const;

export const measurementTokens = {
  'measurement.abstract.8': 8,
} as const;

export type ColorTokenName = keyof typeof colorTokens;
export type SpacingTokenName = keyof typeof spacingTokens;
export type MeasurementTokenName = keyof typeof measurementTokens;
