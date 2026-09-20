export interface TypographyToken {
  readonly description: string;
  readonly fontFamily: string;
  readonly fontSize: number;
  readonly fontStyle: string;
  readonly fontWeight: number;
  readonly letterSpacing: string;
  readonly lineHeight: number | 'normal';
}

export interface ShadowLayer {
  readonly color: string;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly blur: number;
  readonly spread: number;
  readonly type: 'drop-shadow' | 'inner-shadow';
}

export interface GridColumnDefinition {
  readonly alignment: 'stretch' | 'left' | 'right' | 'center';
  readonly columns: number;
  readonly columnWidth?: number;
  readonly gutter: number;
  readonly offset?: number;
}
