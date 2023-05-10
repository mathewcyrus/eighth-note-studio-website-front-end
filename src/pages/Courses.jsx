import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Div = styled.div`
  max-width: 1366px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 190px;
`;
const CourseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
  gap: 10px;
`;

const Courses = () => {
  return (
    <Div>
      <Navbar />
      <Sidebar type="course" />
      <Wrapper>
        <CourseWrapper>
          <Outlet />
          {/* <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard /> */}
        </CourseWrapper>
      </Wrapper>
      {/* <Footer /> */}
    </Div>
  );
};

export default Courses;
