import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { Container, Content } from '@/styles/pages/404'

import { GetStaticProps } from 'next'

const NotFound: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Content>
        <h1>
          {t('404_title')}{' '}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </h1>
        <h2>{t('404_description')}</h2>

        <Link href={`/`}>{t('404_go_back')}</Link>
      </Content>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default NotFound
