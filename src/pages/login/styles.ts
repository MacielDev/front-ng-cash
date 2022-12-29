import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      @media screen and (max-width: 360px) {
        width: 15rem;
      }

      @media screen and (min-width: 360px) and (max-width: 720px) {
        width: 17rem;
      }
    }
    input {
      margin-bottom: 1.2rem;
    }
  }
`
