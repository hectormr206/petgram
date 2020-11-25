import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  position: relative;
  display: inline-block;
  margin: 1%;
  width: 31.33%;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
