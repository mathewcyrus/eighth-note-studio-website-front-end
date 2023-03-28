import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import video from "../Videos/video.mp4";
const Body = styled.div`
  display: flex;
  position: relative;
  padding: 0px 40px;
  /* align-items: center; */
  /* justify-content: center; */
  margin-top: 70px;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  height: 100vh;
  position: fixed;
  box-shadow: 2px 2px 5px lightgray;
  overflow: scroll;
`;
const BackBtn = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 18px;
  border-radius: 7px;
  width: 100px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  margin-left: 400px;
`;
const CourseNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const CourseTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0px;
`;
const ModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 10px;
  padding-left: 20px;
  div {
    display: flex;
    gap: 20px;
  }
`;
const ModuleIndex = styled.div`
  font-weight: 700;
`;
const Modulename = styled.div`
  font-size: 16px;
`;
const VideoContainer = styled.div`
  /* height: 300px; */
`;
const Video = styled.video``;
const ModuleTitle = styled.h2``;
const Captions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
`;

const CourseContent = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Sidebar>
          <Link to="/courses/mycourses">
            <BackBtn>Back</BackBtn>
          </Link>
          <CourseNumber>Course 1</CourseNumber>
          <CourseTitle>Introduction to basic chords</CourseTitle>
          <ModulesContainer>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
            <div>
              <ModuleIndex>1.0</ModuleIndex>
              <Modulename>C chords</Modulename>
            </div>
          </ModulesContainer>
        </Sidebar>
        <MainContent>
          <ModuleTitle>Introduction to chords in the key of C</ModuleTitle>
          <VideoContainer>
            <Video src={video} controls />
          </VideoContainer>
          <Captions>
            <h3>Captions</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            veritatis cum ab earum officia unde magnam id impedit! Nam voluptate
            reprehenderit sequi ratione, ad voluptas odio, amet voluptatum
            maiores dolor aut officiis aperiam quam ex placeat aliquid sed
            beatae, iste pariatur deserunt ducimus. Quo harum consequuntur culpa
            ullam accusamus illum corrupti neque molestias ex distinctio eum
            natus non numquam unde laboriosam eos vel, quod quas nisi eius
            adipisci error rerum! Reiciendis itaque architecto ratione
            asperiores veritatis nemo! Et, magnam error pariatur voluptas soluta
            velit recusandae quis, molestiae enim quasi, tempore suscipit ex!
            Quisquam unde amet sint, iure beatae voluptatem corrupti! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            nostrum. Unde doloremque fugiat labore ratione facere numquam,
            necessitatibus voluptate reprehenderit rerum deleniti ipsa eum
            consectetur voluptatum tenetur est iure quidem amet dolore officia
            consequatur cum! Beatae sapiente sunt eaque, architecto nobis iure
            eos velit aliquid ab, perferendis libero neque, eius assumenda
            repellat cupiditate numquam! Accusantium doloremque odio saepe nam
            quaerat, possimus, magnam architecto fuga corporis, rerum ab sint
            sed facere libero blanditiis dignissimos maxime. Vel a, sed ad
            consequatur et reprehenderit laudantium, atque laboriosam veritatis
            aut in voluptatum animi, ipsum similique magnam esse iusto sint cum
            eos natus illo ipsam ut iure. Porro voluptatum nostrum id, esse
            magnam error, hic est nesciunt at laborum odit doloribus nam nulla!
            Nostrum possimus beatae ex ipsum eveniet magnam omnis repellat quod
            voluptas eos voluptate illo tenetur aliquid, harum similique maxime
            commodi. Voluptates ipsum expedita corporis est itaque. Ipsa aperiam
            blanditiis delectus fugit neque amet corrupti, veniam eligendi quas
            qui ab iusto facilis. Ad quis dolorem quam odit alias provident
            laborum repellat? Doloremque porro impedit dicta delectus quae,
            excepturi perspiciatis tempora! Officiis voluptatum, officia
            corporis odit ex dignissimos accusantium dolore. Non earum
            necessitatibus eius modi minus dolorum unde sed dicta. Rem sapiente
            accusantium quasi!
          </Captions>
        </MainContent>
      </Body>
      ;
    </>
  );
};

export default CourseContent;
