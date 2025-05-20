import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    text-align: center;
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
  margin-top: 10vh;
`

export const Info = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  max-width: 600px;

  p {
    font-size: 1.6rem;
    color: white;
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
  align-items: center;
  width: 100%;
  height: 70%;
  max-width: 1440px;
  padding: 0 16px;
  font-size: 1.6rem;
  line-height: 120%;
  margin-top: auto;

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

export const List = styled.ul`
  list-style: none;
  padding: 16px 0;
  max-width: 600px;
  text-align: left;

  li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    color: #ffffff;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: white;
      font-size: 1.25rem;
      line-height: 1;
    }
  }
`

export const AnchorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;
`

export const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #085eb4;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 6px;
  transition: background-color 0.1s ease;
  font-size: 14px;
  width: 100%;
  max-width: 300px;

  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 0.75rem;
  }

  &:hover {
    background-color: rgb(9, 71, 133);
  }
`

export const FooterText = styled.p`
  font-size: 1rem;
  color: #cccccc;
  text-align: center;
`
