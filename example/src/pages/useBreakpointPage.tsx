import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {}

const useBreakpointPage: React.FC<Props> = () => {

  const mediaListString = `
  interface IMatchedQueries {
    ns: boolean
    m:  boolean
    l:  boolean
    or: boolean
  }
  `

  const usageString1 = `
  import { useBreakPoint } from 'tron-ui'

  const Example: React.FC<ExampleProps> = ({exampleProp}) => {

    const breakpoints = useBreakPoint()

    if (breakpoints.m) {
      //Do something when the media breakpoint is Tachyons declared medium
    }

    //return
  }
  `

  const providerString = `
  import { BreakpointProvider } from 'tron-ui'

  <BreakpointProvider>
    <App />
  </BreakpointProvider>
  `


  return (
    <div>
      <h1 className='f3 lh-copy'>useBreakpoint</h1>
      <h2 className='f4 fw3 pt2 lh-copy'>
        <code className='bg-light-gray f5'> useBreakpoint </code>, is a custom
        hook to programmatically update the UI through media queries.
      </h2>
      <h2 className='f4 fw3 pt2 lh-copy'>
        It does an initial check when app loads, and then
        continously checks for document resize
      </h2>
      <h2 className='f4 fw3 pt2 lh-copy'>
        <code className='bg-light-gray f5'> useBreakpoint </code>, returns a
        MatchedQueries object that aligns with Tachyons' CSS media queries.
        Along with an orientation check
      </h2>

      <SyntaxHighlighter language='tyepscript' style={atomOneDark}>
        {mediaListString}
      </SyntaxHighlighter>
      <h2 className='f3 fw4 pt2 lh-copy'>How to Use</h2>
      <h2 className='f4 fw3 pt2 lh-copy'>
        Import
      </h2>
      <h2 className='f4 fw3 pt2 lh-copy'>
        Wrap your app in the <code className='bg-light-gray f5'> BreakpointProdiver </code>
      </h2>
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {providerString}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'>
        In a child component
      </h2>
  
      <SyntaxHighlighter language='javascript' style={atomOneDark}>
        {usageString1}
      </SyntaxHighlighter>
 
    </div>
  )
}

export default useBreakpointPage
