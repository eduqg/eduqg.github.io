import styled, { css, keyframes } from 'styled-components'
import { appearFromBottom, disableInteractons } from '@/styles/GlobalStyles'

interface ISelectLanguageProps {
  selectedLanguage: 'portuguese' | 'english'
}

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: var(--black-blue);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: url('light-aluminum.png');
    opacity: 0.15;
    transform: scaleX(-1);
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    pointer-events: none;
    user-select: none;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  z-index: 100;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;

  @media screen and (min-width: 640px) {
    height: 156px;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
  }
`

const appearItemsTime = 1
const apperItemsDelay = 0.3
const coverLoadingTime = 2

export const ButtonProfile = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background-color: transparent;

  img.me {
    border-radius: 50%;
    height: 48px;
    width: 48px;
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime}s;
    background-color: transparent;
    animation-fill-mode: both;
  }
`

export const SelectLanguage = styled.div<ISelectLanguageProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  img.brazil,
  img.usa {
    height: 16px;
    width: auto;
  }

  img.brazil {
  }

  img.usa {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 2}s;
    animation-fill-mode: both;
  }

  button.portuguese,
  button.english {
    background-color: transparent;
    border: 0;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    position: relative;
    opacity: 0.8;
    width: 40px;
    margin: 0 auto;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 110%;
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

  ${props =>
    props.selectedLanguage === 'portuguese'
      ? css`
          button.portuguese {
            opacity: 1;
            background-color: rgba(255, 255, 255, 0.2);
            animation: ${appearFromBottom} ${appearItemsTime}s ease;
            animation-delay: ${coverLoadingTime + apperItemsDelay}s;
            animation-fill-mode: both;
          }
        `
      : css`
          button.english {
            opacity: 1;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}

  @media screen and (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
    gap: 4px;
    margin-left: 12px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 640px) {
    gap: 1.6rem;
  }
`

export const ButtonHeader = styled.button`
  background-color: transparent;
  border: 0;
  font-family: 'Encode Sans Condensed';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.08rem;
  text-align: right;
  padding-left: 2px;
  padding-right: 2px;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  position: relative;
  opacity: 0.8;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 110%;
    left: 0;
    width: 0;
    height: 2px;
    transform: translate(10%, -50%);
    transition: width 0.5s ease;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 80%;
  }

  &.home {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 3}s;
    animation-fill-mode: both;
  }
  &.about {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 4}s;
    animation-fill-mode: both;
  }
  &.projects {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 5}s;
    animation-fill-mode: both;
  }
  &.contactme {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 6}s;
    animation-fill-mode: both;
  }

  @media screen and (min-width: 640px) {
    font-size: 2rem;
    padding-left: 4px;
    padding-right: 4px;
  }
`

export const Content = styled.div`
  height: calc(100% - 2 * 96px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;

  h1 {
    font-family: 'Encode Sans Condensed';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 8rem;
    color: var(--almost-white);

    background: linear-gradient(225deg, #bfc9ff 0%, #fcfceb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 7}s;
    animation-fill-mode: both;
  }

  h2 {
    font-family: 'Encode Sans Condensed';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: 0em;
    color: var(--almost-white);

    background: linear-gradient(225deg, #fcfceb 0%, #bfc9ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2.frontend {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 8}s;
    animation-fill-mode: both;
  }

  h2.designer {
    animation: ${appearFromBottom} ${appearItemsTime}s ease;
    animation-delay: ${coverLoadingTime + apperItemsDelay * 9}s;
    animation-fill-mode: both;
  }

  @media screen and (min-width: 640px) {
    padding-top: 20vh;
    height: calc(100% - 2 * 156px);

    h1 {
      font-size: 4.8rem;
      line-height: 8rem;
    }

    h2 {
      font-size: 3.6rem;
      line-height: 6rem;
    }
  }

  @media screen and (min-width: 1280px) {
    h1 {
      font-size: 4.8rem;
      line-height: 8rem;
    }

    h2 {
      font-size: 3.6rem;
      line-height: 6rem;
    }
  }
`

const bounceAnimation = keyframes`
  \ 0% {
    -webkit-transform: translateY(0);
  }
  \ 75% {
    -webkit-transform: translateY(-4px);
  }
  \ 100% {
    -webkit-transform: translateY(0);
  }
`

const bounceAnimationTime = 2
const bounceDelay = 0.3

export const ButtonDown = styled.button`
  position: absolute;
  bottom: 18vh;
  left: calc(50% - 70px);
  background-color: transparent;
  border: 0;
  height: 56px;
  width: 140px;
  animation: ${appearFromBottom} ${appearItemsTime}s ease;
  animation-delay: ${coverLoadingTime + apperItemsDelay * 10}s;
  animation-fill-mode: both;

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
    bottom: 10vh;
  }

  @media screen and (min-width: 1280px) {
    bottom: 6vh;
  }
`

export const BackgroundStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url('stars.svg');
  height: 100%;
  width: 100%;
  opacity: 0.5;

  ${disableInteractons}
`

const GradientAnimation = keyframes`
  \ 0% {
    background-position: 5% 0%;
  }
  \ 50% {
    background-position: 96% 100%;
  }
  \ 100% {
    background-position: 5% 0%;
  }
`

export const AnimationGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #080b1c, #192258);
  background-size: 200% 200%;
  animation: ${GradientAnimation} 8s cubi infinite;
  height: 100%;
  width: 100%;
  ${disableInteractons}
`

// Northean Lights

export const NorthenLights = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url('northernLights.svg') center no-repeat;
  height: 100%;
  width: 100%;
  opacity: 1;
  ${disableInteractons}
`

const SlideUpDown = keyframes`
  \ 0% {
    transform: translate(160px,-377px);
  }
  \ 100% {
    transform: translate(0,0);
  }
`

const animationTime = 5
const numberOfLayers = 10

export const NorthenLightsEffect = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${disableInteractons}

  div.lights {
    position: absolute;
    top: -200px;
    left: -200px;
    width: 190%;
    height: 200%;
    z-index: 10;

    @media screen and (min-width: 640px) {
      top: 0px;
      left: -300px;
      width: 180%;
      height: 150%;
      animation: ${SlideUpDown} ${animationTime}s ease-in infinite alternate;
    }

    @media screen and (min-width: 1280px) {
      top: 200px;
      left: -800px;
      width: 180%;
      height: 150%;
    }
  }

  div.lightsA {
    background: url('rectanglesA.svg') center no-repeat;
  }

  div.lightsF {
    animation-delay: -${animationTime / numberOfLayers}s;
    background: url('rectanglesB.svg') center no-repeat;
  }

  div.lightsB {
    animation-delay: -${(animationTime * 2) / numberOfLayers}s;
    background: url('rectanglesC.svg') center no-repeat;
  }

  div.lightsG {
    animation: ${SlideUpDown} ${animationTime}s ease-in-out infinite alternate;
    animation-delay: -${(animationTime * 3) / numberOfLayers}s;
    background: url('rectanglesD.svg') center no-repeat;
  }

  div.lightsC {
    animation-delay: -${(animationTime * 4) / numberOfLayers}s;
    background: url('rectanglesE.svg') center no-repeat;
  }

  div.lightsH {
    animation-delay: -${(animationTime * 5) / numberOfLayers}s;
    background: url('rectanglesF.svg') center no-repeat;
  }

  div.lightsD {
    animation-delay: -${(animationTime * 6) / numberOfLayers}s;
    background: url('rectanglesG.svg') center no-repeat;
  }

  div.lightsI {
    animation-delay: -${(animationTime * 7) / numberOfLayers}s;
    background: url('rectanglesH.svg') center no-repeat;
  }

  div.lightsE {
    animation-delay: -${(animationTime * 8) / numberOfLayers}s;
    background: url('rectanglesI.svg') center no-repeat;
  }

  div.lightsJ {
    animation-delay: -${(animationTime * 9) / numberOfLayers}s;
    background: url('rectanglesJ.svg') center no-repeat;
  }
`

// Comets

// -->
const fallingComet1 = keyframes`
  \ 0% {
    -webkit-transform:translate(-40vw,10vh) rotate(110deg);
  }

  \ 30% {
    -webkit-transform: translate(120vw,70vh) rotate(110deg);
    opacity: 0;
  }

  \ 100% {
    -webkit-transform: translate(120vw,70vh) rotate(110deg);
    opacity: 0;
  }
`

// <--
const fallingComet2 = keyframes`
  \ 0% {
    -webkit-transform:translate(130vw, 10vh) rotate(-102deg);
  }

  \ 30% {
    -webkit-transform: translate(-80vw, 60vh) rotate(-105deg);
    opacity: 0;
  }

  \ 100% {
    -webkit-transform: translate(-80vw, 60vh) rotate(-105deg);
    opacity: 0;
  }
`
// -->
const fallingComet3 = keyframes`
  \ 0% {
    -webkit-transform: translate(30vw,-40vh) rotate(160deg);
  }

  \ 30% {
    -webkit-transform: translate(80vw,120vh) rotate(160deg);
    opacity: 0;
  }

  \ 100% {
    -webkit-transform: translate(80vw,120vh) rotate(160deg);
    opacity: 0;
  }
`

export const Comets = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  div {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  i {
    display: inline-block;
    position: absolute;
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px #fff;
    border: 1px solid #333;
    z-index: 1;
    background-color: #fff;
  }

  i:nth-child(1) {
    height: 5px;
    width: 4px;
    animation: ${fallingComet1} 10s 0s ease infinite;
    background-color: #fff;
  }

  i:nth-child(2) {
    height: 20px;
    width: 4px;
    animation: ${fallingComet2} 8s 0s ease infinite;
    background-color: #fff;
    animation-delay: -7s;
    opacity: 0.7;
  }

  i:nth-child(3) {
    height: 6px;
    width: 3px;
    animation: ${fallingComet3} 9s 3s ease infinite;
    background-color: #fff;
    animation-delay: -4s;
  }
`
