import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 290px;
  height: 350px;
  box-shadow: 2px 2px 8px lightgray;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    outline: 2px solid teal;
  }
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  background-color: whitesmoke;
  margin-top: -15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 0px;
  font-size: 18px;
  font-weight: 700;
  color: teal;
`;
const Descriptions = styled.div`
  display: flex;
  padding: 0px 10px;
  gap: 10px;
`;
const Instructor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  height: max-content;
`;
const Instructorimg = styled.div`
  height: 60px;
  width: 60px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 4px 4px 5px lightgray;
`;
const InstructorName = styled.div`
  width: 80px;
  font-size: 10px;
  font-style: italic;
  font-weight: 700;
  margin-top: 5px;
`;
const Coursedescription = styled.div`
  font-size: 14px;
`;

const Instrument = ({ instrument }) => {
  return (
    <Div>
      <Image src={instrument.image} />
      <Details>
        <Title>{instrument.instrument}</Title>
        <Descriptions>
          <Instructor>
            <Instructorimg>
              <Image src={instrument.image} />
            </Instructorimg>
            <InstructorName>{instrument.instructor}</InstructorName>
          </Instructor>
          <Coursedescription>
            This {instrument.instrument} program navigates you through all the
            guitar chords and scales and many more guitar hack skills in a span
            of only 6 months.
          </Coursedescription>
        </Descriptions>
      </Details>
    </Div>
  );
};

export default Instrument;
