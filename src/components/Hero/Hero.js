import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import HighlightWord from '../miscs/HighlightWord';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        I'm Ye Yuan
      </SectionTitle>
      <SectionText>
        <HighlightWord word="I'm actively seeking Summer 2024 SDE Internship opportunities!" />{" "}
        As a dedicated CS Master's student at{" "}
        <HighlightWord word="Carnegie Mellon University" />, I am driven by my
        passion for Software Engineering, Scalable Systems, Machine Learning,
        and Computer Security. If you have exciting opportunities, don't
        hesitate to reach out at <HighlightWord word="hire@yeyuan.pro" />!
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "mailto:Ye%20Yuan<$maxwell.yuanyeh@gmail.com>")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;