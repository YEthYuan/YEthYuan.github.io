import React from 'react';
import { FaReact } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { RiDatabase2Line } from 'react-icons/ri'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development and scalable system world <br />
      From Backend to Frontend design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <HiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Ruby</li>
              <li>C/C++</li>
              <li>Golang</li>
              <li>SQL</li>
              <li>Bash</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineCloudServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            <ul>
              <li>Spring</li>
              <li>Spring MVC</li>
              <li>Spring Boot</li>
              <li>Ruby on Rails</li>
              <li>Node.js</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            <ul>
              <li>HTML</li>
              <li>JSP/JSTL</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <RiDatabase2Line size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DB & Tools</ListTitle>
          <ListParagraph>
            <ul>
              <li>MySQL</li>
              <li>ElasticSearch</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
