import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 1024px;
  display: flex;
  box-shadow: 5px 5px 5px lightgray;
  padding: 20px;
  background-color: whitesmoke;
  flex-direction: column;
`;
const TContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
`;
const Course = styled.div`
  color: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-left: 124px;

  span {
    font-size: 60px;
  }
`;
const Title = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  font-size: 30px;
  width: 900px;
  border-bottom: 1px solid lightgray;
  height: 70px;
`;
const Description = styled.div`
  font-size: 16px;
`;

const CourseModule = () => {
  return (
    <Div>
      <TContainer>
        <Title> Introduction to basic chords</Title>
        <Course>
          Course <span>1</span>
        </Course>
      </TContainer>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        assumenda nemo voluptatem tempore quam labore enim veritatis ab
        exercitationem molestiae dolores, sunt molestias ratione fugiat ipsa,
        libero alias non omnis error nam dolor obcaecati, optio aut doloribus!
        Exercitationem tempora nihil reiciendis praesentium velit maiores,
        quaerat veniam saepe corporis autem eos.
      </Description>
    </Div>
  );
};

export default CourseModule;
