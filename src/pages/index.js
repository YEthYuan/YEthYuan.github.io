import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import News from '../components/News/News'
import Projects from '../components/Projects/Projects';
import Skills from "../components/Technologies/Technologies";
import Timeline from '../components/TimeLine/TimeLine';
import Subscribe from '../components/Subscribe/Subscribe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { BackTop } from "antd";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <BackTop />
      <News />
      <Projects />
      <Skills />
      <Timeline />
      <Acomplishments />
      <Subscribe />
    </Layout>
  );
};

export default Home;
