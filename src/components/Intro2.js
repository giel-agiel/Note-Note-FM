import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Form, Container, Button } from 'react-bootstrap'
import  Vlan  from '../data/VlanData'
import cartoon from '../assets/Images/cartoon.webp'

const Intro = () => {
  const [vlanInput, setVlanInput] = useState('')
  const [regionInput, setRegionInput] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const searchId = vlanInput.trim() === '' ? null : Number(vlanInput)

    // Flatten nested Vlan data
    const flatList = []
    Vlan.forEach(regionObj => {
      Object.values(regionObj).forEach(entries => {
        entries.forEach(item => {
          flatList.push(item)
        })
      })
    })

    // Filter by VLAN ID and/or region
    const filtered = flatList.filter(item => {
      const matchVlan = searchId === null || item.vlan.includes(searchId)
      const matchRegion = regionInput.trim() === '' ||
        item.region.toLowerCase().includes(regionInput.toLowerCase())
      return matchVlan && matchRegion
    })

    // Map to only name and writeText
    setResults(filtered.map(item => ({
      name: item.name,
      writeText: item.writeText
    })))
  }

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied: ' + text))
      .catch(err => console.error('Copy failed', err))
  }

  return (
    <Box>
      <ContainerWrapper>


        <StyledForm onSubmit={handleSubmit}>
          <Form.Group controlId="vlan">
            <Form.Label>VLAN ID</Form.Label>
            <Form.Control
              type="number"
              value={vlanInput}
              onChange={e => setVlanInput(e.target.value)}
              placeholder="Enter VLAN ID"
            />
          </Form.Group>

          <Form.Group controlId="region">
            <Form.Label>Region</Form.Label>
            <Form.Control
              type="text"
              value={regionInput}
              onChange={e => setRegionInput(e.target.value)}
              placeholder="Enter Region"
            />
          </Form.Group>

          <StyledButton type="submit">Search</StyledButton>
        </StyledForm>

        <Results>
          {results.length > 0 ? (
            results.map((r, i) => (
              <ResultCard key={i}>
                <p><strong>BNG:</strong> {r.name}</p>
                <p><strong>NAS:</strong> {r.writeText}</p>
                <CopyButton onClick={() => copyToClipboard(r.name)}>
                  Copy
                </CopyButton>
              </ResultCard>
            ))
          ) : (
            <NoResults>No matches found</NoResults>
          )}
        </Results>
                       {/* 3D Header Image */}
        <ImageWrapper>
            <img className='pic' src={cartoon} alt='Pic' />
        </ImageWrapper>
      </ContainerWrapper>
    </Box>
  )
}

export default Intro

// Styled-components
const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  min-height: 60vh;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    width: 65%;
    min-height: 20%;
    margin: 0 auto;
    padding: 20px;
  }
`;


const ContainerWrapper = styled(Container)`
  position: relative;
  z-index: 4;
  background-color:rgba(199, 228, 233, 0.87)  ;
  margin: 34vh 10px 0px 10px;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow:   ;    /* sembunyikan bagian gambar yang keluar */
  z-index: 0;          /* container di bawah form */

  .pic, img {
   position: absolute;
    bottom: 10.3vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    max-height: 60vh;   /* batasi tinggi gambar */
    object-fit: cover;  /* crop agar tetap proporsional */
    z-index: -1;        /* benar-benar di belakang konten */
    margin-bottom: 10vh; /* beri jarak dari bawah */*/
  }

  @media (max-width: 768px) {
    .pic, img {
      max-height: 40vh; /* height lebih kecil di tablet/smartphone */
      bottom: 36vh; /* sesuaikan posisi */

    }
  }
`


const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 16px;
  align-items: end;
  margin-bottom: 32px;
  position: relative;
  font-family: 'Ubuntu Mono',monospace;


  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    margin-bottom: 8px;
    font-weight: 600;
  }

  .form-control {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 20px;
    margin-left: 5px;
      font-family: 'Ubuntu Mono',monospace;


    &:focus {
      outline: none;
      border-color: #6c5ce7;
      box-shadow: 0 0 6px rgba(108,92,231,0.3);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;

    .form-control {
      font-size: 16px;
      margin-left: 10px;
    }
      &:focus  {
      blur: 5px;
  }
`

const StyledButton = styled(Button)`
  padding: 12px 20px;
  background: #B4464F;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s;
  position: absolute;
  right: 16px;
  font-family: 'Ubuntu Mono',monospace;


  &:hover {
    background: #5a4acb;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 8px;
  }
`

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Ubuntu Mono',monospace;

`

const ResultCard = styled.div`
  padding: 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;

  p {
    margin: 4px 0;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`

const CopyButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 12px 20px;
  background: #B4464F;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s;
  margin: 19px 16px 0px 0px;
  font-family: 'Ubuntu Mono',monospace;

  &:hover {
    background: #019874;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin: 8px 0 0 0;
  }
`

const NoResults = styled.p`
  text-align: center;
  font-style: italic;
  color: #888;
`
