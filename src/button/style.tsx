import { cx, css } from 'emotion'
import { useTheme } from 'emotion-theming'
import { MyTheme } from '../theme'

// const disabledStyle = cx(
//   css({
//     borderColor: 'blue'
//   })
// )

const generateCSS = (styles: any) => {
  return cx(css(styles))
}

const baseClasses = `inline-flex ph3 lh-copy fw4 dib f5 pv2 br2 input-reset items-center justify-center relative outline:0 v-mid`

const basicStyling = (
  theme: MyTheme,
  color: string,
  isDisabled: boolean
): string => {
  if (isDisabled) {
    return `bg-white bn`
  }
  // Basic Basic
  if (color === 'basic') {
    return `bg-white hover-moon-gray bn`
  }

  // Basic with theme color
  const styles = generateCSS({
    backgroundColor: 'white',
    color: theme.colors[color][100]
  })

  return `${styles} dim link bn pointer`
}

const raisedStyling = (
  theme: MyTheme,
  color: string,
  isDisabled: boolean
): string => {
  if (isDisabled) {
    return `bg-moon-gray bn`
  }
  // Basic Basic
  if (color === 'basic') {
    return `bg-white hover-moon-gray shadow-4 bn pointer`
  }

  // Basic with theme color
  const styles = generateCSS({
    color: 'white',
    backgroundColor: theme.colors[color][100]
  })

  return `${styles} dim link shadow-4 bn pointer`
}

const strokedStyling = (
  theme: MyTheme,
  color: string,
  isDisabled: boolean
): string => {
  if (isDisabled) {
    return `bg-white ba b--moon-gray`
  }
  // Basic Basic
  if (color === 'basic') {
    return `bg-white ba b--moon-gray pointer`
  }

  // Basic with theme color
  const styles = generateCSS({
    backgroundColor: 'white',
    color: theme.colors[color][100]
  })

  return `${styles} dim link pointer ba b--moon-gray`
}

const solidStyling = (
  theme: MyTheme,
  color: string,
  isDisabled: boolean
): string => {
  if (isDisabled) {
    return `bg-moon-gray bn`
  }
  // Basic Basic
  if (color === 'basic') {
    return `bg-white bn pointer`
  }

  // Basic with theme color
  const styles = generateCSS({
    color: 'white',
    backgroundColor: theme.colors[color][100]
  })

  return `${styles} dim link bn pointer`
}

const buttonTypes = (
  type: string,
  theme: MyTheme,
  color: string,
  isDisabled: boolean
) => {
  switch (type) {
    case 'basic':
      return basicStyling(theme, color, isDisabled)
    case 'raised':
      return raisedStyling(theme, color, isDisabled)
    case 'stroked':
      return strokedStyling(theme, color, isDisabled)
    case 'solid':
      return solidStyling(theme, color, isDisabled)
    default:
      return basicStyling(theme, color, isDisabled)
  }
}

// How do you type props so it can be spread?
const useButtonStyle = (
  color = 'basic',
  type = 'basic',
  isDisabled = false
) => {
  console.log('in use style', color)
  const theme: MyTheme = useTheme()

  const buttonClasses = buttonTypes(type, theme, color, isDisabled)

  return `${baseClasses} ${buttonClasses}`
}

export { useButtonStyle }
