import styled from 'styled-components'

export const Layout = styled.div`
  /* background: rgb(0, 107, 161);
  background: linear-gradient(
    0deg,
    rgba(0, 107, 161, 1) 0%,
    rgba(8, 62, 97, 1) 100%
  ); */
  background: transparent;
  display: grid;
  grid-template-rows: auto 1fr;
  color: white;
  width: 100%;
  min-height: 100vh;
  /* min-height: 92.98vh; */

  line-height: 1.6rem;
  letter-spacing: 2px;
  a {
    text-decoration: none;
    color: black;
  }
  .navbar {
    z-index: 10;
  }
`

export const PageWrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
`

export const ComponentWrapper = styled.div`
  width: 90vw;
  margin: 6rem auto;
  font-size: 1.4rem;
  padding-top: 5%;
  input {
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    input {
      font-size: 1rem;
    }
  }
`

export const HR = styled.div`
  width: 80%;
  border: 1px solid white;
  margin: 4rem auto;

  @media (max-width: 500px) {
    margin: 5% auto;
    width: 90%;
  }
`
