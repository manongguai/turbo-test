import type { Theme } from '@/hooks/use-theme'
import { commonLight, type ThemeCommonVars } from '@/styles'
export const self = (vars: ThemeCommonVars) => {
  const { textColorBase } = vars
  return {
    color: textColorBase
  }
}

export type ButtonGroupThemeVars = ReturnType<typeof self>

export const buttonGroupLight: Theme<'buttonGroup', ButtonGroupThemeVars> = {
  name: 'buttonGroup',
  common: commonLight,
  self
}

export type ButtonGroupTheme = typeof buttonGroupLight
