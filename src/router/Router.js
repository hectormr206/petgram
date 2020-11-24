import React from 'react'
import { Router } from '@reach/router'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { PrivateRoute } from './PrivateRoute'

const isAuth = true

export const Route = () => (
  <>
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
    </Router>
    <PrivateRoute isAuth={isAuth} />
  </>
)
