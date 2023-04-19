import Navbar from "../components/Navbar";
import styled from "styled-components";
import studio from "../images/studio.jpg";
import Instrument from "../components/Instrument";
import mic from "../images/mic.jpg";
import violin from "../images/violin.jpg";
import video1 from "../Videos/video.mp4";

import lesson from "../images/lessons.jpg";
import video from "../images/video.jpg";
import sax from "../images/sax.jpg";

import audioengineer from "../images/audioenginner.jpg";
import record from "../images/record.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Instruments, features } from "../data";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Body = styled.div``;
const Navwrapper = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    height: 400px;
  }
`;
const Overlay = styled.div`
  background-color: #000000b9;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 4;
`;
const MottoContainer = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  span {
    font-size: 18px;
  }
  @media screen and (min-width: 300px) and (max-width: 926px) {
    margin-top: 100px;

    & .qualityspan {
      text-align: center;
      padding: 0px 10px;
    }
  }
`;
const Motto = styled.div`
  color: teal;
  font-size: 40px;
  font-family: "Cinzel";
  font-weight: 400;
  letter-spacing: 0.2rem;
  &::before {
    content: open-quote;
    font-size: 45px;
  }
  &::after {
    content: close-quote;
    font-size: 45px;
  }
  @media screen and (min-width: 300px) and (max-width: 926px) {
    font-size: 1.1rem;
    font-weight: 500;
    color: white;

    letter-spacing: normal;
    padding: 0px 20px;
  }
`;
const Join = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  gap: 20px;
  color: teal;
  padding: 10px 0px;

  @media screen and (min-width: 300px) and (max-width: 926px) {
    width: 100%;
    justify-content: center;
    font-size: 24px;
    & .rotateIcon {
      transform: rotate(90deg);
      font-size: 24px;
    }
  }
`;

const Elevate = styled.div`
  margin: -10px 0px 5px 0px;
  padding-left: 30px;
  font-style: italic;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    padding: 0px;
    text-align: center;
    font-size: 1.1rem;
    font-style: normal;
  }
`;
const LesssonsSection = styled.div`
  padding: 0px 80px;
  background-color: #f8f4e8;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    padding: 0px 20px;
  }
`;
const InstrumentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  place-items: center;
  gap: 15px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    display: flex;
    flex-direction: column;
  }
`;
const Learn = styled.div`
  font-size: 18px;
  padding: 10px 0px;
  text-align: right;
  font-style: italic;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    font-size: 14px;
  }
`;

const Waves = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 60px;

  span {
    height: 40px;
    display: block;

    width: 10px;
    height: 10px;
    border-radius: 8px;
    background-color: orange;
    animation: audio-wave 2.2s infinite ease-in-out;

    :nth-child(2) {
      left: 11px;
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      left: 22px;
      animation-delay: 0.4s;
    }
    :nth-child(4) {
      left: 33px;
      animation-delay: 0.6s;
    }
    :nth-child(5) {
      left: 44px;
      animation-delay: 0.8s;
    }
    :nth-child(6) {
      left: 55px;
      animation-delay: 1s;
    }
    :nth-child(7) {
      left: 66px;
      animation-delay: 1.2s;
    }
    :nth-child(8) {
      left: 77px;
      animation-delay: 1.4s;
    }
    :nth-child(9) {
      left: 88px;
      animation-delay: 1.6s;
    }
    :nth-child(10) {
      left: 99px;
      animation-delay: 1.8s;
    }
    @keyframes audio-wave {
      0% {
        height: 10px;
        transform: translateY(0px);
        background-color: #ff8e3a;
      }
      25% {
        height: 40px;
        transform: translateY(-5px) scaleY(1.7);
        background-color: #ed509e;
      }
      50% {
        height: 10px;
        transform: translateY(0px);
        background-color: #9c73f8;
      }
      100% {
        height: 10px;
        transform: translateY(0px);
        background-color: #0fccce;
      }
    }
  }
`;
const WhyUsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #f8f4e8;
  place-items: center;
  gap: 20px;
  padding: 0px 40px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    display: flex;
    flex-direction: column;
  }
`;

const Why = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: #f8f4e8;

  color: teal;
  font-weight: 700;
  padding: 10px;
