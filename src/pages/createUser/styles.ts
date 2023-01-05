import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    @media screen and (max-width: 360px) {
      width: 15rem;
    }

    @media screen and (min-width: 360px) and (max-width: 720px) {
      width: 17rem;
    }
  }
  input {
    margin-bottom: 1rem;
  }
`
