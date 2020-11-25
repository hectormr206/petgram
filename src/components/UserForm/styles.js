import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  display: block;
  padding: 8px 4px;
  margin-bottom: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  &[disabled] {
    opacity: .26;
  }
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`
