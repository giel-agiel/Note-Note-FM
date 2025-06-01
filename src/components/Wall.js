import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//import Cute3DScene from '../subComponents/Cute3DScene';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponents";
import SocialIcon from "../subComponents/SocialIcon";
import { NavLink } from "react-router-dom";
import Intro2 from "./Intro2";
import { motion } from "framer-motion";
import { Brand } from "./AllSvgs";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 800;
    color: #fff8e6;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  padding: 3rem;
`;

const Mainlink = styled(NavLink)`
  color: #fff8e6;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const OltConfigForm = styled(NavLink)`
  color: #fff8e6;
  position: absolute;
  top: 50%;
  right: calc(-1rem+0.3vw);
  transform: translate(-50%, -50%) rotate(90deg);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: #fff8e6;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: #fff8e6;
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: #fff8e6;
  text-decoration: none;
  z-index: 1;
`;

// simple rotation animation for viewer container
const Center = styled.div`
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
    }
    transform: scale(${(props) => (props.click ? 0.6 : 1)});
  }
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  top: ${(props) => (props.click ? "88%" : "50%")};
  left: ${(props) => (props.click ? "85%" : "50%")};
  transition: transform 0.5s ease;
  transform: translate(-50%, -50%);

  /* Glassmorphism Styles */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 50px;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};

  transition: width 1s ease 0.5s, height 0.5s ease;
  z-index: 1;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(10px);
`;

const Wall = () => {
  const [click, setClick] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (click) {
      gsap.to(textRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: "power1.out",
      });
    } else {
      gsap.to(textRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        delay: 0.5,
      });
    }
  }, [click]);

  return (
    <MainContainer>
      <VideoBackground autoPlay loop muted>
        <source src="/assets/images/5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Container>
        <DarkDiv click={click} />
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcon theme={click ? "dark" : "light"} />

        <Center click={click} onClick={() => setClick((prev) => !prev)}>
          <div className="wrapper">
            <Brand />
          </div>
          <span
            ref={textRef}
            style={{ position: "absolute", bottom: "10px", color: "#black" }}
          >
            <b></b>
          </span>
        </Center>

        <Mainlink to="/main" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.8 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            MAIN
          </motion.h2>
        </Mainlink>
        <OltConfigForm to="/olt">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.8 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            OLT CONFIG
          </motion.h2>
        </OltConfigForm>
        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.8 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            WORK
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.8 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.8 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              UPE Asr & NE.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click && <Intro2 click={click} />}
    </MainContainer>
  );
};

export default Wall;
