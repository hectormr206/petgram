import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    position: fixed;
    left: 0 auto;
    top: -20px;
    right: 0;
    padding: 5px;
    max-width: 400px;
    border-radius: 60px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: scale(.5);
    z-index: 1;
    ${fadeIn({ time: '1.2s' })}
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
