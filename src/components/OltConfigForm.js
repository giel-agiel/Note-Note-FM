import React, { useState } from 'react';
import { configTemplates } from '../data/configTemplates';
import styled, { ThemeProvider,keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponents";
import SocialIcon from "../subComponents/SocialIcon";
import ParticleComponent from "../subComponents/ParticleComponent";

const lightTheme = {
  body: '#f0f4f8',
  text: '#000',
  cardBackground: 'rgba(255, 255, 255, 0.3)'
};

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  animation: ${slideIn} 0.5s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Ubuntu Mono", monospace;

`;

const fieldMap = {
  huawei: ['sn', 'sid', 'ontId', 'vlanId', 'lineProfile', 'srvProfile', 'f', 's', 'p', 'date'],
  raisecom: ['sn', 'sid', 'vlanId', 'lineProfile', 'f', 's', 'p', 'date'],
  zte_c320: ['sn', 'sid', 'ontId', 'vlanId', 'f', 's', 'p', 'date'],
  zte_c610: ['sn', 'sid', 'ontId', 'vlanId', 'f', 's', 'p', 'date'],
  bdcom: ['sn', 'sid', 'vlanId', 'f', 's', 'p', 'date']
};

const fieldLabels = {
  sn: "Serial Number (SN)",
  sid: "Description (SID)",
  ontId: "ONT ID",
  vlanId: "VLAN ID",
  lineProfile: "Line Profile ID",
  srvProfile: "Service Profile ID",
  f: "Frame (F)",
  s: "Slot (S)",
  p: "Port (P)",
  date: "Password Date (YYYYMMDD)"
};

const OltConfigForm = () => {
  const [formData, setFormData] = useState({});
  const [oltType, setOltType] = useState('huawei');
  const [output, setOutput] = useState('');

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateFunc = configTemplates[oltType];
    if (templateFunc) {
      try {
        const config = templateFunc(formData);
        setOutput(config);
      } catch (error) {
        setOutput(`Error generating config: ${error.message}`);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    alert('Config copied to clipboard!');
  };

  const fields = fieldMap[oltType];

  return (
    <ThemeProvider theme={lightTheme}>
      <LogoComponent theme="light" />
      <SocialIcon theme="light" />
      <PowerButton />
      <ParticleComponent theme="light" />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>OLT Config Input</h2>
          <br />
          <StyledSelect style={styles.select} value={oltType} onChange={(e) => setOltType(e.target.value)}>
              <option value="huawei">Huawei</option>
              <option value="raisecom">Raisecom</option>
              <option value="zte_c320">ZTE C320</option>
              <option value="zte_c610">ZTE C610</option>
              <option value="bdcom">BDCOM</option>
            </StyledSelect>
          <form onSubmit={handleSubmit} style={styles.form}>
            {fields.map((field) => (
              <input
                key={field}
                style={styles.input}
                value={formData[field] || ''}
                onChange={handleChange(field)}
                placeholder={fieldLabels[field] || field}
                required
              />
            ))}
            
            <button type="submit" style={styles.button}>Generate</button>
          </form>
        </div>

        <div style={styles.card}>
          <h2 style={styles.title}>Generated Config</h2>
          {output && (
            <>
              <pre style={styles.output}>{output}</pre>
              <button onClick={handleCopy} style={styles.copyButton}>Copy to Clipboard</button>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-evenly',
    padding: '7rem',
    fontFamily: 'Ubuntu Mono, monospace',
    position: 'relative',
  },
  card: {
    flex: '1 1 360px',
    background: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '1.5rem',
    color: '#000',
    height: '63vh',
    margin:'2vh 0',
    fontFamily: 'Ubuntu Mono, monospace',

  },
  
  title: {
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1.2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
    
  },
  input: {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontFamily: 'Ubuntu Mono, monospace',

  },
  select: {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
  background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    fontFamily: 'Ubuntu Mono, monospace',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer'
  },
  output: {
    whiteSpace: 'pre-wrap',
    padding: '1rem',
    borderRadius: '6px',
    marginTop: '1rem'
  },
  copyButton: {
    marginTop: '1rem',
    padding: '0.5rem',
  background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default OltConfigForm;
