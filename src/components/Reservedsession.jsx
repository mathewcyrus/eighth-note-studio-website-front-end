import React from "react";
import styled from "styled-components";
const Div = styled.div`
  background-color: whitesmoke;
  height: 100px;
  width: 700px;
  height: 100px;
  position: relative;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100px;
  gap: 5px;
`;
const Rowname = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
`;
const Rowdata = styled.div`
  font-size: 14px;
`;
const CancelBtn = styled.button`
  width: 150px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  background-color: teal;
  outline: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;
const Reservedsession = ({ type }) => {
  return (
    <Div>
      <Container>
        <Wrapper>
          <Rowname>session type</Rowname>
          <Rowdata>audio session</Rowdata>
        </Wrapper>
        <Wrapper>
          <Rowname>Date</Rowname>
          <Rowdata>02/07/2004</Rowdata>
        </Wrapper>
        <Wrapper>
          <Rowname>Start Time</Rowname>
          <Rowdata>06:00 AM</Rowdata>
        </Wrapper>
        <Wrapper>
          <Rowname>End Time</Rowname>
          <Rowdata>09:00 AM</Rowdata>
        </Wrapper>
        <Wrapper>
          <Rowname>total hrs</Rowname>
          <Rowdata>3</Rowdata>
        </Wrapper>
        <Wrapper>
          <Rowname>total cost</Rowname>
          <Rowdata>ksh 3000</Rowdata>
        </Wrapper>
      </Container>
      {type !== "previous" && <CancelBtn>Cancel</CancelBtn>}
    </Div>
  );
};

export default Reservedsession;
