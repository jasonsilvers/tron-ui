import React, { useState } from 'react'
import { FiGithub, FiToggleLeft, FiToggleRight, FiMenu } from 'react-icons/fi'
import { cx, css } from 'emotion'
import { useTronTheme, MyTheme } from 'tron-ui'

type HeaderProps ={
  menuToggle: () => void
  themeToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ menuToggle, themeToggle }) => {
  const theme: MyTheme = useTronTheme()
  const [toggle, setToggle] = useState(false)

  const brThemeStyle = css({
    borderColor: theme.colors.primary[1000]
  })

  const iconColorStyle =
    css({
      color: theme.colors.primary[100]
    })
  

  function handleToggleChange() {
    setToggle(old => !old)
    themeToggle()
  }

  return (
    <nav className={cx(`${brThemeStyle} db dt-l w-100 border-box pa3 ph5-l bb bw1`)}>
      <a
        className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'
        href='/'
        title='Home'
      >
        <img
          src='http://tachyons.io/img/logo.jpg'
          className='dib w2 h2 br-100'
          alt='logo'
        />
      </a>
      <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
        <a
          className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
          href='https://github.com/jasonsilvers/tron-ui'
          title='Home'
        >
          <FiGithub size='25px' className={iconColorStyle} />
        </a>
        <a
          className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
          title='Home'
          href='#'
          onClick={handleToggleChange}
        >
          {toggle ? (
            <FiToggleRight size='25px' className={iconColorStyle} />
          ) : (
            <FiToggleLeft size='25px' className={iconColorStyle} />
          )}
        </a>
        <button
          onClick={() => menuToggle()}
          className='bg-white bn pointer dn-l'
        >
          <FiMenu size='25px' className={iconColorStyle} />
        </button>
      </div>
    </nav>
  )
}

export default Header
