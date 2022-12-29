import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  box-sizing: border-box;
  div {
    div {
      div {
        margin-bottom: 0.5rem;
      }
      img {
        @media screen and (max-width: 360px) {
          width: 15rem;
        }

        @media screen and (min-width: 360px) and (max-width: 720px) {
          width: 17rem;
        }
      }
    }
    span {
      display: flex;
      justify-content: space-between;
    }
  }
`
