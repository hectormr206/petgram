import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from '../Context'

const NotFound = React.lazy(() => import('../pages/NotFound'))
const Home = React.lazy(() => import('../pages/Home'))
const Detail = React.lazy(() => import('../pages/Detail'))
const NotRegisteredUser = React.lazy(() => import('../pages/NotRegisteredUser'))
const Favs = React.lazy(() => import('../pages/Favs'))
const User = React.lazy(() => import('../pages/User'))

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
