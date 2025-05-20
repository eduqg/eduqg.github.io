import React from 'react'
import { useCallback } from 'react'
import { FiGithub, FiCoffee } from 'react-icons/fi'

import packageJson from '../../../package.json'
import { useTranslation } from '@/hooks/translation'

import {
  Container,
  Content,
  Info,
  BottomButtons,
  ButtonScrollTop,
  Footer,
  Anchor,
  FooterText,
  List,
  AnchorContainer,
} from './styles'

import { IScrollOptions } from '@/pages'
import { linkedin } from '@/constants/social'

interface IContactMeProps {
  scrollToContent(content: IScrollOptions): void
}

const ContactMe: React.FC<IContactMeProps> = ({ scrollToContent }) => {
  const { t } = useTranslation()

  const handleMouseDown = useCallback((event, goToUrl: string) => {
    if (event.button === 1) {
      window.open(goToUrl)
    }
  }, [])

  const handleGoTo = useCallback((goToUrl: string) => {
    window.open(goToUrl, '_blank')
  }, [])

  const year = new Date().getFullYear()

  return (
    <Container>
      <h1>{t.contact_title}</h1>

      <Content>
        <Info>
          <p>{t.contact_subtitle}</p>
          <List>
            <li>{t.contact_list_item_1}</li>
            <li>{t.contact_list_item_2}</li>
            <li>{t.contact_list_item_3}</li>
          </List>
          <p style={{ textAlign: 'center', paddingTop: '24px' }}>{t.contact_paragraph_2}</p>

          <AnchorContainer>
            <Anchor href={linkedin} target="_blank">
              <img src="/eduardo.png" alt="Eduardo Quintino" />
              {t.contact_linkedin}
            </Anchor>
          </AnchorContainer>

          <FooterText>{t.contact_feedback}</FooterText>
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

      <Footer>
        <h3 className="rights">eduqg {year} &#xA9; All Rights Reserved.</h3>

        <h3 className="rights">v{packageJson.version}</h3>
      </Footer>
    </Container>
  )
}

export default ContactMe
