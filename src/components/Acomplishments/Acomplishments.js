import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { StatisticData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="stat">
    <SectionDivider divider />
    <SectionTitle>Statistics</SectionTitle>
    <Boxes>
      {StatisticData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
