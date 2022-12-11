import styled from 'styled-components'

export const Button = styled.button`
  box-sizing: border-box;
  border: 1px solid #cccccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 0.5rem;
  width: 5rem;
  color: #000000;
  padding: 0.2rem;
  font-weight: 300;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 360px) {
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    width: 9rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 720px) {
    width: 12rem;
    height: 3rem;
    font-size: 1.7rem;
  }
`
