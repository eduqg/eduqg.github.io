import React, { useCallback, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const SEO = dynamic(() => import('../components/SEO'))
const Hero = dynamic(() => import('../components/Hero'))
const About = dynamic(() => import('../components/About'))
const Projects = dynamic(() => import('../components/Projects'))
const ContactMe = dynamic(() => import('../components/ContactMe'))
const CoverLoading = dynamic(() => import('../components/CoverLoading'))

import { Container, BlackBlueScreen } from '@/styles/pages/Home'

export type IScrollOptions = 'hero' | 'about' | 'projects' | 'contactme'

const delay = 5

const Home: React.FC = () => {
  const router = useRouter()
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactMeRef = useRef(null)
  const [disableCoverLoading, setDisableCoverLoading] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setDisableCoverLoading(true), delay * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const scrollToContent = useCallback((content: IScrollOptions) => {
    switch (content) {
      case 'hero':
        heroRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contactme':
        contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        heroRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  if (router.isFallback) {
    return <BlackBlueScreen />
  }

  return (
    <Container>
      <SEO
        title="Eduardo Quintino Gomes | Frontend e Design"
        image="logo.png"
        shouldExcludeTitleSuffix
        shouldIndexPage
      />

      <div ref={heroRef}>
        <Hero scrollToContent={scrollToContent} />
      </div>
      <div ref={aboutRef}>
        <About scrollToContent={scrollToContent} />
      </div>
      <div ref={projectsRef}>
        <Projects scrollToContent={scrollToContent} />
      </div>
      <div ref={contactMeRef}>
        <ContactMe scrollToContent={scrollToContent} />
      </div>

      <CoverLoading display={disableCoverLoading ? 'none' : 'flex'}></CoverLoading>
    </Container>
  )
}

export default Home
