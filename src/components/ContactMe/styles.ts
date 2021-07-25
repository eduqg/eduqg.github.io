import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
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
    background: url('light-aluminum.png');
    opacity: 0.15;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    pointer-events: none;
    user-select: none;
  }

  @media screen and (min-width: 640px) {
    padding: 8vh 0 16px 0;
    > h1 {
      margin-bottom: 48px;
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
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 70%;
  max-width: 1440px;
  padding: 0 16px;
  margin-top: auto;
`

export const Info = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    line-height: 140%;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 16px;
    max-width: 460px;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 200%;
    font-style: normal;
    font-weight: bolder;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
  }

  h4 {
    padding-top: 16px;
  }

  @media screen and (min-width: 640px) {
    h2 {
      font-size: 2.2rem;
      line-height: 140%;
    }
    h3 {
      font-size: 2.4rem;
      line-height: 200%;
    }
  }

  @media screen and (min-width: 1280px) {
    h2 {
      font-size: 2.4rem;
      line-height: 140%;
    }
    h3 {
      font-size: 2.4rem;
      line-height: 200%;
    }
  }
`

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
  margin: auto auto 0 auto;

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

    svg {
      width: 24px;
      height: 24px;
      margin: 0 16px;
    }

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

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const MailMeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 32px;
  cursor: pointer;
  height: 50px;
  text-align: center;
  border: none;
  background-size: 200% 100%;
  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(to right, #3268d2, #6b8dd6, #6437de);
  box-shadow: 0 4px 10px 0 rgba(116, 79, 168, 0.75);
  margin-top: 8px;
  margin-bottom: 24px;

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`
export const ButtonScrollTop = styled.button`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  background-color: transparent;
  height: 50px;
  padding: 0 16px;
  border: 0;
  margin: 64px auto;

  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  position: relative;
  opacity: 0.8;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 90%;
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
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;
  line-height: 120%;

  h3 {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    opacity: 0.8;
  }
`
