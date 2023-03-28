import styled from "styled-components";
import Navbar from "../components/Navbar";

import ReserveForm from "../components/ReserveForm";
import Reservedsession from "../components/Reservedsession";

const Div = styled.div`
  max-width: 1366px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  height: 700px;
  padding: 0px 40px;
  position: fixed;
  /* overflow: scroll; */
`;
const ReservedWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: max-content;
  /* position: fixed; */
`;
const Sessions = () => {
  return (
    <Div>
      <Navbar type="session" />
      <Wrapper>
        <h3 style={{ color: "teal" }}>Your Reserved Sessions</h3>
        <ReservedWrapper>
          <Reservedsession />
          <Reservedsession />
          <Reservedsession />
          <Reservedsession />
          <Reservedsession />
        </ReservedWrapper>
        <h3 style={{ color: "teal" }}>Previous Sessions</h3>
        <ReservedWrapper>
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
          <Reservedsession type="previous" />
        </ReservedWrapper>
      </Wrapper>
      <ReserveForm />
    </Div>
  );
};

export default Sessions;
