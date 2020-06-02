import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav: React.FC = () => {

  const linkClass = 'link dim gray pa1 f5 f5-ns dib mr3 w-100 fw5 pv2'
  const activeLinkClass = 'br3 bg-light-gray'

  return (
    <nav
      className='ph2 pv3 h-100 br bw1 b--light-gray'
      aria-label='main navigation'
    >
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/start'
          activeClassName={activeLinkClass}
          className={linkClass}
        >
          Getting Started
        </NavLink>
        <NavLink
          to='/theme'
          activeClassName={activeLinkClass}
          className={linkClass}
        >
          Theme
        </NavLink>
      </div>
      <h1 className='f4 lh-copy fw3'>Components</h1>
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/alert'
          activeClassName={activeLinkClass}
          className={linkClass}
        >
          Alert
        </NavLink>
      </div>
      <h1 className='f4 lh-copy fw3 pt1'>Utilities</h1>
      <div className='nowra br b--light-gray w-100'>
        <NavLink
          to='/breakpoint'
          activeClassName={activeLinkClass}
          className={linkClass}
        >
          useBreakpoint
        </NavLink>
      </div>
    </nav>
  )
}

export default SideNav
