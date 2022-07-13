export enum ThemeEnum {
  DARK_ORANGE = 'theme-dark-orange',
  RED = 'theme-red',
  EMERALD = 'theme-emerald',
  PASTEL =  'theme-pastel',
  NEON = 'theme-neon',
  GOLD = 'theme-gold',
  VINTAGE = 'theme-vintage',
  DARK = 'theme-dark',
  COLD = 'theme-cold',
  SAKURA = 'theme-sakura',
  TEST = 'theme-test'
}

export type ThemeType = {
  theme?: string
  updateTheme: (theme: string) => void
  restoreDefault: () => void
}