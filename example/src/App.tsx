import React from 'react'
import './App.css'
import {ThemeProvider, Example } from 'tron-ui'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <Example> This is a banner</Example>
      </div>
    </ThemeProvider>
  )
}

export default App
