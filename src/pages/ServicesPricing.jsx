import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { services } from "../data";
const Header = styled.div`
  margin-top: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: -20px;
    width: 900px;
    padding: 10px 80px;
    border-bottom: 1px solid lightgray;
  }
`;
const MainWrapper = styled.div`
  padding: 0px 40px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  gap: 30px;
`;
const Card = styled.div`
  height: 300px;
  position: relative;
  border-radius: 10px;
  background-color: var(--card-color);
  padding: 10px;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: teal;
  display: grid;
  place-items: center;
  color: white;
`;
const Titlehead = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 10px;
  font-weight: 700;
`;
const Description = styled.div`
  padding: 10px 0px 0px 30px;
  font-size: 14px;
`;
const Button = styled.button`
  all: unset;
  background-color: var(--brand-color);
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  width: 200px;
  border-radius: 10px;
  left: 90px;
  border: 1px solid var(--brand-color);

  text-align: center;

  &:hover {
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    color: var(--brand-color);
    cursor: pointer;
  }
`;
const ServicesPricing = () => {
  return (
    <div>
      <Navbar />
      <MainWrapper>
        <Header>
          <h1>Services and Pricing</h1>
          <p>
            Our studio offers a range of professional services to help you
            create and promote your music. From digital marketing and video
            production to music lessons and more, we have the expertise and
            resources to take your music career to the next level. Browse our
            services and pricing options below to see how we can help you
            succeed
          </p>
        </Header>
        <Wrapper>
          {services.map((service, i) => (
            <Card key={i}>
              <Titlehead>
                <Icon>{service.icon}</Icon> <span>{service.service}</span>
              </Titlehead>
              <Description>{service.service_description}</Description>
              <Button>starting from {service.pricing}</Button>
            </Card>
          ))}
        </Wrapper>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default ServicesPricing;
