import type { GridColumnDefinition } from './types';

export const gridTokens = {
  desktop: [{ columns: 12, gutter: 24, offset: 80, alignment: 'stretch' }],
  tablet: [{ columns: 8, gutter: 16, offset: 32, alignment: 'stretch' }],
  mobile: [{ columns: 4, gutter: 16, offset: 16, alignment: 'stretch' }],
  expandedSidebar: [
    { columns: 12, columnWidth: 70, gutter: 24, offset: 32, alignment: 'right' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 272, alignment: 'left' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: 'right' },
  ],
  collapsedSidebar: [
    { columns: 12, columnWidth: 86, gutter: 24, offset: 32, alignment: 'right' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 80, alignment: 'left' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: 'right' },
  ],
  collapsedWithSubmenu: [
    { columns: 12, columnWidth: 64, gutter: 24, offset: 32, alignment: 'right' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 344, alignment: 'left' },
    { columns: 1, columnWidth: 32, gutter: 0, offset: 0, alignment: 'right' },
  ],
  topNav: [
    { columns: 12, columnWidth: 80, gutter: 24, alignment: 'center' },
    { columns: 1, columnWidth: 108, gutter: 0, offset: 0, alignment: 'left' },
    { columns: 1, columnWidth: 108, gutter: 0, offset: 0, alignment: 'right' },
  ],
  draftNewDesktop: [{ columns: 12, gutter: 24, offset: 42, alignment: 'stretch' }],
  draftDashboard: [{ columns: 12, gutter: 24, offset: 68, alignment: 'stretch' }],
} as const satisfies Record<string, readonly GridColumnDefinition[]>;

export type GridTokenName = keyof typeof gridTokens;
