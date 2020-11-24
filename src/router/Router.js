import React from 'react'
import { Router } from '@reach/router'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { PrivateRoute } from './PrivateRoute'

import Context from '../Context'

export const Route = () => (
  <>
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
    </Router>
    <Context.Consumer>
      {
        ({ isAuth }) => <PrivateRoute isAuth={isAuth} />
      }
    </Context.Consumer>
  </>
)
