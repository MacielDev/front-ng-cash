import styled from 'styled-components'

export const Button = styled.button`
  box-sizing: border-box;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 2px rgba(29, 29, 29, 0.25);
  background-color: #ffffff;
  border-radius: 0.25rem;
  width: 5rem;
  color: #000000;
  font-weight: 300;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.4rem;
  }

  @media screen and (max-width: 360px) {
    width: 7.4rem;
    height: 2rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    width: 8.9rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 720px) {
    width: 12.4rem;
    height: 3rem;
    font-size: 1.7rem;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`
