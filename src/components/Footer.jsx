import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { useState } from "react";
const Div = styled.div`
  height: 340px;
  position: relative;
  background-color: teal;
  padding: 10px 40px;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
`;
const Testimonial = styled.div`
  width: 450px;
`;
const Ttext = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 0px 60px;
  text-align: center;
  color: whitesmoke;
`;
const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;
const Input = styled.input`
  padding: 15px;
  outline: 1px solid teal;
  border: none;
  width: 350px;
  box-shadow: 1px 1px 10px whitesmoke;
  border-radius: 10px 0px 0px 10px;
`;
const Sendbutton = styled.button`
  padding: 10px;
  width: 100px;
  background-color: teal;
  box-shadow: 1px 1px 10px whitesmoke;

  border: none;
  border-radius: 0px 10px 10px 0px;
`;
const Image = styled.img`
  height: 500px;
  width: 400px;
  object-fit: cover;
  position: absolute;
  right: -100px;
  top: -20px;
  transform: rotate(-25deg);
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ImportantLinks = styled.div`
  display: flex;
  height: 200px;
  z-index: 1;
  width: 570px;
  justify-content: center;
  gap: 60px;
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  color: whitesmoke;
`;
const Terms = styled.div`
  height: 60px;
  width: 100%;
  margin-left: -40px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  color: white;
  padding: 0px 40px;
  gap: 20px;
  font-size: 14px;
`;
const STitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 600px;
  top: 200px;
  left: 400px;
  color: white;
  div {
    font-size: 32px;
    font-weight: 700;
  }
  span {
    font-style: italic;
    font-size: 18px;
  }
`;

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  function getCurrentYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear;
  }

  return (
    <Div>
      <Section>
        <Testimonial>
          <Ttext> How was your experience with us?</Ttext>
          <InputArea>
            <Input placeholder="write your testimony here" />
            <Sendbutton>
              <SendIcon />
            </Sendbutton>
          </InputArea>
          <Socials>
            <FacebookIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
            <InstagramIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
            <EmailIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
            <LinkedInIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
            <WhatsAppIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
            <TwitterIcon style={{ fontSize: "35px", color: "whitesmoke" }} />
          </Socials>
        </Testimonial>
        <ImportantLinks>
          <LinksWrapper>
            <Title>services</Title>
            <Link
              to="/sessions"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              audio sessions
            </Link>
            <Link
              to="/sessions/video"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Video sessions
            </Link>
            <Link
              to="/sessions/photo"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Photo shoots
            </Link>
          </LinksWrapper>
          <LinksWrapper>
            <Title>Popular courses</Title>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Guitar
            </Link>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Piano
            </Link>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              violin
            </Link>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Drums
            </Link>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Saxophones
            </Link>
          </LinksWrapper>
          <LinksWrapper>
            <Title>Pages</Title>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              home
            </Link>
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              courses
            </Link>
            <Link
              to="/sessions"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              sessions
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              services
            </Link>
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              Pricing
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              About
            </Link>
          </LinksWrapper>
        </ImportantLinks>
      </Section>
      <STitle>
        <div>Eighth Note Music Studio</div>
        <span> Unleash &middot; Rediscover &middot; Inspire</span>
      </STitle>

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fcaught-in-joy-ptVBlniJi50-unsplash.jpg?alt=media&token=b9b097f3-097b-46c7-b522-3f5bfd62de75"
        alt="image"
      />
      <Terms>
        <span>Terms and conditions</span>
        <span>cookies</span>
        <span>FAQs</span>
        <span>@copyright music & code | {currentYear}</span>
      </Terms>
    </Div>
  );
};

export default Footer;
