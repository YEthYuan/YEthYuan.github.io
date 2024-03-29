import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiLeetcode, SiGooglescholar } from 'react-icons/si'

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Ye Yuan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#news">
          <NavLink>News</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
