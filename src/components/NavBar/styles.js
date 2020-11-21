import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  max-width: 500px;
  width: 100%;
  height: 50px;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #888;
  text-decoration: none;
`
