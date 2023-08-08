import React, { useState } from 'react'
import { useCallback } from 'react'
import { FiGithub, FiLinkedin, FiCoffee } from 'react-icons/fi'
import { MdContentCopy } from 'react-icons/md'

import packageJson from '../../../package.json'
import { useTranslation } from '@/hooks/translation'

import Snackbar from '../Snackbar'

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
  const [showSnackbarCopied, setShowSnackbarCopied] = useState(false)
  const { t } = useTranslation()

  const copyEmail = 'eduardoqgomes@gmail.com'

  const handleMouseDown = useCallback((event, goToUrl: string) => {
    if (event.button === 1) {
      window.open(goToUrl)
    }
  }, [])

  const handleGoTo = useCallback((goToUrl: string) => {
    window.open(goToUrl)
  }, [])

  const handleCopyEmail = useCallback(() => {
    setShowSnackbarCopied(true)
    navigator.clipboard.writeText(copyEmail)
  }, [])

  const year = new Date().getFullYear()

  return (
    <Container>
      <h1>{t.contact_title}</h1>

      <Content>
        <Info>
          <h2>{t.contact_paragraph}</h2>
          <h3>{t.contact_contact_me}</h3>

          <MailMeButton type="button" onClick={handleCopyEmail} onMouseDown={handleCopyEmail}>
            <p>{copyEmail}</p>
            <MdContentCopy size={20} />
          </MailMeButton>
          <h4>{t.contact_feedback}</h4>
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
          {t.contact_back_to_top}
        </ButtonScrollTop>
      </Content>

      {showSnackbarCopied && (
        <Snackbar setShow={setShowSnackbarCopied} text={t.contact_send_email} />
      )}

      <Footer>
        <h3 className="rights">eduqg {year} &#xA9; All Rights Reserved.</h3>

        <h3 className="rights">v{packageJson.version}</h3>
      </Footer>
    </Container>
  )
}

export default ContactMe
