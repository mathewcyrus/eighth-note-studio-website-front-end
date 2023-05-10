import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Container = styled.div`
  position: relative;
  position: fixed;
  max-width: 1366px;
  z-index: 5;
  top: 0px;
  height: ${(props) => (props.type ? "session" && "150px" : "70px")};
  color: ${(props) => (props.type ? "session" && "black" : "white")};
  display: flex;
  align-items: center;
  background-color: teal;
  width: 100%;
  &.homemode {
    background-color: transparent;
  }

  @media screen and (min-width: 300px) and (max-width: 800px) {
    /* display: none; */
  }
`;
const Div = styled.div`
  display: none;
  position: absolute;
  background-color: teal;
  z-index: -1;
  max-width: 1366px;
  bottom: -700px;
  width: 100%;
  height: 60px;
`;
const Logo = styled.div`
  font-size: 24px;
  /* font-weight: 700; */
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  display: flex;
  font-family: "Cinzel";

  align-items: center;

  flex: 1;
  margin-left: 40px;
`;

const Span = styled.div`
  height: 70px;
  width: 50px;
  margin: 0px 8px;
  animation: ${(props) =>
    props.type ? "session" && "none" : "rotate 3s linear infinite"};
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Menu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  flex: 1;
  font-size: 14px;
`;
const MenuItem = styled(NavLink)`
  gap: 8px;
  font-weight: 600;

  &:hover {
    border-bottom: 2px solid white;
    /* color: green; */
    cursor: pointer;
  }
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px 5px;

  &.active {
    border-bottom: 2px solid white;
    font-size: 16px;
    font-weight: 700;
  }
`;
const Auth = styled.div`
  display: flex;
  margin-right: 40px;
`;
const Navbar = ({ type }) => {
  const mainref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainref.current,
        start: "top 400px",
        end: "+=100",
        toggleActions: "restart reset",
        scrub: true,
      },
    });
    tl.to(mainref.current, {
      display: "block",
      position: "fixed",
      top: 0,
      backgroundColor: "teal",
    });
  }, []);
  return (
    <Container className={type === "home" && "homemode"}>
      {type === "home" && <Div ref={mainref} />}
      <Logo>
        Eighth N
        <Span>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fistockphoto-1398510446-170667a-removebg-preview.png?alt=media&token=326ba130-80e9-4924-889e-ceb972ae3d9f"
            alt="logo image"
          />
        </Span>
        te Studios
      </Logo>

      <Menu>
        <MenuItem
          to="/"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          Home
        </MenuItem>
        <MenuItem
          to="/sessions"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          Sessions
        </MenuItem>
        <MenuItem
          to="/courses"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          Courses
        </MenuItem>

        <MenuItem
          to="/services&pricing"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          Services & Pricing
        </MenuItem>

        <MenuItem
          to="/about-eigthnote-studios"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          About
        </MenuItem>
      </Menu>
      <Auth>
        <MenuItem
          to="/login"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          <LoginIcon />
          Login
        </MenuItem>
        <MenuItem
          to="/register"
          activeclassname="active"
          style={{ textDecoration: "none", color: "white" }}>
          <PersonAddAltIcon />
          Register
        </MenuItem>
      </Auth>
    </Container>
  );
};

export default Navbar;
