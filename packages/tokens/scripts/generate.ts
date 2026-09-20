import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { elevationTokens } from '../src/elevation';
import { gridTokens } from '../src/grids';
import { colorTokens, measurementTokens, spacingTokens } from '../src/primitives';
import { semanticTokens } from '../src/semantic';
import { supportedThemes } from '../src/themes';
import { typographyTokens } from '../src/typography';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(packageRoot, 'generated');

const toCssName = (name: string): string =>
  `--mosaic-${name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()}`;

const shadowToCss = (layers: (typeof elevationTokens)[keyof typeof elevationTokens]): string =>
  layers
    .map((layer) => {
      const inset = layer.type === 'inner-shadow' ? 'inset ' : '';
      return `${inset}${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${layer.color}`;
    })
    .join(', ');

const letterSpacingToCss = (value: string): string => {
  if (!value.endsWith('%')) return value;

  return `${Number.parseFloat(value) / 100}em`;
};

const declarations: string[] = [];

for (const [name, value] of Object.entries(colorTokens)) {
  declarations.push(`  ${toCssName(name)}: ${value};`);
}

for (const [name, value] of Object.entries(spacingTokens)) {
  declarations.push(`  ${toCssName(name)}: ${value}px;`);
}

for (const [name, value] of Object.entries(measurementTokens)) {
  declarations.push(`  ${toCssName(name)}: ${value}px;`);
}

for (const [name, value] of Object.entries(typographyTokens)) {
  declarations.push(
    `  ${toCssName(`typography.${name}.fontFamily`)}: '${value.fontFamily}', sans-serif;`,
  );
  declarations.push(`  ${toCssName(`typography.${name}.fontWeight`)}: ${value.fontWeight};`);
  declarations.push(`  ${toCssName(`typography.${name}.fontSize`)}: ${value.fontSize}px;`);
  declarations.push(
    `  ${toCssName(`typography.${name}.lineHeight`)}: ${value.lineHeight === 'normal' ? 'normal' : `${value.lineHeight}px`};`,
  );
  declarations.push(
    `  ${toCssName(`typography.${name}.letterSpacing`)}: ${letterSpacingToCss(value.letterSpacing)};`,
  );
}

for (const [name, layers] of Object.entries(elevationTokens)) {
  declarations.push(`  ${toCssName(`elevation.${name}`)}: ${shadowToCss(layers)};`);
}

const css = `/* Generated from audited Figma primitives. Do not edit directly. */\n@layer mosaic.tokens {\n  :root {\n${declarations.join('\n')}\n  }\n}\n`;

const json = {
  source: 'Mosaic Figma audit 2026-09-13',
  colors: colorTokens,
  spacing: spacingTokens,
  measurements: measurementTokens,
  typography: typographyTokens,
  elevation: elevationTokens,
  grids: gridTokens,
  semantic: semanticTokens,
  themes: supportedThemes,
};

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(resolve(outputDirectory, 'tokens.css'), css),
  writeFile(resolve(outputDirectory, 'tokens.json'), `${JSON.stringify(json, null, 2)}\n`),
]);
