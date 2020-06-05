/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme
} from 'emotion-theming'
import { theme } from '../theme/defaultTheme'
import { MyTheme } from '../theme/theme'

type Props = {
  children: React.ReactNode
  theme: MyTheme
}

const ThemeProvider = ({ theme, children }: Props) => {
  theme.colors.support.info.light = theme.colors.primary[900]
  theme.colors.support.info.main = theme.colors.primary[500]
  theme.colors.support.info.dark = theme.colors.primary[200]

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

ThemeProvider.defaultProps = {
  theme
}

function useTronTheme(): MyTheme {
  return useTheme() as MyTheme
}

export { ThemeProvider, useTronTheme }
