/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme, { ITheme } from '../theme/theme'

type Props = {
  children: React.ReactNode
  theme: ITheme
}

const ThemeProvider = ({ theme, children }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

ThemeProvider.defaultProps = {
  theme
}

export default ThemeProvider
