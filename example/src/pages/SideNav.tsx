import React from 'react'
import { cx, css } from 'emotion'
import { NavLink } from 'react-router-dom'
import { useTronTheme, MyTheme } from 'tron-ui'

const SideNav: React.FC = () => {
  const theme: MyTheme = useTronTheme()

  const bgThemeStyle = css({
    backgroundColor: theme.colors.primary[1000]
  })

  const brThemeStyle = cx(
    css({
      borderColor: theme.colors.primary[1000]
    })
  )

  const linkClass = 'link gray ph2 pa1 f5 f5-ns dib mr3 w-100 fw5 pv2'

  return (
    <nav
      className={`ph2 pv3 vh-100 br bw1 ${brThemeStyle}`}
      aria-label='main navigation'
    >
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          Getting Started
        </NavLink>
        <NavLink
          to='/theme'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          Theme
        </NavLink>
      </div>
      <h1 className='f4 lh-copy fw3 ph1'>Components</h1>
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/alert'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          Alert
        </NavLink>
        <NavLink
          to='/modal'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          Modal
        </NavLink>
        <NavLink
          to='/button'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          Button
        </NavLink>
      </div>
      <h1 className='f4 lh-copy fw3 pt1 ph1'>Utilities</h1>
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/breakpoint'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          useBreakpoint
        </NavLink>
        <NavLink
          to='/usetheme'
          activeClassName={cx(`${bgThemeStyle} br3`)}
          className={linkClass}
        >
          useTheme
        </NavLink>
      </div>
    </nav>
  )
}

export default SideNav
