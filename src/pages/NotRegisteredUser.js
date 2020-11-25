import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }
          return (
            <>
              <UserForm onSubmit={onSubmit} title='Registrate' />
              <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
