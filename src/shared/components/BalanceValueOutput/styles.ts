import styled from 'styled-components'

export const ValueOutput = styled.div`
  box-sizing: border-box;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 2px rgba(29, 29, 29, 0.25);
  border-radius: 0.25rem;
  font-weight: 300;

  @media screen and (max-width: 360px) {
    width: 15rem;
    height: 2rem;
    font-size: 1rem;
    padding: 0.3rem 0 0.3rem 0.5rem;
    text-align: center;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    width: 18rem;
    height: 3rem;
    font-size: 2rem;
    padding: 0.3rem 0 0.3rem 0.5rem;
    text-align: center;
  }

  @media screen and (min-width: 720px) {
    width: 25rem;
    height: 4rem;
    font-size: 2.5rem;
    padding: 0.4rem 0 0.4rem 0.5rem;
    text-align: center;
  }
`
