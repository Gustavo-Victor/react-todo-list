import styled from "styled-components";

export const Container = styled.div`
  background-color: #171b1f;
  color: #797a81;
  width: 100%;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  padding: 0.7rem 0 4% 0;

  @media only screen and (max-width: 290px) {
    padding: 0.7rem 0 4rem 0;
  }

  p {
    margin-top: 1rem;
    text-align: center;
  }

  @media only screen and (max-width: 290px) {
    width: 95%;
    padding: 0;
  }
`;

export const MainTitle = styled.h1`
  padding-top: 1rem;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;

  @media only screen and (max-width: 290px) {
    font-size: 1.5rem;
  }
`;
