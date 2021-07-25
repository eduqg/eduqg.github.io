import styled, { css, keyframes } from 'styled-components'
import { bounceAnimation, disableInteractons } from '@/styles/GlobalStyles'

import { IProjects } from './index'

interface IBackgroundImageProps {
  active: boolean
}

interface IBackgroundProps {
  activeBackground: IProjects | null
}

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 16px;

  > h1 {
    font-family: 'Encode Sans Condensed';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: 0em;
    text-align: left;
    color: var(--almost-white);
    margin-bottom: 16px;
  }

  @media screen and (min-width: 640px) {
    padding: 8vh 16px;
    > h1 {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    > h1 {
      margin-bottom: 48px;
    }
  }
`

export const ProjectsList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 10vh;
  margin-top: 24px;
`

export const ButtonProject = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  text-transform: uppercase;
  padding: 0;
  padding-bottom: 16px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 1s ease;

  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out, background-color 1s ease-in-out;
  position: relative;

  p {
    font-size: 1.8rem;
    line-height: 120%;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: left;
  }

  svg {
    width: 14px;
    height: 14px;
    margin-left: 8px;
    display: inline-block;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 90%;
    left: 0;
    width: 0;
    height: 2px;
    transform: translate(0, -50%);
    transition: width 0.3s ease;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 640px) {
    p {
      font-size: 3.2rem;
    }
    svg {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    p {
      font-size: 4.8rem;
    }
  }
`

export const ProjectTopics = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: relative;

  ${disableInteractons}

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (min-width: 640px) {
    &:before {
      position: absolute;
      left: -32px;
      top: 50%;
      content: '';
      width: 16px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.2);
      height: 4px;
    }
  }

  @media screen and (min-width: 640px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1280px) {
    p {
      font-size: 2rem;
    }
  }
`

export const fadeIn = keyframes`
  \ 0% {opacity: 0; transform: translate(-50%,-50%)}
  \ 100% {opacity: 1;transform: translate(-43%,-45%)}
`

export const fadeOut = keyframes`
  \ 0% {opacity: 1;transform: translate(-43%,-45%)}
  \ 100% {opacity: 0;transform:  translate(-50%,-50%)}
`

export const Background = styled.div<IBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  div.revin,
  div.pagestation,
  div.lifetoremind,
  div.meditana {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    transition: opacity 1s ease;
    box-shadow: inset 25px 25px 200px rgba(0, 0, 0, 0.3);
  }

  div.revin {
    background: linear-gradient(135deg, #1fd661 0%, #078233 100%);
    opacity: ${props => (props.activeBackground === 'revin' ? 1 : 0)};
  }

  div.pagestation {
    background: linear-gradient(135deg, #3d3b3e 0%, #19171f 100%);
    opacity: ${props => (props.activeBackground === 'pagestation' ? 1 : 0)};
  }

  div.lifetoremind {
    background: linear-gradient(135deg, #65b5e6 0%, #2987d0 100%);
    opacity: ${props => (props.activeBackground === 'lifetoremind' ? 1 : 0)};
  }

  div.meditana {
    background: linear-gradient(135deg, #fdca49 0%, #d8b4dc 100%);
    opacity: ${props => (props.activeBackground === 'meditana' ? 1 : 0)};
  }
`

export const BackgroundImage = styled.img<IBackgroundImageProps>`
  position: absolute;
  top: 55%;
  left: 54%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  transform-origin: center;
  width: 100%;
  max-width: 240px;
  height: auto;

  ${props =>
    props.active
      ? css`
          animation: ${fadeIn} 1s ease;
          animation-fill-mode: both;
        `
      : css`
          animation: ${fadeOut} 1s ease;
          animation-fill-mode: both;
        `}

  @media (min-width: 640px) {
    max-width: 360px;
  }

  @media (min-width: 1280px) {
    max-width: 480px;
  }
`

const bounceAnimationTime = 2
const bounceDelay = 0.3

export const ButtonDown = styled.button`
  background-color: transparent;
  border: 0;
  height: 56px;
  width: 140px;

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
`
