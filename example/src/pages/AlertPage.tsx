import React from 'react'
import { Alert } from 'tron-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Usage from '../components/Usage'

interface Props {}

const AlertPage: React.FC<Props> = () => {
  const importString = "  import { Alert } from 'tron-ui'"

  const useageString1 = `
  <Alert
    type='success'
    title='Success'
    subtitle='This is a subtitle'
    showIcon
  />
  `

  const useageString2 = `
  import { Alert } from 'tron-ui'

  const Example: React.FC<ExampleProps> = ({exampleProp}) => {

    const breakpoints = useBreakPoint()

    if (!breakpoints.m) {
      //Do something when the media breakpoint is Tachyons declared medium
    }

    //return
  }
  `

  return (
    <div>
      <h1 className='f3 lh-copy'>Alert</h1>
      <h2 className='f4 fw3 pt2 lh-copy'>
        An alert displays a short, important message in a way that attracts the
        user's attention without interrupting the user's task
      </h2>

      <h2 className='f3 fw4 pt2 lh-copy'>How to Use</h2>
      <SyntaxHighlighter language='typescript' style={atomOneDark}>
        {importString}
      </SyntaxHighlighter>
      <Usage>
        <Alert
          type='success'
          title='Success'
          subtitle='This is a subtitle'
          showIcon
        />
        <Alert
          type='error'
          title='Error'
          subtitle='This is a subtitle'
          showIcon
        />
        <Alert
          type='info'
          title='Info'
          subtitle='This is a subtitle'
          showIcon
        />
        <Alert
          type='warning'
          title='Warning'
          subtitle='This is a subtitle'
          showIcon
        />
      </Usage>
      <SyntaxHighlighter language='html' style={atomOneDark}>
        {useageString1}
      </SyntaxHighlighter>
      <Usage>
        <Alert type='success' title='Success Message' showIcon />
        <Alert type='error' title='Error Message' showIcon />
        <Alert type='info' title='Info Message' showIcon />
        <Alert type='warning' title='Warning Message' showIcon />
      </Usage>
      <h2 className='f3 fw4 pt2 lh-copy'>Props</h2>
      <ul className='list pl0 mt0 mw7 '>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>type? = 'info'</span>
          </div>
          <div>
            <span className='f4 db black-70'>
              'success' | 'error' | 'info' | 'warning'
            </span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>title</span>
          </div>
          <div>
            <span className='f4 db black-70'>string</span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>subtitle?</span>
          </div>
          <div>
            <span className='f4 db black-70'>string</span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>showIcon?</span>
          </div>
          <div>
            <span className='f4 db black-70'>boolean</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AlertPage
