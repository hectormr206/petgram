import React from 'react'

import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Route } from './router/Router'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Route />
      <NavBar />
    </>
  )
}
