import React from 'react'
import './App.css'
import {ThemeProvider, Example } from 'tron-ui'
// import { theme } from "./theme";

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <div className='App'>
        <Example> This is a banner</Example>
      </div>
    </ThemeProvider>
  )
}

export default App
