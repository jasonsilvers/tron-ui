import React, { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from 'tron-ui'
import SideNav from './pages/SideNav'
import Header from './pages/Header'
import Main from './pages/Main'
// import { theme } from "./theme";
import { useBreakPoint } from 'tron-ui'

const App: React.FC = () => {
  const [sideIsOpen, setSideIsOpen] = useState(true)
  const [sideNavClass, setSideNavClass] = useState('')
  
  const breakpoints = useBreakPoint()

  const handleMenuToggle = () => {
    setSideIsOpen((old) => !old)
  }

  const menuClassIsOpen = sideIsOpen ? '' : 'dn'

  useEffect(() => {
    if (!breakpoints['m']) {
      setSideNavClass('')
      setSideIsOpen(true)
    }

    if (breakpoints['m']) {
      setSideIsOpen(false)
      setSideNavClass('')
    } else {
      setSideNavClass('dn-m')
    }
  }, [setSideNavClass, breakpoints])

  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <Header menuToggle={handleMenuToggle} />
      <div className='flex'>
        <div
          className={`overflow-hidden w5-l ${sideNavClass} ${menuClassIsOpen}`}
        >
          <SideNav />
        </div>
        <div className='flex-auto'>
          <Main />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
