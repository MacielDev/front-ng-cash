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
    a {
      text-decoration: none;
      font-size: 1rem;
      margin-top: 0.5rem;
      color: #1d1d1d;
      &:hover {
        color: #7e7e7e;
      }
    }
  }
`
