import React, { useState, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponents';
import SocialIcon from '../subComponents/SocialIcon';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from "../assets/Images/spaceman.webp";
import BigTitle from '../subComponents/BigTitle';

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(30px) translateX(30px); }
  100% { transform: translateY(-10px); }
`;


const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 10px 10px rgba(255,255,255,0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'Orbitron', monospace;
  overflow: hidden;
overflow-x: hidden;

`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 25vw;
  animation: ${float} 5s ease-in-out infinite;
  z-index: 1;
  will-change: transform;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 35vw;
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  gap: 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
       top: 15%;
    bottom: 2rem;
    transform: translateX(-50%);
  }
    @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1.5rem;
  width: 40vw;
  min-height: 50vh;
  backdrop-filter: blur(4px);
  font-size: 1rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1rem;

 @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 68vw;
    min-height: auto;
    padding: 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 35vw;
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 6px;
  color: ${(props) => props.theme.text};
    @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
    border-radius: 6px;
  color: ${(props) => props.theme.text};
   @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 6px;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    transform: scale(1.05);
  }
 @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
  `;

const Entry = styled.div`
  border-bottom: 1px dashed ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
    @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const AboutPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("aboutEntries")) || [];
    setEntries(saved);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("aboutEntries", JSON.stringify(data));
  };

  const handleSubmit = () => {
    if (!title.trim() || !desc.trim()) return;
    let updated;
    if (editIndex !== null) {
      updated = [...entries];
      updated[editIndex] = { title, desc };
      setEditIndex(null);
    } else {
      updated = [...entries, { title, desc }];
    }
    setEntries(updated);
    saveToStorage(updated);
    setTitle('');
    setDesc('');
  };

  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    saveToStorage(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setTitle('');
      setDesc('');
    }
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setTitle(entry.title);
    setDesc(entry.desc);
    setEditIndex(index);
  };

  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(search.toLowerCase()) ||
    entry.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcon theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <CardWrapper>
          <Card>
            <h3>{editIndex !== null ? 'Edit Data' : 'Input Data Baru'}</h3>
            <Input
              type="text"
              placeholder="Judul"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Deskripsi"
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Button onClick={handleSubmit}>
              {editIndex !== null ? 'Update' : 'Simpan'}
            </Button>
          </Card>

          <Card>
            <h3>Data Tersimpan</h3>
            <Input
              type="text"
              placeholder="Cari judul/deskripsi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filteredEntries.length === 0 ? (
              <p>Tidak ada data ditemukan.</p>
            ) : (
              filteredEntries.map((entry, index) => (
                <Entry key={index}>
                  <strong>{entry.title}</strong>
                  <p>{entry.desc}</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button onClick={() => handleEdit(index)}>Edit</Button>
                    <Button onClick={() => handleDelete(index)}>Hapus</Button>
                  </div>
                </Entry>
              ))
            )}
          </Card>
        </CardWrapper>

        <BigTitle text="Diary Work FM+" top="2%" left="4%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
