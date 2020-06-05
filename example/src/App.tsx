import React, { useState } from 'react'
import './App.css'

import ThemedApp from './ThemedApp'
import { ThemeProvider } from 'tron-ui'
import { altTheme } from './altTheme'

const App: React.FC = () => {
  const [useAltTheme, setUseAltTheme] = useState(false)

  console.log(useAltTheme)

  function handleThemeChange() {
    setUseAltTheme(old => !old)
  }

  return (
    <>
      {useAltTheme ? (
        <ThemeProvider theme={altTheme}>
          <ThemedApp handleThemeChange={handleThemeChange} />
        </ThemeProvider>
      ) : (
        <ThemeProvider>
          <ThemedApp handleThemeChange={handleThemeChange} />
        </ThemeProvider>
      )}
    </>
  )
}

export default App
