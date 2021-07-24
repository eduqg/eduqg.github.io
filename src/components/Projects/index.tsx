import React, { useState, useCallback } from 'react'
import { FiChevronDown, FiExternalLink } from 'react-icons/fi'

import {
  Container,
  Content,
  ProjectsList,
  ProjectItem,
  ButtonProject,
  ProjectTopics,
  Background,
  BackgroundImage,
  ButtonDown,
} from './styles'

export type IProjects = 'revin' | 'pagestation' | 'lifetoremind' | 'meditana'

interface IProjectsData {
  id: IProjects
  name: string
  topics: string[]
  projectUrl?: string
}

import { IScrollOptions } from '@/pages'

interface IAboutProps {
  scrollToContent(content: IScrollOptions): void
}

const projects: IProjectsData[] = [
  {
    id: 'revin',
    name: 'Revin',
    topics: ['Frontend', 'Integrante de Design'],
    projectUrl: 'https://revin.com.br',
  },
  {
    id: 'pagestation',
    name: 'PageStation',
    topics: ['Frontend', 'Pessoal'],
    projectUrl: 'https://ps5-inspired-ui-reactjs.netlify.app/',
  },
  {
    id: 'lifetoremind',
    name: 'Life to Remind',
    topics: ['FullStack', 'Design'],
    projectUrl: 'https://lifetoremindhub.herokuapp.com/',
  },
  {
    id: 'meditana',
    name: 'Meditana',
    topics: ['Frontend', 'Pessoal'],
    projectUrl: 'https://meditana-meditation.firebaseapp.com/',
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Projects: React.FC<IAboutProps> = ({ scrollToContent }) => {
  const [activeBackground, setActiveBackground] = useState<IProjects | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleActivateProject = useCallback(
    (projectName: IProjects) => {
      if (projectName !== activeBackground) {
        setActiveBackground(projectName)
      } else {
        setActiveBackground(null)
      }
    },
    [activeBackground],
  )

  const handleNavigateTo = useCallback((projectUrl: string) => {
    window.open(projectUrl)
  }, [])

  return (
    <Container>
      <Content>
        <h1>Projetos</h1>
        {projects.map(project => (
          <ProjectsList key={project.id}>
            <ProjectItem>
              <ButtonProject
                type="button"
                onClick={() => handleNavigateTo(project.projectUrl)}
                onMouseOver={() => setActiveBackground(project.id)}
              >
                <p>{project.name}</p>
                <FiExternalLink />
              </ButtonProject>

              <ProjectTopics>
                {project.topics.map(topic => (
                  <p key={topic}>{topic}</p>
                ))}
              </ProjectTopics>
            </ProjectItem>
          </ProjectsList>
        ))}

        <ButtonDown type="button" onClick={() => scrollToContent('contactme')}>
          <div>
            <FiChevronDown />
            <FiChevronDown />
            <FiChevronDown />
          </div>
        </ButtonDown>
      </Content>

      <Background activeBackground={activeBackground}>
        <div className="revin" />
        <BackgroundImage
          active={activeBackground === 'revin'}
          src="projects/revin.png"
          className="revin"
          alt="Revin"
        />

        <div className="pagestation" />
        <BackgroundImage
          active={activeBackground === 'pagestation'}
          src="projects/pagestation.png"
          className="pagestation"
          alt="PageStation"
        />

        <div className="lifetoremind" />
        <BackgroundImage
          active={activeBackground === 'lifetoremind'}
          src="projects/ltr.png"
          className="lifetoremind"
          alt="Life to Remind"
        />

        <div className="meditana" />
        <BackgroundImage
          active={activeBackground === 'meditana'}
          src="projects/meditana.png"
          className="meditana"
          alt="Meditana"
        />
      </Background>
    </Container>
  )
}
