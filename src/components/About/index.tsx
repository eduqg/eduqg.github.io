import React, { useCallback } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiCoffee, FiChevronDown } from 'react-icons/fi'

import { useTranslation } from '@/hooks/translation'
import { mailToLink } from '@/utils/emailMessage'

import {
  Container,
  Content,
  BottomButtons,
  Academic,
  AcademicList,
  AcademicItem,
  ButtonDown,
} from './styles'

import { IScrollOptions } from '@/pages'

interface IAboutProps {
  scrollToContent(content: IScrollOptions): void
}

const About: React.FC<IAboutProps> = ({ scrollToContent }) => {
  const { t } = useTranslation()

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
      <h1>{t.about_title}</h1>
      <Content>
        <div className="about">
          <h2>{t.about_hello}</h2>
          <h2>{t.about_paragraph}</h2>
        </div>

        <Academic>
          <h2>{t.about_academic_title}</h2>

          <AcademicList>
            <AcademicItem>
              <h2>{t.about_software_engineering}</h2>
              <h3>Universidade de Brasília - UnB/FGA</h3>
              <h3>{t.about_software_engineering_graduation}</h3>
            </AcademicItem>
            <AcademicItem>
              <h2>{t.about_design}</h2>
              <h3>Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS</h3>
              <h3>{t.about_design_postgraduate}</h3>
            </AcademicItem>
          </AcademicList>
        </Academic>

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
            onClick={() => handleGoTo(mailToLink)}
            onMouseDown={event => handleMouseDown(event, mailToLink)}
          >
            <FiMail />
          </button>

          <button
            type="button"
            onClick={() => handleGoTo('https://www.buymeacoffee.com/4GkjyuEN3')}
            onMouseDown={event => handleMouseDown(event, 'https://www.buymeacoffee.com/4GkjyuEN3')}
          >
            <FiCoffee />
          </button>
        </BottomButtons>

        <ButtonDown
          type="button"
          onClick={() => scrollToContent('projects')}
          aria-label="scroll-to-projects"
        >
          <div>
            <FiChevronDown />
            <FiChevronDown />
            <FiChevronDown />
          </div>
        </ButtonDown>
      </Content>

      <img
        src="about/waves1.svg"
        width="768"
        height="311"
        alt="Ondas Esquerda"
        className="wavesLeft"
      />
      <img
        src="about/waves2.svg"
        width="768"
        height="311"
        alt="Ondas Direita"
        className="wavesRight"
      />
    </Container>
  )
}

export default About
