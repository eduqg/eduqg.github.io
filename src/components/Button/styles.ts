import styled, { css } from 'styled-components'

interface IContainerButton {
  disabled: boolean
}

export const Container = styled.button<IContainerButton>`
  cursor: pointer;
  height: 44px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  width: 100%;
  outline: none;
  color: var(--almost-white);
  font-size: 20px;
  background: var(--primary);

  &:hover {
    background: var(--primary-dark);
  }

  ${props =>
    props.disabled &&
    css`
      background: var(--primary);
      pointer-events: none;
    `}

  transition: background 0.2s ease-in-out;
`
