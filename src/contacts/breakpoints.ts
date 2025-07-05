export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  XL_DESKTOP: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
