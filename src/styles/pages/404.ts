import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  padding: 0 8px;

  h1 {
    font-weight: bold;
    font-size: 3.6rem;
    color: #fdfdfd;
    text-align: center;
    margin-bottom: 32px;
    line-height: 120%;
  }

  h2 + h2 {
    margin-top: 8px;
  }

  h2 {
    font-style: normal;
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: var(--color-text-light-gray-blue);
    text-align: center;
    line-height: 140%;
    margin-bottom: 32px;
  }

  a {
    width: 100%;
    color: var(--primary);
    background-color: var(--almost-white);
    margin-top: 16px;
    text-decoration: none;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`
