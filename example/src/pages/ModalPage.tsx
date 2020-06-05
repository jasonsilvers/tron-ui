import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { cx, css } from 'emotion'
import { Modal, useModal, Button, MyTheme, useTronTheme } from 'tron-ui'
import Usage from '../components/Usage'

const ModalPage: React.FC = () => {
  const theme: MyTheme = useTronTheme()
  const { isOpen, toggle } = useModal()

  const brThemeStyle = css({
    borderColor: theme.colors.primary[1000]
  })

  const importString = "  import { Modal, useModal } from 'tron-ui'"

  const useageString1 = `
  const { isOpen, toggle } = useModal()

  <Button type='solid' color='primary' onClick={toggle}>
    Show Modal
  </Button>

  <Modal isShowing={isOpen} hide={toggle}>
    <h2 className='mt2 fw4'>Modal</h2>
    <p className='lh-copy'>
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
    deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    </p>
  </Modal>
  `

  return (
    <div>
      <h1 className='f3 lh-copy'>Modal</h1>
      <h2 className='f4 fw3 pt2 lh-copy'>
        A modal is a window overlay to display focused content.
      </h2>

      <h2 className='f3 fw4 pt2 lh-copy'>How to Use</h2>

      <Usage>
        <Button type='solid' color='primary' onClick={toggle}>
          Show Modal
        </Button>
      </Usage>

      <SyntaxHighlighter language='typescript' style={atomOneDark}>
        {importString}
      </SyntaxHighlighter>

      <SyntaxHighlighter language='html' style={atomOneDark}>
        {useageString1}
      </SyntaxHighlighter>

      <Modal isShowing={isOpen} hide={toggle}>
        <h2 className='mt2 fw4'>Modal</h2>
        <p className='lh-copy'>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Sunt ad dolore quis aute consequat. Magna exercitation
          reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
          Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
          eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
        </p>
      </Modal>
    </div>
  )
}

export default ModalPage
