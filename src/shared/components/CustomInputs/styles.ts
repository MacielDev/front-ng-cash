import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #1d1d1d;
  label {
    font-size: 1.2rem;
    margin-bottom: 0.625rem;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 0.25rem;
  color: #7e7e7e;

  outline: none;
  padding: 0.5rem;
  border: solid 1px #1d1d1d;

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
    border: solid 2px #7e7e7e;
  }
  &:focus {
    border: solid 2px #7e7e7e;
  }
`
