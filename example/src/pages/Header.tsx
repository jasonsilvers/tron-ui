import React, { useState } from 'react'
import { FiGithub, FiToggleLeft, FiToggleRight, FiMenu } from 'react-icons/fi'

type HeaderProps ={
  menuToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ menuToggle }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='db dt-l w-100 border-box pa3 ph5-l bb bw1 b--light-gray'>
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
          <FiGithub size='25px' />
        </a>
        <a
          className='link dim dark-gray f6 f5-l dib mr3 mr4-l'
          title='Home'
          href='#'
          onClick={() => setToggle((old) => !old)}
        >
          {toggle ? (
            <FiToggleRight size='25px' />
          ) : (
            <FiToggleLeft size='25px' />
          )}
        </a>
        <button
          onClick={() => menuToggle()}
          className='bg-white bn pointer dn-l'
        >
          <FiMenu size='25px' />
        </button>
      </div>
    </nav>
  )
}

export default Header
