import React, { ButtonHTMLAttributes } from 'react'

import LoadingAnimation from '../LoadingAnimation'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, loading, disabled = false, ...rest }) => {
  return (
    <Container type="button" disabled={disabled} {...rest}>
      {loading ? <LoadingAnimation /> : children}
    </Container>
  )
}
