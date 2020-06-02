import React from 'react'
import AlertPage from '../pages/AlertPage'
import { Switch, Route } from 'react-router'
import Start from './Start'
import Theming from './Theming'
import Breakpointpage from './Breakpointpage'

const Main: React.FC = () => {
  return (
    <Switch>
      <Route path='/alert'>
        <AlertPage />
      </Route>
      <Route path='/theme'>
        <Theming />
      </Route>
      <Route path='/breakpoint'>
        <Breakpointpage />
      </Route>
      <Route path='/'>
        <Start />
      </Route>
    </Switch>
  )
}

export default Main
