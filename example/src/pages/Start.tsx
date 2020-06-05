import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {}

const Start: React.FC<Props> = () => {
  const tachyonsString =
    ' <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>'

  const installString = `
  // with npm
  npm i @jasonsilvers/tron-ui

  // with yarn
  yarn i @jasonsilvers/tron-ui
    
    `

  const fontString =
    ' <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />'

  const iconsString = ' npm install react-icons --save'

  const themeString = `
  //theme.ts
  import { MyTheme } from 'tron-ui'

  export const theme: MyTheme = {

  colors: {
      primary: {
          100: '#003E6B',
          200: '#0A558C',
          300: '#0F609B',
          400: '#186FAF',
          500: '#2680C2',
          600: '#4098D7',
          700: '#62B0E8',
          800: '#84C5F4',
          900: '#B6E0FE',
          1000: '#DCEEFB'
      },
      secondary: {
          100: '#8D2B0B',
          200: '#B44D12',
          300: '#CB6E17',
          400: '#DE911D',
          500: '#F0B429',
          600: '#F7C948',
          700: '#FADB5F',
          800: '#FCE588',
          900: '#FFF3C4',
          1000: '#FFFBEA'
      },
      neutral: {
          100: '#102A43',
          200: '#243B53',
          300: '#334E68',
          400: '#486581',
          500: '#627D98',
          600: '#829AB1',
          700: '#9FB3C8',
          800: '#BCCCDC',
          900: '#D9E2EC',
          1000: '#F0F4F8'
      },
      support: {
          error: {
              light: '#e57373',
              main: '#f44336',
              dark: '#d32f2f'
          },
          warning: {
              light: '#ffb74d',
              main: '#ff9800',
              dark: '#f57c00'
          },
          //Values are computed from Primary
          info: {
              light: colors.primary[900],
              main: colors.primary[500],
              dark: colors.primary[200]
          },
          success: {
              light: '#81c784',
              main: '#4caf50',
              dark: '#388e3c'
          }
      }
    }
  }
  `

  const themeproviderString = `
  import React from 'react'
  import { ThemeProvider } from 'tron-ui'
  import { theme } from "./theme";

  <ThemeProvider theme={theme}>
      <Header />
      <SideNav />
      <Main />
  </ThemeProvider>
  `

  return (
    <>
      <h1 className='f3 lh-copy'>Getting Started</h1>

      <h2 className='f4 fw3 lh-copy'>
        Tron-Ui is a Typscript UI component library based on{' '}
        <a href='https://tachyons.io/' className='link fw4'>
          Tachyons CSS
        </a>
        . Include the minified version.
      </h2>
      <SyntaxHighlighter language='html' style={atomOneDark}>
        {tachyonsString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 lh-copy'>
        Install and save in your package.json dependencies
      </h2>
      <SyntaxHighlighter language='powershell' style={atomOneDark}>
        {installString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'>
        {' '}
        Add a Global Font or use the ones provided by{' '}
        <a href='https://tachyons.io/docs/' className='link fw4'>
          {' '}
          Tachyons
        </a>
      </h2>
      <SyntaxHighlighter language='html' style={atomOneDark}>
        {fontString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'> Add Icons</h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {iconsString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'>
        Create a theme object to custimize colors. Tron-ui comes with a default
        color palette inspired from{' '}
        <a href='https://refactoringui.com/' className='link fw4'>
          {' '}
          Refactoring-UI{' '}
        </a>
      </h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {themeString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'>
        Add the theme to your application with the
        <code className='bg-light-gray f5'> ThemeProvider </code>, passing in
        the theme object as a prop.
      </h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {themeproviderString}
      </SyntaxHighlighter>
    </>
  )
}

export default Start
