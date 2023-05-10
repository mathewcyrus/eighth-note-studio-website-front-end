import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Person, Phone } from "@mui/icons-material";
const Div = styled.div`
  max-width: 1366px;
  position: relative;
  scroll-behavior: smooth;
`;
const LandingSection = styled.div`
  padding: 0px 40px;
  display: flex;
  height: 630px;
`;
const LeftSection = styled.div`
  flex: 1;
  /* padding-top: 60px; */
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  flex-direction: column;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 30px;
  position: relative;
  height: 100%;
  /* background-color: red; */
`;
const Circle = styled.div`
  height: 400px;
  width: 400px;
  background-color: teal;
  border-radius: 50%;
  box-shadow: 10px 10px 10px lightgray;
`;
const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 30px;
  top: 110px;
  outline: 2px solid white;
`;
const Image2 = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: 30px;
  bottom: 100px;
  outline: 2px solid white;
`;
const Title = styled.h1`
  color: teal;
`;
const Container = styled.div`
  position: absolute;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 240px;
  bottom: 70px;
  left: 0px;
  border: 1px solid teal;
  border-radius: 10px 0px 10px 10px;
  text-align: center;
  background-color: whitesmoke;
  outline: 2px solid white;
  span {
    font-weight: 700;
  }
  div {
    font-size: 14px;
    font-style: italic;
  }
`;
const Submenu = styled.ul`
  list-style: none;
  gap: 30px;
  display: flex;
  background-color: teal;
  height: 30px;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  li {
    padding: 8px;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 5px whitesmoke;
      border-radius: 10px;
    }
  }
`;
const Container2 = styled.div`
  position: absolute;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 240px;
  border-radius: 10px 10px 10px 0px;
  bottom: 50px;
  outline: 2px solid white;
  top: 100px;
  right: 20px;
  border: 1px solid teal;
  background-color: whitesmoke;
  height: max-content;
  text-align: center;
  span {
    font-weight: 700;
  }
  div {
    font-size: 14px;
    font-style: italic;
  }
`;
const Founders = styled.section`
  display: flex;
  padding: 0px 40px;
  height: 450px;
  scroll-margin-top: 120px;
`;
const FContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`;
const Fwords = styled.div`
  position: absolute;
  width: 250px;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 0px 10px 10px 10px;
  border: 1px solid teal;
  outline: 2px solid whitesmoke;
  bottom: 0px;
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  right: 110px;
  &::before {
    content: open-quote;
    font-size: 18px;
  }
  &::after {
    content: close-quote;
    font-size: 24px;
  }
`;
const Fcircle = styled.div`
  background-color: teal;
  height: 280px;
  border-radius: 50%;
  width: 280px;
  left: 40px;
  top: 110px;
  position: absolute;
`;
const FImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  outline: 2px solid whitesmoke;
  top: 10px;
  right: 140px;
`;
const FDescrption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    color: teal;
  }
`;
const Mission = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 50px;
  position: relative;
  padding: 0px 40px;
  scroll-margin-top: 180px;
  height: 300px;
  place-items: center;
`;
const MissionCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 20px;
  h2 {
    color: teal;
    border-bottom: 1px solid teal;
    padding-bottom: 5px;
  }
  p {
    font-size: 14px;
    margin-top: -5px;
  }
`;
const Management = styled.section`
  padding: 0px 145px;
  display: flex;
  flex-direction: column;
  height: 450px;
  scroll-margin-top: 120px;
  place-items: center;
  font-size: 14px;
  h2 {
    color: teal;
  }
`;
const McardWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
const MCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);

  box-shadow: 2px 2px 5px lightgray;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &:nth-child(3) {
    outline: 2px solid whitesmoke;
  }
`;
const MImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 0px 0px 10px 10px;
`;
const MContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const MTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: teal;
  /* width: 200px; */
`;
const MDescrption = styled.div`
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
`;
const Decor = styled.div`
  height: 400px;
  width: 250px;
  background-color: teal;
  position: absolute;
  right: 0px;
  top: 20px;
  /* position: fixed; */
  z-index: -1;
  border-radius: 320px 0px 0px 320px;
`;
const Contacts = styled.section`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 130px;
  height: 300px;
  margin-top: 10px;
  h2 {
    color: teal;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`;
