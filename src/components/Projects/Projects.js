import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { Typography } from "antd";

const { Paragraph } = Typography;

const Projects = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <Section nopadding id="projects">
      <SectionDivider style={{ marginBottom: "50px" }} />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img
                src={image}
                style={{ width: "400px", height: "180px", objectFit: "cover" }}
              />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>
                <Paragraph
                  ellipsis={
                    ellipsis
                      ? { rows: 3, expandable: true, symbol: "more" }
                      : false
                  }
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#898b92",
                    fontSize: "16px",
                    width: "100%",
                  }}
                >
                  {description}
                </Paragraph>
              </CardInfo>
              <div style={{ marginTop: "20px" }}>
                <TitleContent
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#898b92",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Stack
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {visit && (
                  <ExternalLinks href={visit} target="_blank">
                    Demo
                  </ExternalLinks>
                )}
                {source && (
                  <ExternalLinks href={source} target="_blank">
                    Code
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
