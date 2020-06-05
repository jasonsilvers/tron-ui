import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {}

const UseThemePage: React.FC<Props> = () => {
  const importString = "  import { useTronTheme, MyTheme } from 'tron-ui'"
  const usageString1 = `
  const Example: React.FC<ExampleProps> = ({exampleProp}) => {
    
    const theme: MyTheme = useTronTheme()

    return (
        <div
          className='pa3'
          style={{
            backgroundColor: theme.colors.support.info
          }}
        ></div>
      )
  }
  `

  const usageString2 = `
  import { useTronTheme, MyTheme } from 'tron-ui'
  //You can use emotion to create class names
  import { cx, css } from 'emotion'

  const Example: React.FC<ExampleProps> = ({exampleProp}) => {

    const theme: MyTheme = useTronTheme()

    const bgThemeStyle = css({
      backgroundColor: theme.colors.primary.P1000
    })

    return (
      <NavLink
        to='/start'
        className={cx(\`\${bgThemeStyle} br3\`)}
      >
        Getting Started
      </NavLink>
      )
  }
  `

  return (
    <div>
      <h1 className='f3 lh-copy'>useTheme</h1>
      <h2 className='f4 fw3 pt2 lh-copy'>
        <code className='bg-light-gray f5'> useTheme </code>, is a custom hook
        to get the theme object from context
      </h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {importString}
      </SyntaxHighlighter>
      <h2 className='f3 fw4 pt2 lh-copy'>How to Use</h2>
      <h2 className='f4 fw4 pt2 lh-copy'>Style tag</h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {usageString1}
      </SyntaxHighlighter>
      <h2 className='f4 fw4 pt2 lh-copy'>Inline with className</h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {usageString2}
      </SyntaxHighlighter>
    </div>
  )
}

export default UseThemePage