const CWrapper = styled.div`
  display: grid;
  height: 150px;
  place-items: center;
  grid-template-columns: repeat(4, 2fr);
  gap: 20px;
`;
const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding: 10px;
  height: 100px;
  justify-content: center;
  width: 200px;
  box-shadow: 2px 2px 5px lightgray;
  span {
    font-weight: 700;
    font-size: 18px;
    color: teal;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    /* padding: 10px; */
  }
  div {
    &:nth-child(2) {
      font-weight: 700;
      font-size: 14px;
    }
    &:nth-child(3) {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;
      margin-top: 5px;
    }
  }
`;
const About = () => {
  return (
    <Div>
      <Navbar />
      <LandingSection>
        <LeftSection>
          <Title>EighthNote Studios</Title>
          <p>
            Welcome to our music studio, where creativity, community, and
            innovation come together to ignite your passion for music. Whether
            you're a beginner or a seasoned musician, we offer a range of
            exceptional education, production, and resources to help you unlock
            your musical potential and achieve your goals. From world-class
            lessons to state-of-the-art recording and performance facilities, we
            have everything you need to create, connect, and make your mark on
            the world of music!
          </p>
          <Submenu>
            <a
              href="#founders"
              style={{ textDecoration: "none", color: "white" }}>
              <li>Founders</li>
            </a>
            <a
              href="#mision"
              style={{ textDecoration: "none", color: "white" }}>
              <li>mission</li>
            </a>
            <a
              href="#mision"
              style={{ textDecoration: "none", color: "white" }}>
              <li>vision</li>
            </a>
            <a
              href="#management"
              style={{ textDecoration: "none", color: "white" }}>
              <li>Management</li>
            </a>
            <a
              href="#contacts"
              style={{ textDecoration: "none", color: "white" }}>
              <li>Contacts</li>
            </a>
            <a
              href="#contacts"
              style={{ textDecoration: "none", color: "white" }}>
              <li>location</li>
            </a>
          </Submenu>
        </LeftSection>
        <RightSection>
          <Circle />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fjonathan-velasquez-c1ZN57GfDB0-unsplash.jpg?alt=media&token=cbb211fd-a6de-4841-b9d8-b6873c59bc4b"
            alt="image"
          />
          <Image2
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fde-an-sun-b57RqS-nQ1c-unsplash.jpg?alt=media&token=a3759d1e-c312-4f9a-831f-88312475f732"
            alt="image"
          />
          <Container>
            <span>unleash your potential</span>
            <div>
              Do more than you possibly can. We will support you along the way.
            </div>
          </Container>
          <Container2>
            <span>The world awaits ...</span>
            <div>What will your music say? Inspire more. </div>
          </Container2>
        </RightSection>
      </LandingSection>
      <Founders id="founders">
        <FContainer>
          <Fcircle />
          <FImage
            src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fjanko-ferlic-GWFffQS5eWU-unsplash.jpg?alt=media&token=4f8fc075-3523-438a-8c8c-81a67e218caf"
            alt="founders image"
          />
          <Fwords>
            Good quality music means the world to me. I want to be the best in
            its production
          </Fwords>
        </FContainer>
        <FDescrption>
          <h2>Eighthnote studio founders</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            eligendi officia modi temporibus, quo nihil pariatur doloribus
            delectus vitae eius accusamus. Provident itaque minima in, eum
            voluptate facilis eius molestiae officiis exercitationem iste fugit
            quis ducimus sed nemo dolorem consectetur ratione voluptas aliquam
            eos esse debitis sequi? Distinctio vero explicabo culpa perferendis
            rerum? Eius ad laudantium, earum excepturi in temporibus
            necessitatibus libero iusto ipsa beatae, adipisci eaque nisi
            repellat! Quod?
          </p>
        </FDescrption>
      </Founders>
      <Mission id="mision">
        <Decor />
        <MissionCont>
          <h2>Mission</h2>
          <p>
            Our mission is to inspire and empower musicians of all levels to
            create, perform, and connect through music. We believe that music is
            a universal language that has the power to bring people together,
            express emotions, and spark positive change in the world. That's why
            we are committed to providing exceptional education, production, and
            resources to help our students and clients unlock their creative
            potential and achieve their musical goals. From learning an
            instrument, to recording an album, to performing on stage, we are
            dedicated to supporting our community of artists and learners every
            step of the way.
          </p>
        </MissionCont>
        <MissionCont>
          <h2> Vision</h2>
          <p>
            Our vision is to be the leading music studio that nurtures
            creativity and innovation, and drives positive change in the world
            through music. We believe that music has the power to connect
            people, inspire change, and bring joy and meaning to life. That's
            why we strive to create a supportive and inclusive community of
            artists and learners, where everyone feels welcome to explore and
            express their musical talents and interests. We envision a world
            where music is celebrated as a vital part of human culture and
            identity, and where our studio plays a key role in fostering this
            appreciation and understanding. To achieve this vision, we are
            committed to providing exceptional education, production, and
            resources that inspire our community to create, perform, and connect
            through music.
          </p>
        </MissionCont>
      </Mission>
      <Management id="management">
        <h2>Management</h2>
        <McardWrapper>
          <MCard>
            <MImage
              src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fjurica-koletic-7YVZYZeITc8-unsplash.jpg?alt=media&token=7fda508c-7c18-432b-ae19-6827e7a4f973"
              alt="image"
            />
            <MContainer>
              <MTitle>Manager</MTitle>
              <MDescrption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                illo ipsam, deleniti nisi voluptatum odit repellat? Voluptates
                iste dicta perspiciatis dolores, eligendi repellat eveniet
                corrupti repellendus molestias esse officiis vero?
              </MDescrption>
            </MContainer>
          </MCard>
          <MCard>
            <MImage
              src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Faiony-haust-3TLl_97HNJo-unsplash.jpg?alt=media&token=39bb3308-2fdb-4684-ae45-fd8cf92a283c"
              alt="image"
            />
            <MContainer>
              <MTitle>Front Desk</MTitle>
              <MDescrption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                illo ipsam, deleniti nisi voluptatum odit repellat? Voluptates
                iste dicta perspiciatis dolores, eligendi repellat eveniet
                corrupti repellendus molestias esse officiis vero?
              </MDescrption>
            </MContainer>
          </MCard>
          <MCard>
            <MImage
              src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/note_studios%2Fmichael-dam-mEZ3PoFGs_k-unsplash.jpg?alt=media&token=c63f5e59-dfed-4836-8e10-3028a85eedfd"
              alt="image"
            />
            <MContainer>
              <MTitle>Human Resource</MTitle>
              <MDescrption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                illo ipsam, deleniti nisi voluptatum odit repellat? Voluptates
                iste dicta perspiciatis dolores, eligendi repellat eveniet
                corrupti repellendus molestias esse officiis vero?
              </MDescrption>
            </MContainer>
          </MCard>
        </McardWrapper>
      </Management>
      <Contacts id="contacts">
        <h2>
          <Phone />
          Contacts and Locations
        </h2>
        <CWrapper>
          <ContactDiv>
            <span>
              <Person />
              front Desk
            </span>
            <div>Mathew Cyrus</div>
            <div>
              <Phone />
              +254 748691589
            </div>
          </ContactDiv>
          <ContactDiv>
            <span>
              <Person />
              Manager
            </span>
            <div>Steve hawks</div>
            <div>
              <Phone />
              +254 748691589
            </div>
          </ContactDiv>
          <ContactDiv>
            <span>
              <LocationOnIcon />
              Nairobi
            </span>
            <div>St Flo</div>
            <div>Bridgeford building</div>
          </ContactDiv>
          <ContactDiv>
            <span>
              <LocationOnIcon />
              Thika
            </span>
            <div> JJ streets</div>
            <div>Selassie Building</div>
          </ContactDiv>
        </CWrapper>
      </Contacts>
      <Footer />
    </Div>
  );
};

export default About;
