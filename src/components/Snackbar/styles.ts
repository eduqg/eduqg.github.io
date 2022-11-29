import { appearFromTop, hideToTop } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 48px;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: #eafaee;
  color: #19672b;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  animation: ${appearFromTop} 1s ease;

  &.hide-animation {
    animation: ${hideToTop} 1s ease;
  }

  div.check {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #28a745;

    svg {
      color: #fff;
      border: 0;
      width: 16px;
      height: 16px;
      stroke-width: 4px;
    }
  }

  p {
    font-weight: 600;
  }
`
