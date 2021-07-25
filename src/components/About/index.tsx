import React from 'react'
import { useCallback } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiCoffee, FiChevronDown } from 'react-icons/fi'

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
      <h1>Sobre</h1>
      <Content>
        <div className="about">
          <h2>Olá, meu nome é Eduardo.</h2>
          <h2>
            Sou Engenheiro de Software apaixonado por Frontend e Design. Atualmente trabalho com
            desenvolvimento em ReactJS e React Native e Design utilizando Figma.
          </h2>
        </div>

        <Academic>
          <h2>Formação Acadêmica</h2>

          <AcademicList>
            <AcademicItem>
              <h2>Engenharia de Software</h2>
              <h3>Universidade de Brasília - UnB/FGA</h3>
              <h3>Graduação</h3>
            </AcademicItem>
            <AcademicItem>
              <h2>User Experience Design and Beyond</h2>
              <h3>Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS</h3>
              <h3>Pós-Graduação em andamento</h3>
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

        <ButtonDown type="button" onClick={() => scrollToContent('projects')}>
          <div>
            <FiChevronDown />
            <FiChevronDown />
            <FiChevronDown />
          </div>
        </ButtonDown>
      </Content>

      <img src="waves1.svg" alt="Ondas Esquerda" className="wavesLeft" />
      <img src="waves2.svg" alt="Ondas Direita" className="wavesRight" />
    </Container>
  )
}

export default About
