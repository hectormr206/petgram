import styled from 'styled-components'

export const Button = styled.button`
display: block;
width: 100%;
height: 32px;
text-align: center;
background: #8d00ff;
color: #fff;
border-radius: 3px;
&[disabled] {
  opacity: .26;
}
`
