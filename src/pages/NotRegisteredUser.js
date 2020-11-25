import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { loginMutation, loading: loadingLoding, error: errorLoading } = useLoginMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsgRegister = errorRegister && 'El usuario ya existe o hay algún problema.'

  const errorMsgLogin = errorLoading && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm onSubmit={onSubmitRegister} error={errorMsgRegister} title='Registrate' disabled={loadingRegister} />
      <UserForm onSubmit={onSubmitLogin} error={errorMsgLogin} title='Iniciar sesión' disabled={loadingLoding} />
    </>
  )
}
