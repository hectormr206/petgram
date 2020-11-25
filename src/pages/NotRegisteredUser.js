import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, data, loading, error } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return (
            <>
              <UserForm onSubmit={onSubmit} error={errorMsg} title='Registrate' disabled={loading} />
              <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
