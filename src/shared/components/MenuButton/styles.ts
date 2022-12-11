import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: #ffffff;
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 0px 4px 4px rgba(29, 29, 29, 0.25);
    border: 1px solid #cccccc;
  }
`
