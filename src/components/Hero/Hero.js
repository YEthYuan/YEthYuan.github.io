import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        I'm Ye Yuan
      </SectionTitle>
      <SectionText>
        I'm seeking Summer 2023 SDE Intern opportunities! I'm a senior CS undergraduate at UC Santa Barbara passionate about Software Engineering, Scalable System, Machine Learning, and Computer Security. 
      </SectionText>
      <Button onClick={() => window.location ='mailto:$Ye%20Yuan<$maxwell.yuanyeh@gmail.com>'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;