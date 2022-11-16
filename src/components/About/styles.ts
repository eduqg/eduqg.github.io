import styled from 'styled-components'
import { bounceAnimation, disableInteractons } from '@/styles/GlobalStyles'

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;

  h1 {
    font-family: 'Encode Sans Condensed';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    letter-spacing: 0em;
    text-align: left;
    color: var(--almost-white);
    margin-bottom: 32px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: url('light-aluminum.webp');
    opacity: 0.15;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    pointer-events: none;
    user-select: none;
  }

  img.wavesLeft {
    position: absolute;
    top: 6vh;
    left: 0;
    width: 50vw;
    ${disableInteractons}
  }

  img.wavesRight {
    position: absolute;
    bottom: 6vh;
    right: 0;
    width: 50vw;
    ${disableInteractons}
  }

  @media screen and (min-width: 640px) {
    padding: 8vh 0;
    > h1 {
      margin-bottom: 48px;
    }

    img.wavesLeft {
      width: 40vw;
    }

    img.wavesRight {
      width: 40vw;
    }
  }

  @media screen and (min-width: 1280px) {
    > h1 {
      margin-bottom: 64px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  max-width: 80rem;
  padding: 0 16px;

  div.about {
    margin-bottom: 16px;
  }

  h2 {
    font-size: 12px;
    line-height: 200%;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
  }

  h2 + h2 {
    margin-top: 8px;
  }

  @media screen and (min-width: 640px) {
    > h1 {
      margin-bottom: 48px;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 180%;
    }
  }

  @media screen and (min-width: 1280px) {
    > h1 {
      margin-bottom: 64px;
    }
    h2 {
      font-size: 2rem;
      line-height: 200%;
    }
  }
`

export const Academic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h2 {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (min-width: 640px) {
    > h2 {
      line-height: 220%;
      margin-top: 32px;
    }
  }
`

export const AcademicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 640px) {
    gap: 48px;
    flex-direction: row;
    align-items: center;
  }
`

export const AcademicItem = styled.div`
  h2 {
    font-family: 'Encode Sans Condensed';
    font-style: normal;
    font-weight: 200;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
    font-size: 1.6rem;
    line-height: 120%;
  }

  h3 + h3 {
    margin-top: 8px;
  }

  h3 {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.6rem;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 640px) {
    h2 {
      font-size: 1.8rem;
      line-height: 140%;
    }
    h3 {
      font-size: 1.6rem;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 1280px) {
    h2 {
      font-size: 1.8rem;
      line-height: 140%;
    }
    h3 {
      font-size: 1.6rem;
      line-height: 140%;
    }
  }
`

export const BottomButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  button {
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    position: relative;
    opacity: 0.8;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 120%;
      left: 0;
      width: 0;
      height: 2px;
      transform: translate(5%, -50%);
      transition: width 0.5s ease;
      background-color: rgba(255, 255, 255, 0.9);
    }

    &:hover {
      opacity: 1;
    }

    &:hover::after {
      width: 90%;
    }
  }

  @media screen and (min-width: 640px) {
    gap: 24px;
    width: 180px;
    justify-content: center;
    margin-top: 64px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`

const bounceAnimationTime = 2
const bounceDelay = 0.3

export const ButtonDown = styled.button`
  background-color: transparent;
  border: 0;
  height: 56px;
  width: 140px;
  margin-top: 32px;

  &:hover {
    svg {
      filter: drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.7));
    }
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  svg {
    position: absolute;
    height: 32px;
    width: auto;
    animation: ${bounceAnimation} ${bounceAnimationTime}s ease-out infinite;
    color: var(--almost-white);
    transition: filter 0.3s ease;
  }

  svg:nth-child(1) {
    top: 0;
  }

  svg:nth-child(2) {
    top: 12px;
    animation-delay: -${bounceDelay}s;
  }

  svg:nth-child(3) {
    top: 24px;
    animation-delay: -${bounceDelay * 2}s;
  }

  @media screen and (min-width: 640px) {
    margin-top: 64px;
  }

  @media screen and (min-width: 1280px) {
  }
`
