import React from 'react';
import { FaReact } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { RiDatabase2Line } from 'react-icons/ri'
import { Button, Popover } from "antd";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SkillData } from '../../constants/constants';
import { LinkItem } from '../Footer/FooterStyles';

const getProficiencyLevel = (level) => {
  switch (level) {
    case 0:
      return "Starter 🐣";
    case 1:
      return "Intermediate 🌱";
    case 2:
      return "Advanced 🚀";
    case 3:
      return "Expert 🎓";
    default:
      return "Invalid level";
  }
};

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      With experience in various web development and scalable system
      technologies, I have honed my skills across the full spectrum of Backend
      to Frontend design. <br />
      Discover my proficiency in each skill (Starter, Intermediate, Advanced,
      Expert) by hovering over the keywords.
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
              {SkillData.lang.map((skill) => (
                <li key={skill.id}>
                  <Popover
                    placement="right"
                    content={getProficiencyLevel(skill.level)}
                    trigger="hover"
                    overlayInnerStyle={{
                      fontSize: 20,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    <LinkItem href={skill.website}>{skill.name}</LinkItem>
                  </Popover>
                </li>
              ))}
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
              {SkillData.backend.map((skill) => (
                <li key={skill.id}>
                  <Popover
                    placement="right"
                    content={getProficiencyLevel(skill.level)}
                    trigger="hover"
                    overlayInnerStyle={{
                      fontSize: 20,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    <LinkItem href={skill.website}>{skill.name}</LinkItem>
                  </Popover>
                </li>
              ))}
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
              {SkillData.frontend.map((skill) => (
                <li key={skill.id}>
                  <Popover
                    placement="right"
                    content={getProficiencyLevel(skill.level)}
                    trigger="hover"
                    overlayInnerStyle={{
                      fontSize: 20,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    <LinkItem href={skill.website}>{skill.name}</LinkItem>
                  </Popover>
                </li>
              ))}
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
              {SkillData.tools.map((skill) => (
                <li key={skill.id}>
                  <Popover
                    placement="right"
                    content={getProficiencyLevel(skill.level)}
                    trigger="hover"
                    overlayInnerStyle={{
                      fontSize: 20,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    <LinkItem href={skill.website}>{skill.name}</LinkItem>
                  </Popover>
                </li>
              ))}
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
