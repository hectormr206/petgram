import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './styles'

export const UserForm = ({ error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
      {error && <span>{error}</span>}
    </>
  )
}
