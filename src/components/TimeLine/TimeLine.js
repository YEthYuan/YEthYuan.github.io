import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, ImageLeft, ImageRight } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Typography } from "antd";

const { Paragraph } = Typography;

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [ellipsis, setEllipsis] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        <Paragraph
          ellipsis={
            ellipsis ? { rows: 17, expandable: true, symbol: "more" } : false
          }
          style={{
            flexWrap: "wrap",
            textAlign: "justify",
            fontFamily: "Space Grotesk, sans-serif",
            color: "#898b92",
            fontSize: "24px",
            marginRight: "-200px",
          }}
        >
          <ImageRight src="/images/about/me.jpg" alt="Ye Yuan's Photo" />
          <p>
            I'm a vibrant and enthusiastic CS master's student at Carnegie
            Mellon University (CMU), on a thrilling academic journey that began
            at Huazhong University of S&T (HUST, China) and later, UC Santa
            Barbara for my Bachelor's degree. With an impressive 3.97/4 GPA
            (92.2/100) amassed from 135.8 undergraduate credits in my major, I
            proudly ranked in the Top 7 out of 253 students. My achievements
            have been recognized with the prestigious National Scholarship, the
            highest honor for Chinese undergraduates, awarded to me in both 2020
            and 2021. Furthermore, my unwavering dedication to academic
            excellence has kept me on the HUST Outstanding Undergraduates List
            (Dean's List) since my very first year.
          </p>
          <ImageLeft src="/images/placeholder.png" alt="Personal Image 1" />
          <p>
            The following content is still under preparation. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus non dui euismod,
            ultrices nunc ut, congue metus. Sed in felis eget massa varius
            bibendum vel at lacus. Curabitur eleifend quam quis neque eleifend,
            ut consectetur velit convallis. Donec gravida sodales mauris, eu
            bibendum sapien pulvinar vel. Nam feugiat diam eget enim rutrum
            feugiat. Sed sed enim euismod, faucibus augue vel, gravida nibh.
            Phasellus sed mi blandit, consectetur justo eget, euismod ipsum. Sed
            eu est at eros rhoncus accumsan sed vel neque. Suspendisse ornare
            tristique risus, nec dapibus tellus bibendum at. Vivamus lobortis
            sagittis nulla, nec dictum magna vulputate eget. Integer vel elit
            nec elit lobortis facilisis a a metus. Proin sit amet massa enim.
            Sed gravida nibh vitae accumsan aliquet. Quisque eu semper nulla, ut
            euismod dolor.
          </p>
          {/* <ImageRight src="/images/placeholder.png" alt="Personal Image 2" />
          <p>
            Thriving under fierce competition, I enrolled in Peking University's
            Arduino online course during high school, mastering embedded system
            development. My team designed an intelligent bike lock and won
            second prize in a national competition. Despite sleepless nights and
            moments of frustration, I was hooked on exploring the world of
            computer science.
          </p>
          <ImageLeft src="/images/placeholder.png" alt="Personal Image 3" />
          <p>
            With a 3.97/4.00 GPA, I built a strong foundation in computer
            science, earning the National Scholarship twice. I immersed myself
            in the development environment, fueling my passion for the software
            industry. Self-taught in various courses, I conquered challenges and
            solidified my theoretical knowledge, sharpening research and
            innovation abilities. This fueled my determination to pursue an
            overseas master's program, aspiring to become an outstanding
            software engineer.
          </p>
          <ImageRight src="/images/placeholder.png" alt="Personal Image 4" />
          <p>
            As an Outstanding Undergraduate in Academic Performance, I joined
            Professor Zhou's lab to prepare for graduate school. Collaborating
            with peers, we researched backdoor attack and defense methods for
            deep neural networks. Despite initial challenges, my adaptability
            and strong foundation enabled swift progress in learning, research,
            and collaboration.
          </p>
          <ImageLeft src="/images/placeholder.png" alt="Personal Image 3" />
          <p>
            Further intrigued by sparse neural networks, I joined Prof. Wang's
            group in summer 2021, focusing on intellectual property protection.
            My research allowed me to design a privacy-protecting algorithm
            based on the Lottery Ticket Hypothesis. I honed coding skills and
            information retrieval abilities, conducting comprehensive analysis
            and connecting concepts to gain deeper understanding.
          </p>
          <ImageRight src="/images/placeholder.png" alt="Personal Image 4" />
          <p>
            In February 2022, I pursued a research internship at Rice
            University, exploring robustness in sparse pre-trained neural
            networks for transfer learning. Leading the experiment, I guided
            teammates in writing code, utilizing GitHub workflow and regular
            meetings to efficiently manage progress. This experience
            strengthened my leadership, theoretical knowledge, engineering
            skills, and problem-solving abilities.
          </p>
          <ImageLeft src="/images/placeholder.png" alt="Personal Image 3" />
          <p>
            During my time at Lenovo Intelligence Solutions and Lenovo
            Enterprise Cloud Research Departments, I focused on development,
            maintenance, optimization, and delivering test reports. The hands-on
            experience enhanced my understanding of software engineering and
            allowed me to apply my knowledge in a real-world setting. These
            internships motivated me to continue studying and improving my
            skills, solidifying my determination to pursue graduate studies in
            the United States.
          </p>
          <ImageRight src="/images/placeholder.png" alt="Personal Image 4" />
          <p>
            As an Outstanding Undergraduate in Academic Performance, I joined
            Professor Zhou's lab to prepare for graduate school. Collaborating
            with peers, we researched backdoor attack and defense methods for
            deep neural networks. Despite initial challenges, my adaptability
            and strong foundation enabled swift progress in learning, research,
            and collaboration.
          </p> */}
        </Paragraph>
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
