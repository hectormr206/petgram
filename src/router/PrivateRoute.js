import React from 'react'
import { Router } from '@reach/router'

import { Favs } from '../pages/Favs'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { User } from '../pages/User'

export const PrivateRoute = ({ isAuth }) => {
  return (
    <Router>
      {
        isAuth
          ? (
            <>
              <Favs path='/favs' />
              <User path='/user' />
            </>
            )
          : (
            <>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </>
            )
      }
    </Router>
  )
}
