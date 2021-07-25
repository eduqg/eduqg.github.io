import React from 'react'
import Link from 'next/link'

import { Container, Content } from '@/styles/pages/404'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          Tem algo de errado com esse link{' '}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </h1>
        <h2>Acho melhor voltar para a página inicial </h2>

        <Link href={`/`}>Voltar ao início</Link>
      </Content>
    </Container>
  )
}

export default NotFound
