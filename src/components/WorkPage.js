import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import { OLTCommandGuide } from '../data/HuaweiConfig'
import Card from '../subComponents/Card'
import { Brand } from './AllSvgs'
import { motion } from 'framer-motion'
import { RaisecomCommandGuide } from '../data/RaisecomConfig'
import { ZTECommandGuide } from '../data/ZTEConfig'
import { BDCOMConfigGuide } from '../data/BdcomConfig'
import { FiberhomeConfigGuide } from '../data/FiberhomeConfig'
import { MikrotikConfigGuide } from '../data/MikrotikConfig'
import { ZyxelConfigGuide } from '../data/Convent'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.text};
    border-radius: 6px;
  }
`;

const Main = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  padding: 5rem 10rem;
  list-style: none;
  color: white;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  & > li {
    scroll-snap-align: center;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.text};
    border-radius: 4px;
  }
`;

const CardWrapper = styled.li`
  flex: 0 0 auto; /* fix width, prevent shrinking */
  list-style: none;
  display: inline-block;
`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 50px;
  height: 50px;
  z-index: 1;
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
}

const WorkPage = () => {
  const brand = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (brand.current) {
        brand.current.style.transform = `rotate(${-window.pageYOffset}deg)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcon theme="dark" />
        <PowerButton />
        <Main variants={container} initial="hidden" animate="show">
            <CardWrapper>
              <Card data={OLTCommandGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={RaisecomCommandGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={ZTECommandGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={BDCOMConfigGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={FiberhomeConfigGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={MikrotikConfigGuide} />
            </CardWrapper>
            <CardWrapper>
            <Card data={ZyxelConfigGuide} />
            </CardWrapper>

        </Main>
        <Rotate ref={brand}>
          <Brand width={120} height={120} fill={DarkTheme.text} />
        </Rotate>

      </Box>
    </ThemeProvider>
  )
}

export default WorkPage
