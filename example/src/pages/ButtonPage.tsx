import React from 'react'
import { Button } from 'tron-ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { FiSettings } from 'react-icons/fi'
import Usage from '../components/Usage'

const ButtonPage: React.FC = () => {
  const importString = "  import { Button } from 'tron-ui'"

  const useageString1 = `  <Button color='primary' type='solid'>
    Button
  </Button>
`

  const useageString2 = `  <Button color='primary' type='solid'>
    <FiSettings size='25px' className='mr2'/>
    Settings
  </Button>`

  return (
    <div>
      <h1 className='f3 lh-copy'>Button</h1>
      <h2 className='f4 fw3 pt2 lh-copy'>
        A button allows users to trigger an action or event
      </h2>
      <h2 className='f3 fw4 pt2 lh-copy'>How to Use</h2>
      <Usage>
        <div className='flex flex-row'>
          <div className='flex flex-column'>
            <div className='pa2'>
              <Button>Basic</Button>
            </div>
            <div className='pa2'>
              <Button type='raised'>Raised</Button>
            </div>
            <div className='pa2'>
              <Button type='stroked'>Stroked</Button>
            </div>
            <div className='pa2'>
              <Button type='solid'>Solid</Button>
            </div>
          </div>
          <div className='flex flex-column'>
            <div className='pa2'>
              <Button color='primary'>Raised</Button>
            </div>
            <div className='pa2'>
              <Button color='primary' type='raised'>
                Raised
              </Button>
            </div>
            <div className='pa2'>
              <Button color='primary' type='stroked'>
                Stroked
              </Button>
            </div>
            <div className='pa2'>
              <Button color='primary' type='solid'>
                Solid
              </Button>
            </div>
          </div>
          <div className='flex flex-column'>
            <div className='pa2'>
              <Button color='secondary'>Basic</Button>
            </div>
            <div className='pa2'>
              <Button color='secondary' type='raised'>
                Raised
              </Button>
            </div>
            <div className='pa2'>
              <Button color='secondary' type='stroked'>
                Stroked
              </Button>
            </div>
            <div className='pa2'>
              <Button color='secondary' type='solid'>
                Solid
              </Button>
            </div>
          </div>
          <div className='flex flex-column'>
            <div className='pa2'>
              <Button color='neutral'>Basic</Button>
            </div>
            <div className='pa2'>
              <Button color='neutral' type='raised'>
                Raised
              </Button>
            </div>
            <div className='pa2'>
              <Button color='neutral' type='stroked'>
                Stroked
              </Button>
            </div>
            <div className='pa2'>
              <Button color='neutral' type='solid'>
                Solid
              </Button>
            </div>
          </div>
          <div className='flex flex-column'>
            <div className='pa2'>
              <Button isDisabled>Basic</Button>
            </div>
            <div className='pa2'>
              <Button isDisabled type='raised'>
                Raised
              </Button>
            </div>
            <div className='pa2'>
              <Button isDisabled type='stroked'>
                Stroked
              </Button>
            </div>
            <div className='pa2'>
              <Button isDisabled type='solid'>
                Solid
              </Button>
            </div>
          </div>
        </div>
      </Usage>
      <SyntaxHighlighter language='typescript' style={atomOneDark}>
        {importString}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='html' style={atomOneDark}>
        {useageString1}
      </SyntaxHighlighter>
      <h2 className='f4 fw3 pt2 lh-copy'>Button with Icon</h2>
      <Usage>
        <Button color='primary' type='solid'>
          <FiSettings size='25px' className='mr2' />
          Settings
        </Button>
      </Usage>
      <SyntaxHighlighter language='html' style={atomOneDark}>
        {useageString2}
      </SyntaxHighlighter>
      <h2 className='f3 fw4 pt2 lh-copy'>Props</h2>
      <ul className='list pl0 mt0 mw7 '>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>type? = 'basic'</span>
          </div>
          <div>
            <span className='f4 db black-70'>
              'basic' | 'solid' | 'raised' | 'stroked'
            </span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>color? = 'basic'</span>
          </div>
          <div>
            <span className='f4 db black-70'>
              'basic' | 'primary' | 'Secondary' | 'Neutral'
            </span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>ariaLabel?</span>
          </div>
          <div>
            <span className='f4 db black-70'>string</span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>isDisabled</span>
          </div>
          <div>
            <span className='f4 db black-70'>boolean</span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>onClick?</span>
          </div>
          <div>
            <span className='f4 db black-70'>() => void</span>
          </div>
        </li>
        <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
          <div className='pl3 flex-auto'>
            <span className='f4 db black-70'>children</span>
          </div>
          <div>
            <span className='f4 db black-70'>React.ReactNode</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ButtonPage
