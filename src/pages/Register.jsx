import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
const Wrapper = styled.div`
  width: 100%;
  height: 766px;
  display: grid;
  place-items: center;
  background: radial-gradient(#008080 15%, transparent 16%),
    repeating-linear-gradient(
      0deg,
      transparent 6.5%,
      #f8f4e8 7%,
      #f8f4e8 9%,
      transparent 10%
    ),
    linear-gradient(
      45deg,
      transparent 49%,
      #008080 49%,
      #008080 51%,
      transparent 51%
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      #008080 49%,
      #008080 51%,
      transparent 51%
    );
  background-size: 2em 2em;
  background-color: #f8f4e8;
  opacity: 1;
`;
const Form = styled.form`
  width: 600px;
  height: 450px;
  display: flex;
  align-items: center;

  gap: 10px;
  flex-direction: column;
  background-color: #f8f4e8;
  border-radius: 10px;
  border: 1px solid teal;
  p {
    margin-top: -5px;
  }
  & .signup {
    display: flex;
    font-size: 12px;
    align-items: center;
    /* margin-top: 60px; */
    gap: 10px;
  }

  & .image {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 700;
    border: 1px solid teal;
    width: 200px;
    justify-content: center;
    margin-top: -10px;
    padding: 5px;
    &:hover {
      background-color: teal;
    }
  }
`;
const InputWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 500px;
`;
const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 100%;
  outline: none;
  border-bottom: 1px solid teal;
  padding: 10px;
`;
const Button = styled.button`
  all: unset;
  background-color: teal;
  padding: 8px;
  width: 250px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  border-radius: 20px;
  color: white;

  &.signupBtn {
    width: 120px;
    padding: 6px;
  }
`;
const Image = styled.img`
  height: 30px;
  width: 30px;
`;

const Register = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Form>
          <h2>Sign Up</h2>
          <InputWrapper>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="last name" />
            <Input type="text" placeholder="Phone number" />
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Input type="password" placeholder="confirm password" />
          </InputWrapper>
          <Button>Sign up</Button>
          <p>or sign up with</p>
          <div className="image">
            <Image src="https://res.cloudinary.com/dt75zlucp/image/upload/v1679575872/Arcade%20Hotel/google-icon_yxflza.svg" />{" "}
            Google
          </div>
          <div className="signup">
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button className="signupBtn">Log in</Button>
            </Link>
          </div>
        </Form>
      </Wrapper>
    </div>
  );
};

export default Register;
