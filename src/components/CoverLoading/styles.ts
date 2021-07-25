import styled, { keyframes } from 'styled-components'

interface ICoverLoadingProps {
  display: 'flex' | 'none'
}

const fadeOut = keyframes`
  \ 0% {
    opacity: 1;
  }
  \ 80% {
    opacity: 1;

  }
  \ 100% {
    opacity: 0;
  }
`

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const fillObject = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: #fdfdfd;
  }
`

const delayTime = 0.5

export const Container = styled.div<ICoverLoadingProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--black-blue);
  z-index: 1000;
  display: ${props => props.display};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeOut} 3s ease;
  animation-fill-mode: both;

  #eduqg {
    width: 100%;
    max-width: 128px;
    height: auto;
    object-fit: contain;
    animation: ${fillObject} 0.5s ease forwards 2s;
  }

  #eduqg path:nth-child(1) {
    stroke-dasharray: 380px;
    stroke-dashoffset: 380px;
    animation: ${dash} 2s linear both ${delayTime}s;
  }

  #eduqg path:nth-child(2) {
    stroke-dasharray: 580px;
    stroke-dashoffset: 580px;
    animation: ${dash} 2s linear both ${delayTime * 1.5}s;
  }

  #eduqg path:nth-child(3) {
    stroke-dasharray: 430px;
    stroke-dashoffset: 430px;
    animation: ${dash} 2s linear both ${delayTime * 2}s;
  }

  #eduqg path:nth-child(4) {
    stroke-dasharray: 870px;
    stroke-dashoffset: 870px;
    animation: ${dash} 2s linear both ${delayTime * 2.5}s;
  }

  #eduqg path:nth-child(5) {
    stroke-dasharray: 710px;
    stroke-dashoffset: 710px;
    animation: ${dash} 2s linear both ${delayTime * 3}s;
  }
`
