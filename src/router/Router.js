import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'

import { Context } from '../Context'

export const Route = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </>
  )
}
