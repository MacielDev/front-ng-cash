import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-sizing: border-box;
  padding: 0.4rem;

  @media screen and (max-width: 360px) {
    width: 4.5rem;
  }

  @media screen and (min-width: 360px) and (max-width: 720px) {
    width: 5.5rem;
  }

  @media screen and (min-width: 720px) {
    width: 6rem;
  }
`
