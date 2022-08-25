import React from 'react';
import Navbar from '../subComponents/Navbar';
import SocialIcons from '../subComponents/SocialIcons';
import AboutImg from '../assets/Images/about.png';
import ParticleComponent from '../subComponents/ParticleComponent';

import {
  MainContainer,
  Container,
  AnimatedContainer,
  Column,
  BGImage,
  AboutMe,
} from '../subComponents/PageComponents';

const AboutPage = () => {
  return (
    <MainContainer
      style={{ height: 'auto' }}
      variants={AnimatedContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <SocialIcons />
      <ParticleComponent />
      <BGImage>
        <img src={AboutImg} alt=""></img>
      </BGImage>
      <Container style={{ alignItems: 'end' }}>
        <AboutMe>
          <h1 className="topic">about me.</h1>
          <Column>
            <h1 className="desc">
              hey, i’m <br />
              <i>Shashwat</i>, from
              <u> varanasi</u>, india, a passionate gamer and geek.
            </h1>
            <p>
              I love to try out new things and experiment with them. I am
              observant and “introvert” when it comes to social interaction. But
              I like to know other people and their likings.
            </p>
          </Column>
        </AboutMe>
        <AboutMe>
          <h1 className="topic">education.</h1>
          <Column style={{ height: '60%', justifyContent: 'space-around' }}>
            <Column>
              <h1 className="subtopic">Highschool and Intermediate</h1>
              <p>Sunbeam School Lahartara, Varanasi</p>

              <h4 className="topMargin">
                Completed my secondary and higher secondary in science (physics,
                chemistry, maths, computer science and english) stream securing
                9.4 CGPA & 93.4% respectively.
              </h4>
            </Column>
            <Column>
              <h1 className="subtopic">B.Tech Undergraduation</h1>
              <p>National Institute of Technology, Silchar</p>

              <h4 className="topMargin">
                Persuing bachelor of technology (b.tech) in computer science and
                engineering, and graduating in 2023. GPA 8.36 (till 3rd sem).
              </h4>
            </Column>
          </Column>
        </AboutMe>
        <AboutMe>
          <h1 className="topic">experience.</h1>
          <Column style={{ height: '60%', justifyContent: 'space-around' }}>
            <Column>
              <a href="https://liveombre.com/" target="_blank" rel="noreferrer">
                <h1 className="subtopic">Ombre, Live with us</h1>
              </a>
              <p>SDE, Intern (May 2021 – Sept 2021)</p>
              <h4 className="topMargin">
                Joined as a SDE, Intern for 5 months, and was responsible for
                developing algorithms to rank and take feedbacks from the users.
              </h4>
            </Column>
            <Column>
              <a
                href="https://dev.briidge.live/"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="subtopic">Briidge, Autolink</h1>{' '}
              </a>
              <p>SDE, Intern (May 2022 – July 2022)</p>

              <h4 className="topMargin">
                Joined as a SDE, Intern for 2 months, and was responsible for
                maintaining a REACT application. Implemented a signup flow for
                the users so that they auto enter into the application
                seemlessly.
              </h4>
            </Column>
          </Column>
        </AboutMe>
        <AboutMe>
          <h1 className="topic">interests.</h1>
          <Column style={{ height: '60%', justifyContent: 'space-around' }}>
            <Column>
              <h1 className="subtopic">Cross Platform Technology</h1>

              <h4 className="lessTopMargin">
                Worked with Flutter and dart framework to develop cross platform
                application for about 2 years. Currently working on developing
                concepts of React.
              </h4>
            </Column>
            <Column>
              <h1 className="subtopic">Website Technology</h1>
              <h4 className="lessTopMargin">
                Worked with HTML, SCSS, Javascript, React, Nodejs, Expressjs to
                create simple and minimal websites.
              </h4>
            </Column>
            <Column>
              <h1 className="subtopic">Creativity</h1>
              <h4 className="lessTopMargin">
                I love to click photos and capture moments that I feel are worth
                sharing. I also love to create vector art and designs using
                illustrator and photoshop.
              </h4>
            </Column>
          </Column>
        </AboutMe>
      </Container>
    </MainContainer>
  );
};

export default AboutPage;
