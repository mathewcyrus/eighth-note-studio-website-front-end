import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import grace from "../images/gracios.jpg";
import piano from "../images/piano.jpg";
const Div = styled.div`
  height: 430px;
  width: 300px;
  position: relative;
  box-shadow: 2px 2px 5px lightgray;
  background-color: whitesmoke;
`;
const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const Container = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  font-size: 16px;
  font-weight: 700;
`;
const Instructor = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
`;
const InstructorImg = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
`;
const InstructorDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
`;
const Instructorname = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const Cinstructor = styled.div`
  font-size: 12px;
  font-style: italic;
`;
const CourseDesc = styled.div`
  font-size: 14px;
  margin: -15px 2px 0px 70px;
`;
const BuyCourse = styled.button`
  background-color: teal;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Coursecard = ({ type }) => {
  return (
    <Div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Frashid-OihZAyTkj14-unsplash.jpg?alt=media&token=d4dbc57b-eb0d-40c3-9e01-779f9cc2a09b"
        alt="instrument image"
      />
      <Container>
        <Title>Guitar Master Track</Title>
        <Instructor>
          <InstructorImg
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Faiony-haust-3TLl_97HNJo-unsplash.jpg?alt=media&token=39bb3308-2fdb-4684-ae45-fd8cf92a283c"
            alt="instructor image"
          />
          <InstructorDesc>
            <Instructorname>Mathew Cyrus</Instructorname>
            <Cinstructor>course instructor</Cinstructor>
          </InstructorDesc>
        </Instructor>
        <CourseDesc>
          This Piano program navigates you through all the guitar chords and
          scales and many more guitar hack skills in a span of only 6 months.
        </CourseDesc>
      </Container>
      <Link
        to="/courses/coursename/coursemodules"
        style={{ textDecoration: "none", color: "black" }}>
        <BuyCourse>Buy Course</BuyCourse>
      </Link>
      {type === "bought" && (
        <Link to="/coursename/coursecontent">
          <BuyCourse>start learning</BuyCourse>
        </Link>
      )}
    </Div>
  );
};

export default Coursecard;
