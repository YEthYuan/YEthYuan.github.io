import React from 'react';
import { Tooltip } from "antd";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode, SiGooglescholar } from 'react-icons/si'

import { Friends } from '../../constants/constants';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1-650-504-9917">+1 (650) 504-9917</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1-650-504-9917">+1 (650) 504-9917</LinkItem>

          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:$Ye%20Yuan<$maxwell.yuanyeh@gmail.com>">
            maxwell.yuanyeh@gmail.com (Primary)
          </LinkItem>
          <LinkItem href="mailto:$Ye%20Yuan<$ye33@ucsb.edu>">
            ye33@ucsb.edu (Education only)
          </LinkItem>
          <LinkItem href="mailto:$Ye%20Yuan<$yethyuan@gmail.com>">
            yethyuan@gmail.com (Working only)
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Friends</LinkTitle>
          <ul>
            {Friends.map((item, index) => (
              <li key={index}>
                <Tooltip title={item.affiliation} color="#212D45">
                  <LinkItem href={item.link}>{item.name}</LinkItem>
                </Tooltip>
              </li>
            ))}
          </ul>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Programmer: A machine that turns coffee into code</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/YEthYuan">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/yethyuan/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/YEthYuan/">
          <SiLeetcode size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://scholar.google.com/citations?user=HjmRtpQAAAAJ&hl=en">
          <SiGooglescholar size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
