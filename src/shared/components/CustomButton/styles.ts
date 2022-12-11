import styled from 'styled-components'

export const Button = styled.button`
  background-color: #1d1d1d;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  @media screen and (max-width: 360px) {
    height: 1.75rem;
    width: 19rem;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    height: 2rem;
    width: 22rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 720px) {
    height: 2.25rem;
    width: 24rem;
    font-size: 1.17rem;
  }
  &:hover {
    background-color: #2c2c2c;
  }
`