`;
const WhyCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* justify-content: center; */
  align-items: center;
  background-color: whitesmoke;
  /* width: 300px; */
  height: 300px;
  box-shadow: 4px 4px 5px lightgray;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    width: 330px;
    height: 390px;
  }
`;
const WhyTitle = styled.div`
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 300px) and (max-width: 926px) {
    margin: 10px 0px;
  }
`;
const WhyImg = styled.div`
  width: 100%;
  height: 160px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const WhyDesc = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 0px 10px;
  /* margin-bottom: 20px; */
  @media screen and (min-width: 300px) and (max-width: 926px) {
    font-size: 1.1rem;
  }
`;
const AudioBtn = styled.button`
  padding: 10px;
  background-color: teal;
  outline: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 300px;
  position: absolute;
  bottom: 10px;
  border-radius: 5px;
  &:hover {
    box-shadow: 4px 4px 5px lightgray;
    cursor: pointer;
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  background-color: #f8f4e8;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    display: flex;
    padding: 0px 20px;
    align-items: center;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    display: flex;
    flex-direction: column;
  }
`;
const TeamMotto = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
  font-style: italic;
  span {
    font-size: 24px;
    color: teal;
    font-weight: 700;
    font-style: normal;
  }
`;
const Teamcard = styled.div`
  display: flex;
  box-shadow: 2px 2px 5px lightgray;
  background-color: whitesmoke;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    width: 320px;
    height: 480px;
    flex-direction: column;
  }
`;
const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;
const TeamPhoto = styled.div`
  flex: 1;
  height: 200px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    height: 150px;
  }
`;
const TeamName = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  border-bottom: 1px solid teal;
`;
const TeamDescription = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    font-size: 1rem;
    padding: 0px 10px;
  }
`;

const Amenities = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #f8f4e8;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    overflow-x: scroll;
    position: relative;
    padding-top: 50px;
  }
`;
const AmenitiesTitle = styled.div`
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  color: teal;
  padding: 10px 0px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    font-size: 18px;
  }
`;
const AmenityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media screen and (min-width: 300px) and (max-width: 926px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: max-content;
  }
`;
const AmenityCard = styled.div`
  display: flex;
  height: 250px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 5px lightgray;
  &:hover .overlay {
    opacity: 1;
    transition: all 1s ease-in-out;
    cursor: pointer;
  }
`;
const AmenitiesImage = styled.div`
  width: 100%;
  height: 100%;
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000b0;
  position: absolute;
  height: 100%;
  color: whitesmoke;
  align-items: center;
  gap: 15px;
  opacity: 0;
`;
const AmenityTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: teal;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid teal;
  padding: 10px 0px;
  width: 100%;
`;
const Amenitiesdesc = styled.div`
  text-align: center;
  padding: 0px 30px;
`;
const ImageContainer = styled.img`
  position: fixed;
  width: 100%;
  max-width: 1366px;
  height: 350px;
  border-radius: 0px 0px 30px 30px;
  top: 0px;
  object-fit: cover;
  z-index: -1;
`;

