import styled from 'styled-components'

export const Button = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #1d1d1d;
  color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  font-size: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 460px) {
    width: 3.75rem;
    height: 3.75rem;
    padding: 0.2rem;
    font-size: 0.6rem;
  }

  &:hover {
    background-color: #2c2c2c;
  }
`
