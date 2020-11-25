import React, { createContext, useState } from 'react'
import { navigate } from '@reach/router'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
      navigate('/')
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      navigate('/login')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}
