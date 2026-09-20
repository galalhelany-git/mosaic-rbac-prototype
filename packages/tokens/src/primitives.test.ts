import { describe, expect, it } from 'vitest';

import { elevationTokens } from './elevation';
import { gridTokens } from './grids';
import { colorTokens, measurementTokens, spacingTokens } from './primitives';
import { semanticTokens } from './semantic';
import { typographyTokens } from './typography';

describe('audited primitive tokens', () => {
  it('preserves the complete primary and secondary ramps', () => {
    expect(
      Object.keys(colorTokens).filter((name) => name.startsWith('color.primary.')),
    ).toHaveLength(10);
    expect(
      Object.keys(colorTokens).filter((name) => name.startsWith('color.secondary.')),
    ).toHaveLength(10);
  });

  it('preserves the Figma spacing scale', () => {
    expect(Object.values(spacingTokens)).toEqual([4, 8, 12, 16, 24, 32, 40, 48, 64]);
  });

  it('matches the audited foundation counts', () => {
    expect(Object.keys(colorTokens)).toHaveLength(30);
    expect(Object.keys(measurementTokens)).toHaveLength(1);
    expect(Object.keys(typographyTokens)).toHaveLength(11);
    expect(Object.keys(elevationTokens)).toHaveLength(11);
    expect(Object.keys(gridTokens)).toHaveLength(9);
  });

  it('does not invent semantic roles before design approval', () => {
    expect(semanticTokens).toEqual({});
  });
});
