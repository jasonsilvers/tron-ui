import React from 'react'
import AlertPage from '../pages/AlertPage'
import { Switch, Route } from 'react-router'
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
          <Start />
        </Route>
      </Switch>
    </div>
  )
}

export default Main