const Home = () => {
  return (
    <Body>
      <Navwrapper>
        <ImageContainer src={studio} alt="image" />
        <Overlay>
          <Navbar type="home" />
          <MottoContainer>
            <Motto>Unleash &middot; Rediscover &middot; Inspire</Motto>
            <Waves>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </Waves>
            <span className="qualityspan">
              Gift the world the gift of Music with top tier sound and pixel
              perfect video Quality.
            </span>
          </MottoContainer>
        </Overlay>
      </Navwrapper>
      <LesssonsSection>
        <Join>
          Join The Team{" "}
          <ArrowForwardIcon className="rotateIcon" style={{ fontSize: 40 }} />
        </Join>
        <Elevate>
          Elevate your musical skills by learning these instruments and more.
          Unlock your potential.
        </Elevate>
        <InstrumentsContainer>
          {Instruments.map((instrument, i) => (
            <Instrument instrument={instrument} key={i} />
          ))}
        </InstrumentsContainer>
        <Link to="/courses" style={{ color: "blue" }}>
          <Learn>Learn more about our courses and enrollments.</Learn>
        </Link>
      </LesssonsSection>
      <Why>Why choose us</Why>
      <WhyUsSection>
        <WhyCard>
          <WhyImg>
            <Image src={mic} />
          </WhyImg>
          <WhyTitle> Music Production</WhyTitle>
          <WhyDesc>
            We offer top-notch music production services for all genres and
            styled. Our team of experienced producers and engineers will work
            woth you to create the perfect sound for your project.
          </WhyDesc>
          <AudioBtn> Book a Session</AudioBtn>
        </WhyCard>
        <WhyCard>
          <WhyImg>
            <video src={video1} muted autoPlay width="100%" height="160" />
          </WhyImg>
          <WhyTitle> Video Production</WhyTitle>
          <WhyDesc>
            From concept to final design, Our video production team will bring
            your vision to life.We handle everything from pre-production to
            post-production, ensuring that your video exceeds your expectation.
          </WhyDesc>
          <AudioBtn> Book a Session</AudioBtn>
        </WhyCard>
        <WhyCard>
          <WhyImg>
            <Image src={lesson} />
          </WhyImg>
          <WhyTitle> Music Lessons</WhyTitle>
          <WhyDesc>
            We offer a wide range of music lessons for all skills level.Our
            experienced teachers will help you achieve your goals, Whether you
            are a beginner or a professional musician.
          </WhyDesc>
          <AudioBtn> Buy A course</AudioBtn>
        </WhyCard>
        <WhyCard>
          <WhyImg>
            <Image src={video} />
          </WhyImg>
          <WhyTitle> Photography</WhyTitle>
          <WhyDesc>
            Our team of professional photgraphers will capture stunning images
            of you or your band. We provide both studio and on location shoots,
            so you can get the perfect shots for your website, social media and
            album covers.
          </WhyDesc>
          <AudioBtn> Book a Session</AudioBtn>
        </WhyCard>
      </WhyUsSection>
      <TeamSection>
        <TeamMotto>
          <span>Meet our team</span>
          We Help you Unleash your potential,rediscover your abilities and
          inspire your future
        </TeamMotto>
        <CardWrapper>
          <Teamcard>
            <TeamPhoto>
              <Image src={audioengineer} />
            </TeamPhoto>
            <TeamWrapper>
              <TeamName>Music Production Team</TeamName>
              <TeamDescription>
                Our music production team is led by a talented producer named
                Mercy. She is supported by a group mof dedicated and skilled
                engineers who work together to create a top notch music
                production servie for all genres and styles. They are passionate
                about music and have a great ear for details.
              </TeamDescription>
            </TeamWrapper>
          </Teamcard>

          <Teamcard>
            <TeamPhoto>
              <Image src={sax} />
            </TeamPhoto>
            <TeamWrapper>
              <TeamName>Music Production Team</TeamName>
              <TeamDescription>
                Our music production team is led by a talented producer named
                Mercy. She is supported by a group mof dedicated and skilled
                engineers who work together to create a top notch music
                production servie for all genres and styles. They are passionate
                about music and have a great ear for details.
              </TeamDescription>
            </TeamWrapper>
          </Teamcard>
          <Teamcard>
            <TeamPhoto>
              <Image src={violin} />
            </TeamPhoto>
            <TeamWrapper>
              <TeamName>Music Production Team</TeamName>
              <TeamDescription>
                Our music production team is led by a talented producer named
                Mercy. She is supported by a group mof dedicated and skilled
                engineers who work together to create a top notch music
                production servie for all genres and styles. They are passionate
                about music and have a great ear for details.
              </TeamDescription>
            </TeamWrapper>
          </Teamcard>
          <Teamcard>
            <TeamPhoto>
              <Image src={record} />
            </TeamPhoto>
            <TeamWrapper>
              <TeamName>Music Production Team</TeamName>
              <TeamDescription>
                Our music production team is led by a talented producer named
                Mercy. She is supported by a group mof dedicated and skilled
                engineers who work together to create a top notch music
                production servie for all genres and styles. They are passionate
                about music and have a great ear for details.
              </TeamDescription>
            </TeamWrapper>
          </Teamcard>
        </CardWrapper>
      </TeamSection>
      <Amenities>
        <AmenitiesTitle>Explore our beautiful facilities</AmenitiesTitle>
        <AmenityWrapper>
          {features.map((feature) => (
            <AmenityCard>
              <AmenitiesImage>
                <Image src={feature.image} />
              </AmenitiesImage>
              <DescWrapper className="overlay">
                <AmenityTitle>{feature.name}</AmenityTitle>
                <Amenitiesdesc>{feature.description}</Amenitiesdesc>
              </DescWrapper>
            </AmenityCard>
          ))}
        </AmenityWrapper>
      </Amenities>
      <Footer />
    </Body>
  );
};

export default Home;
