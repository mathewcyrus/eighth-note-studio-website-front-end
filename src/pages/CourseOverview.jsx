import React from "react";
import Navbar from "../components/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import guitar from "../images/guitar.jpg";
import CourseModule from "../components/CourseModule";
import Footer from "../components/Footer";

const Body = styled.div`
  max-width: 1366px;
`;
const Navigation = styled.div`
  color: gray;
  padding: 0px 40px;
  margin-top: 80px;
  gap: 10px;
  display: flex;
  align-items: center;

  font-size: 18px;
`;
const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 40px;
  margin-top: 20px;
  gap: 40px;
  margin-bottom: 20px;
`;
const Overview = styled.div`
  flex: 1;
  /* padding-right: 20px; */
  div {
    display: flex;
    align-items: center;
    p {
      color: gray;
    }
  }
`;
const Image = styled.img`
  height: 250px;
  width: 350px;
  object-fit: cover;
  border-radius: 5px;
`;
const Coursename = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Description = styled.div`
  margin: 5px 0px 20px 0px;
  padding-right: 60px;
`;
const Enroll = styled.div`
  background-color: teal;
  padding: 10px;
  width: max-content;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 20px;
  span {
    font-size: 16px;
    font-weight: 700;
  }
  div {
    font-size: 14px;
    span {
      font-weight: bold;
      margin: 0px 5px;
    }
  }
`;
const Requirements = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  background-color: whitesmoke;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  box-shadow: 5px 5px 5px lightgray;
  padding: 10px;
  height: 300px;
`;
const Card = styled.div`
  padding: 10px;
  border-right: 1px solid lightgray;
  &:nth-child(3) {
    border-right: none;
  }
  &:nth-child(6) {
    border-right: none;
  }
`;
const Cardname = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  padding: 10px;
  color: teal;
`;
const ModulesContainer = styled.div`
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
const CourseOverview = () => {
  return (
    <Body>
      <Navbar />
      <Navigation>
        coursename
        <ArrowForwardIcon />
        course modules
      </Navigation>
      <CourseWrapper>
        <Overview>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fde-an-sun-b57RqS-nQ1c-unsplash.jpg?alt=media&token=a3759d1e-c312-4f9a-831f-88312475f732"
            alt="image"
          />
          <Coursename>Guitar Master Track</Coursename>
          <Description>
            KickStart your career in guitart playing by enrolling in this master
            trcak course focused on indepth guitar mastery. Learn Chord basics,
            notes, scales, Arppegios in a much more broader beiggner to advance
            approach
          </Description>
          <div>
            <Enroll>
              <span>Enroll today</span>
              <div>
                pay ksh<span>10,000</span> full course
              </div>
            </Enroll>
            <p>free 30 days cancelation</p>
          </div>
        </Overview>
        <Requirements>
          <Card>
            <Cardname>Begginer level</Cardname>
            <div>No prior experience needed</div>
          </Card>
          <Card>
            <Cardname>6 months</Cardname>
            <div>with 6 classes/lessons per week</div>
          </Card>
          <Card>
            <Cardname>Subtitle</Cardname>
            <div>Video subtitles are in english</div>
          </Card>
          <Card>
            <Cardname>Certification</Cardname>
            <div>Earn a master track certificate on completion</div>
          </Card>
          <Card>
            <Cardname>Ratings</Cardname>
            <div>
              <span>0</span> Ratings
            </div>
          </Card>
          <Card>
            <Cardname>Enrolled</Cardname>
            <div>
              <span>0</span> Enrolled
            </div>
          </Card>
        </Requirements>
      </CourseWrapper>
      <Container>What you will learn on this certification</Container>
      <ModulesContainer>
        <CourseModule />
        <CourseModule />
        <CourseModule />
        <CourseModule />
        <CourseModule />
      </ModulesContainer>
      <Footer />
    </Body>
  );
};

export default CourseOverview;
