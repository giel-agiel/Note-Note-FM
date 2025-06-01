import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
//import Cute3DScene from '../subComponents/Cute3DScene';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponents';
import SocialIcon from '../subComponents/SocialIcon';
import { NavLink } from 'react-router-dom';
import Intro2 from './Intro2';
import { motion } from 'framer-motion';
import { Brand } from './AllSvgs';

const fadeBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MainContainer = styled.div`
  animation: ${fadeBackground} 15s ease infinite;
background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,h3,h4,h5,h6 { font-family: 'Karla', sans-serif; font-weight: 500; }
`;

const Container = styled.div` 
  padding: 3rem; `;

const Mainlink = styled(NavLink)`
  color: #FFF8E6;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const bounceAnimation = keyframes`
  0% { transform: translateY(-300px); }
  30% { transform: translateY(0px); }
  50% { transform: translateY(-100px); }
  70% { transform: translateY(-50px); }
  100% { transform: translateY(0px); }
`;
const OltConfigForm = styled(NavLink)`
  color: #FFF8E6; position:absolute;
   top:50%;
    right:calc(-1rem+0.3vw);
  transform:translate(-50%,-50%) rotate(90deg);
   text-decoration:none; z-index:1;
`;
const WORK = styled(NavLink)`
  color: #FFF8E6;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
position:absolute;
 bottom:1rem; left:0; 
 right:0; width:100%; 
 display:flex; 
 justify-content:space-evenly;
 `;
const ABOUT = styled(NavLink)`
  color: #FFF8E6;
  text-decoration:none;
   z-index:1;
`;
const SKILLS = styled(NavLink)`
color: #FFF8E6;
 text-decoration:none;
  z-index:1;`;

// simple rotation animation for viewer container
const Center = styled.div`
.wrapper {
    position:relative; 
    display:flex; justify-content:center; align-items:center;
    svg { width:100%; height:100%; }
      transform: scale(${props => (props.click ? 0.6 : 1)});

  }
  position:absolute;
  width:100px; 
  height:100px; 
  cursor:pointer;
  top:${props => (props.click ? '88%' : '50%')};
  left:${props => (props.click ? '85%' : '50%')}; 
  animation: ${bounceAnimation} 2s ease;
  transition: transform 0.5s ease;
  transform: translate(-50%, -50%);
  
  /* Glassmorphism Styles */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 50px;

`;
const DarkDiv = styled.div`
  position:absolute; top:0; right:50%;
  width:${props => (props.click ? '50%' : '0%')};
  height:${props => (props.click ? '100%' : '0%')};

  transition:width 1s ease 0.5s, height 0.5s ease; z-index:1;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(10px);
`;

const Wall = () => {
  const [click, setClick] = useState(false);
  const textRef = useRef(null);
  const [bgImage, setBgImage] = useState('/assets/images/1.jpg');


 useEffect(() => {
  const imageArray = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
  ];

  let index = 0;
  const updateBg = () => {
    setBgImage(imageArray[index]);
    index = (index + 1) % imageArray.length;
  };

  updateBg(); // set awal
  const interval = setInterval(updateBg, 5000);

  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    if (click) {
      gsap.to(textRef.current, { duration:0.5, opacity:0, y:-20, ease:'power1.out' });
    } else {
      gsap.to(textRef.current, { duration:0.5, opacity:1, y:0, ease:'power1.inOut', delay:0.5 });
    }
  }, [click]);


  return (
<MainContainer bgImage={bgImage}>
      <Container>
        <DarkDiv click={click} />
        <PowerButton />
        <LogoComponent theme={click? 'dark':'light'} />
        <SocialIcon theme={click? 'dark':'light'} />

        <Center click={click} onClick={() => setClick(prev => !prev)}>
  <div className="wrapper">
    <Brand />
  </div>
  <span ref={textRef} style={{ position:'absolute', bottom:'10px', color:'#black' }}><b></b></span>
</Center>

        <Mainlink to="/main" click={click}>
          <motion.h2 initial={{ y:-200, transition:{ type:'spring', duration:1.5, delay:1 } }}
                    animate={{ y:0, transition:{ type:'spring', duration:1.5, delay:0.8 } }}
                    whileHover={{ scale:1.2 }} whileTap={{ scale:0.9 }}>MAIN</motion.h2>
        </Mainlink>
       <OltConfigForm to="/olt"><motion.h2 initial={{ y:-200, transition:{ type:'spring', duration:1.5, delay:1 } }}
                                        animate={{ y:0, transition:{ type:'spring', duration:1.5, delay:0.8 } }}
                                        whileHover={{ scale:1.2 }} whileTap={{ scale:0.9 }}>OLT CONFIG</motion.h2></OltConfigForm>
        <WORK to="/work" click={click}><motion.h2 initial={{ y:-200, transition:{ type:'spring', duration:1.5, delay:1 } }}
                                                 animate={{ y:0, transition:{ type:'spring', duration:1.5, delay:0.8 } }}
                                                 whileHover={{ scale:1.2 }} whileTap={{ scale:0.9 }}>WORK</motion.h2></WORK>
        <BottomBar>
          <ABOUT to="/about" click={click}><motion.h2 initial={{ y:200, transition:{ type:'spring', duration:1.5, delay:1 } }}
                                                     animate={{ y:0, transition:{ type:'spring', duration:1.5, delay:0.8 } }}
                                                     whileHover={{ scale:1.2 }} whileTap={{ scale:0.9 }}>About.</motion.h2></ABOUT>
          <SKILLS to="/skills"><motion.h2 initial={{ y:200, transition:{ type:'spring', duration:1.5, delay:1 } }}
                                                animate={{ y:0, transition:{ type:'spring', duration:1.5, delay:0.8 } }}
                                                whileHover={{ scale:1.2 }} whileTap={{ scale:0.9 }}>UPE Asr & NE.</motion.h2></SKILLS>
        </BottomBar>
      </Container>
      {click && <Intro2 click={click} />}
    </MainContainer>
  );
};

export default Wall;
