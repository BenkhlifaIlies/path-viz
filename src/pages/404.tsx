// import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/button';
import NotFound from '../assets/svg/404.svg';

const PageNotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <div>
        <img
          src={NotFound}
          height="200"
          width="200"
          color="red"
          alt="404 icon"
          loading="lazy"
          decoding="async"
        />
        <h1>404 - Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button
          variant="primary"
          label="Go home"
          onClick={routeChange}
        ></Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  text-align: center;
  margin-top: 25vh;
  & > div {
    place-self: center;
    & > button {
      margin: 2rem auto;
    }
  }
`;

export default PageNotFound;
