import React from 'react'
import { useCallback } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiCoffee } from 'react-icons/fi'

import packageJson from '../../../package.json'
import { mailToLink } from '@/utils/emailMessage'

import {
  Container,
  Content,
  Info,
  BottomButtons,
  MailMeButton,
  ButtonScrollTop,
  Footer,
} from './styles'

import { IScrollOptions } from '@/pages'

interface IContactMeProps {
  scrollToContent(content: IScrollOptions): void
}

const ContactMe: React.FC<IContactMeProps> = ({ scrollToContent }) => {
  const handleMouseDown = useCallback((event, goToUrl: string) => {
    if (event.button === 1) {
      window.open(goToUrl)
    }
  }, [])

  const handleGoTo = useCallback((goToUrl: string) => {
    window.open(goToUrl)
  }, [])

  return (
    <Container>
      <h1>Contato</h1>
      <Content>
        <Info>
          <h2>Você gostaria de ajuda com algum projeto Frontend e/ou Design?</h2>
          <h3>Entre em contato!</h3>

          <MailMeButton
            type="button"
            onClick={() => window.open(mailToLink)}
            onMouseDown={event => handleMouseDown(event, mailToLink)}
          >
            <p>Me envie um e-mail</p>
            <FiMail />
          </MailMeButton>
          <h4>Feedbacks também são bem-vindos!</h4>
        </Info>

        <BottomButtons>
          <button
            type="button"
            onClick={() => handleGoTo('https://github.com/eduqg')}
            onMouseDown={event => handleMouseDown(event, 'https://github.com/eduqg')}
          >
            <FiGithub />
          </button>

          <button
            type="button"
            onClick={() => handleGoTo('https://www.linkedin.com/in/eduardo-quintino/')}
            onMouseDown={event =>
              handleMouseDown(event, 'https://www.linkedin.com/in/eduardo-quintino/')
            }
          >
            <FiLinkedin />
          </button>

          <button
            type="button"
            onClick={() => handleGoTo('https://www.buymeacoffee.com/4GkjyuEN3')}
            onMouseDown={event => handleMouseDown(event, 'https://www.buymeacoffee.com/4GkjyuEN3')}
          >
            <FiCoffee />
          </button>
        </BottomButtons>

        <ButtonScrollTop
          type="button"
          onClick={() => scrollToContent('hero')}
          aria-label="scroll-to-top"
        >
          Voltar ao início
        </ButtonScrollTop>

        <Footer>
          <h3 className="rights">eduqg 2021 &#xA9; All Rights Reserved.</h3>

          <h3 className="rights">v{packageJson.version}</h3>
        </Footer>
      </Content>
    </Container>
  )
}

export default ContactMe
