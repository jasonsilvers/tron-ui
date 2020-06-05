import React, { useState, useEffect } from 'react'
import './App.css'
import { useBreakPoint } from 'tron-ui'
import SideNav from './pages/SideNav'
import Header from './pages/Header'
import Main from './pages/Main'

interface TaProps {
    handleThemeChange: () => void
}

const ThemedApp: React.FC<TaProps> = ({handleThemeChange}) => {
  const [sideIsOpen, setSideIsOpen] = useState(true)
  const [sideNavClass, setSideNavClass] = useState('')

  const breakpoints = useBreakPoint()

  const handleMenuToggle = () => {
    setSideIsOpen((old) => !old)
  }

  const menuClassIsOpen = sideIsOpen ? '' : 'dn'

  useEffect(() => {
    if (!breakpoints.m) {
      setSideNavClass('')
      setSideIsOpen(true)
    }

    if (breakpoints.m) {
      setSideIsOpen(false)
      setSideNavClass('')
    } else {
      setSideNavClass('dn-m')
    }
  }, [setSideNavClass, breakpoints])

  return (
    <>
      <Header menuToggle={handleMenuToggle} themeToggle={handleThemeChange} />
      <div className='flex'>
        <div
          style={{ minWidth: '250px' }}
          className={`overflow-hidden vh-100  ${sideNavClass} ${menuClassIsOpen}`}
        >
          <SideNav />
        </div>
        <div className='flex-auto mw7 center-m'>
          <Main />
        </div>
      </div>
    </>
  )
}

export default ThemedApp
