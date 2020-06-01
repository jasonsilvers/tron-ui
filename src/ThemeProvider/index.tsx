/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { MyTheme } from '../theme/theme'
import { theme } from '../theme/defaultTheme'

type Props = {
  children: React.ReactNode
  theme: MyTheme
}

const ThemeProvider = ({ theme, children }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

ThemeProvider.defaultProps = {
  theme
}

export default ThemeProvider
