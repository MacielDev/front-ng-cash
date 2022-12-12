import styled from 'styled-components'

export const InputData = styled.input`
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 2px rgba(29, 29, 29, 0.25);
  background-color: #ffffff;
  border-radius: 0.5rem;
  width: 5rem;
  color: #000000;
  padding: 0.3rem;
  font-weight: 300;
  outline: none;

  @media screen and (max-width: 360px) {
    width: 7rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    width: 9rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 720px) {
    width: 12rem;
    height: 3rem;
    font-size: 1.2rem;
  }
  &:hover {
    background-color: #f9f9f9;
  }
  &:focus {
    background-color: #f9f9f9;
  }
`
