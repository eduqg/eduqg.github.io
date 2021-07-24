import styled, { keyframes } from 'styled-components'

const spinLoadingButton = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

export const Container = styled.div`
  width: 32px;
  height: 32px;

  border-top: 3px solid rgba(255, 255, 255, 0.8);
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: ${spinLoadingButton} 0.8s linear infinite;
`
