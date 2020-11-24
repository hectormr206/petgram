import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
