import styled from 'styled-components'

export const Button = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

  &:hover {
    background-color: #2c2c2c;
  }
`
