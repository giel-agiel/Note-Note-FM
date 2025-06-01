import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 3rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.body};
  overflow: hidden;
`;

const ScrollContent = styled.div`
  overflow-y: auto;
  padding-right: 0.5rem;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.body};
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionHeading = styled.h3`
  font-size: calc(0.9em + 0.4vw);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CommandList = styled.ul`
  margin-left: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: calc(0.8em + 0.3vw);
  list-style-type: disc;

  li {
    margin-bottom: 0.8rem;

    strong {
      display: block;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }

    pre {
      background: rgba(255,255,255,0.1);
      padding: 0.5rem;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 0.85em;
    }
  }
`;

const Card = ({ data }) => {
  return (
    <Box>
      <Title>{data.title}</Title>
      <ScrollContent>
        {data.sections.map((section, idx) => (
          <Section key={idx}>
            <SectionHeading>{section.heading}</SectionHeading>
            <CommandList>
              <li>
                <strong>{section.heading}</strong>
                <pre>
                  <code>{section.content.join('\n')}</code>
                </pre>
              </li>
            </CommandList>
          </Section>
        ))}
      </ScrollContent>
    </Box>
  );
};

export default Card;
