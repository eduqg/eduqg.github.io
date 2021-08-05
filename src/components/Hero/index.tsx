import React, { useCallback } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { useTranslation } from '@/hooks/translation'

import {
  Wrapper,
  Container,
  Header,
  HeaderLeft,
  ButtonProfile,
  HeaderRight,
  SelectLanguage,
  ButtonHeader,
  Content,
  ButtonDown,
  BackgroundStars,
  NorthenLights,
  NorthenLightsEffect,
  Comets,
} from './styles'

import { IScrollOptions } from '@/pages'

interface IHeroProps {
  scrollToContent(content: IScrollOptions): void
}

const Hero: React.FC<IHeroProps> = ({ scrollToContent }) => {
  const { t, updateLanguage } = useTranslation()

  const handleMouseDown = useCallback((event, goToUrl: string) => {
    if (event.button === 1) {
      window.open(goToUrl)
    }
  }, [])

  const handleGoToProfile = useCallback(() => {
    window.open('https://github.com/eduqg')
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderLeft>
            <ButtonProfile
              type="button"
              onClick={handleGoToProfile}
              onMouseDown={event => handleMouseDown(event, 'https://github.com/eduqg')}
            >
              <img src="hero/me.webp" width="48" height="48" className="me" alt="Eduardo" />
            </ButtonProfile>

            <SelectLanguage selectedLanguage={t.language}>
              <button type="button" onClick={() => updateLanguage({ language: 'pt-br' })}>
                <div className="portuguese">
                  <img
                    src="hero/brazil.webp"
                    width="25"
                    height="16"
                    className="brazil"
                    alt="Brazil Flag"
                  />
                </div>
              </button>

              <button type="button" onClick={() => updateLanguage({ language: 'en' })}>
                <div className="english">
                  <img
                    src="hero/usa.webp"
                    width="25"
                    height="16"
                    className="usa"
                    alt="United States Flag"
                  />
                </div>
              </button>
            </SelectLanguage>
          </HeaderLeft>

          <HeaderRight>
            <ButtonHeader type="button" onClick={() => scrollToContent('hero')} className="home">
              {t.home_link}
            </ButtonHeader>
            <ButtonHeader type="button" onClick={() => scrollToContent('about')} className="about">
              {t.about_link}
            </ButtonHeader>
            <ButtonHeader
              type="button"
              onClick={() => scrollToContent('projects')}
              className="projects"
            >
              {t.projects_link}
            </ButtonHeader>
            <ButtonHeader
              type="button"
              onClick={() => scrollToContent('contactme')}
              className="contactme"
            >
              {t.contact_link}
            </ButtonHeader>
          </HeaderRight>
        </Header>
        <Content>
          <h1>Eduardo Quintino Gomes</h1>
          <h2 className="frontend"> {t.frontend_role}</h2>
          <h2 className="designer"> {t.design_role}</h2>

          <ButtonDown
            type="button"
            onClick={() => scrollToContent('about')}
            aria-label="scroll-to-about"
          >
            <div>
              <FiChevronDown />
              <FiChevronDown />
              <FiChevronDown />
            </div>
          </ButtonDown>
        </Content>
      </Container>

      <BackgroundStars />
      <NorthenLights />
      <NorthenLightsEffect>
        <div className="lights lightsA" />
        <div className="lights lightsB" />
        <div className="lights lightsC" />
        <div className="lights lightsD" />
        <div className="lights lightsE" />
        <div className="lights lightsF" />
        <div className="lights lightsG" />
        <div className="lights lightsH" />
        <div className="lights lightsI" />
        <div className="lights lightsJ" />
      </NorthenLightsEffect>
      <Comets>
        <i />
        <i />
        <i />
      </Comets>
    </Wrapper>
  )
}

export default Hero
