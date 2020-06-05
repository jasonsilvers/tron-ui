import React from 'react'
import AlertPage from '../pages/AlertPage'
import { Switch, Route, Redirect } from 'react-router'
import Start from './Start'
import Theming from './Theming'
import UseBreakpointPage from './useBreakpointPage'
import UseThemePage from './UseThemePage'
import ModalPage from './ModalPage'
import ButtonPage from './ButtonPage'

const Main: React.FC = () => {
  return (
    <div className='pv2 ph4'>
      <Switch>
        <Route path='/start'>
          <Start />
        </Route>
        <Route path='/alert'>
          <AlertPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/theme'>
          <Theming />
        </Route>
        <Route path='/breakpoint'>
          <UseBreakpointPage />
        </Route>
        <Route path='/useTheme'>
          <UseThemePage />
        </Route>
        <Route path='/'>
          <Redirect to='/start' />
        </Route>
      </Switch>
    </div>
  )
}

export default Main
