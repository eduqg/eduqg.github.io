import React, { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import { Container } from './styles'

interface ISnackbar {
  setShow: (data: boolean) => void
  text: string
}

const Snackbar: React.FC<ISnackbar> = ({ setShow, text }) => {
  const [removeAnimation, setRemoveAnimation] = useState(false)

  useEffect(() => {
    const timerRemoveAnimation = setTimeout(() => setRemoveAnimation(true), 3000)

    return () => {
      clearTimeout(timerRemoveAnimation)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [setShow])

  return (
    <Container id="snackbar" className={removeAnimation ? 'hide-animation' : ''}>
      <div className="check">
        <FiCheck />
      </div>
      <p>{text}</p>
    </Container>
  )
}

export default Snackbar
