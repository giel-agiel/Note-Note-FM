import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
//import Cute3DScene from '../subComponents/Cute3DScene';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponents";
import SocialIcon from "../subComponents/SocialIcon";
import { NavLink } from "react-router-dom";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { Deliveroo } from "./AllSvgs";
import ParticleComponent from "../subComponents/ParticleComponent";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
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
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 3rem;
`;

const WallLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
   @media (max-width: 768px) {
    top: 3rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const bounceAnimation = keyframes`
  0% { transform: translateY(-300px); }
  30% { transform: translateY(0px); }
  50% { transform: translateY(-100px); }
  70% { transform: translateY(0px); }
  100% { transform: translateY(30px); }
`;
const OltConfigForm = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(-2.5rem + 1vw);
  transform: rotate(90deg);
  text-decoration: none;
  z-index: 1;
   @media (max-width: 768px) {
    top: 50%;
    font-size: 0.9rem;
      left: calc(-2.5rem + 1.8vw);

  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(-3rem + 1vw);
  transform: rotate(-90deg);
  text-decoration: none;
  z-index: 1;
   @media (max-width: 768px) {
    top: 50%;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
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
  animation: ${bounceAnimation} 2s ease;
  transition: transform 0.5s ease;
  transform: translate(-50%, -50%);
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  background-color: #2c7a7b;
  transition: width 1s ease 0.5s, height 0.5s ease;
  z-index: 1;
`;

const LogoutButton = styled.button`
  position: fixed;
  left: 12rem;
  top: 3rem;
  z-index: 10;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text}; /* Sesuaikan dengan tema */
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-family: inherit;
  margin-left: 5rem;

  &:hover {
    opacity: 0.8;
  }
    @media (max-width: 768px) {
    width: 30%;
margin-left: 5rem; }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <Container>
        <DarkDiv click={click} />
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcon theme={click ? "dark" : "light"} />
        {!isMobile && <ParticleComponent theme="light" />}

        <Center click={click} onClick={() => setClick((prev) => !prev)}>
          <div className="wrapper">
            <Deliveroo />
          </div>
          <span
            ref={textRef}
            style={{ position: "absolute", bottom: "10px", color: "#black" }}
          >
            <b></b>
          </span>
        </Center>

        <WallLink to="/wall" click={click}>
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
            WALL me
          </motion.h2>
        </WallLink>
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
            Catatan Config.
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
              Catatan Kerja.
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
        <LogoutButton
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.reload();
          }}
        >
          Logout
        </LogoutButton>
      </Container>
      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
