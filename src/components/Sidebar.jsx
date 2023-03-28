import React from "react";
import styled from "styled-components";
import AlbumIcon from "@mui/icons-material/Album";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CameraIcon from "@mui/icons-material/Camera";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  left: 0px;
  width: 170px;
  display: flex;
  top: 0;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 5px lightgray;
  gap: 15px;
  padding-top: 80px;
  height: 100%;
`;
const SidebarItem = styled(NavLink)`
  font-size: 14px;
  font-weight: 700;
  display: flex;
  margin-bottom: 15px;
  & .icon {
    text-align: left;
    position: absolute;
    left: 20px;
  }
  span {
    text-align: right;
    position: absolute;
    margin-left: -30px;
  }
  &:hover {
    color: blue;
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;

const Sidebar = ({ type }) => {
  return (
    <Container>
      {type === "course" && (
        <>
          <SidebarItem
            to=""
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <SchoolIcon className="icon" />
            <span>Courses</span>
          </SidebarItem>

          <SidebarItem
            to="/courses/mycourses"
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <CardMembershipIcon className="icon" />
            <span>My Courses</span>
          </SidebarItem>

          <SidebarItem
            to="/courses/certificates"
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <CardGiftcardIcon className="icon" />
            <span>Certificates</span>
          </SidebarItem>
        </>
      )}
      {type === "session" && (
        <>
          <Link
            to=""
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <SidebarItem
              to="/sessions/video"
              style={{ textDecoration: "none", color: "black" }}
              activeclassname="active">
              <AlbumIcon className="icon" />
              <span>audio sessions</span>
            </SidebarItem>
          </Link>

          <SidebarItem
            to="/sessions/video"
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <MovieFilterIcon className="icon" />
            <span>video sessions</span>
          </SidebarItem>

          <SidebarItem
            to="/sessions/photo"
            style={{ textDecoration: "none", color: "black" }}
            activeclassname="active">
            <CameraIcon className="icon" />
            <span>Photo Shoot</span>
          </SidebarItem>
        </>
      )}
    </Container>
  );
};

export default Sidebar;
