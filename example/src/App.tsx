import React from 'react'
import './App.css'
import { ThemeProvider, Alert } from 'tron-ui'
// import { theme } from "./theme";

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <div className='App'>
        <Alert type='info' title="Warning" subtitle="There was an error" showIcon />
      </div>
    </ThemeProvider>
  )
}

export default App
