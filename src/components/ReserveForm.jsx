import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";

import { useReducer } from "react";

const Form = styled.form`
  height: 100vh;
  background-color: whitesmoke;
  width: 430px;
  position: absolute;
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 2px 2px 5px lightgray;
  padding: 70px 20px 0px;
  right: 40px;
  top: 0;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 100%;
  div {
    font-size: 14px;
    font-weight: 700;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  padding: 10px;
  width: 350px;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid teal;
  outline: none;
  & .date {
    width: 500px;
  }

  &:focus {
    border: 1px solid teal;
  }
`;

const Select = styled.select`
  width: 370px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid teal;
  outline: none;
  border-radius: 5px;
  &:focus {
    border: 1px solid teal;
  }
`;
const Timecontainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-left: 30px;
  margin-top: 5px;

  div {
    font-size: 14px;
    font-weight: normal;
  }
`;
const TimeInput = styled.input`
  border: 1px solid teal;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`;
const Button = styled.button`
  height: 40px;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  background-color: teal;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: none;
  position: absolute;
  bottom: 100px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 10px gray;
  }
`;
const ReserveForm = () => {
  const [session, updateSession] = useReducer(
    (prev, next) => {
      const newSession = { ...prev, ...next };
      if (newSession.starttime > newSession.endtime) {
        newSession.endtime = newSession.starttime;
      }
      return newSession;
    },
    {
      name: "",
      date: "",
      sessiontype: "",
      starttime: "",
      endtime: "",
    }
  );
  console.log(session);
  return (
    <Form>
      <h3>To reserve a session with us please fill this form </h3>
      <InputContainer>
        <div>Your name</div>
        <Wrapper>
          <Input
            onChange={(e) => {
              updateSession({ name: e.target.value });
            }}
            placeholder="name"
          />
          <InfoIcon style={{ fontSize: "30px", color: "teal" }} />
        </Wrapper>
      </InputContainer>
      <InputContainer>
        <div>choose your session type</div>
        <Wrapper>
          <Select
            onChange={(e) => {
              updateSession({ sessiontype: e.target.value });
            }}>
            <option>audio sessions</option>
            <option>video sessions</option>
            <option>photo shoot</option>
          </Select>
          <InfoIcon style={{ fontSize: "30px", color: "teal" }} />
        </Wrapper>
      </InputContainer>
      <InputContainer>
        <div>choose your date</div>
        <Wrapper>
          <Input
            onChange={(e) => {
              updateSession({ date: e.target.value });
            }}
            type="date"
            className="date"
          />
          <EventIcon style={{ fontSize: "30px", color: "teal" }} />
        </Wrapper>
      </InputContainer>
      <InputContainer>
        <div>Choose your time</div>
        <Wrapper>
          <Timecontainer>
            <div>Start Time:</div>
            <TimeInput
              onChange={(e) => {
                updateSession({ starttime: e.target.value });
              }}
              type="time"
            />
          </Timecontainer>
          <Timecontainer>
            <div>End Time:</div>
            <TimeInput
              onChange={(e) => {
                updateSession({ endtime: e.target.value });
              }}
              type="time"
            />
          </Timecontainer>
        </Wrapper>
      </InputContainer>
      <Button type="submit"> Book session</Button>
    </Form>
  );
};

export default ReserveForm;
