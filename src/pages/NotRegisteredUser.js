import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

const Registro = ({ activateAuth }) => {
  const { register } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(activateAuth())
  }
  return <UserForm title='Registrarse' onSubmit={onSubmit} />
}

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <Registro activateAuth={activateAuth} />
              <UserForm title='Iniciar sesión' activateAuth={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
