import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const Container = styled.div`
  max-height: 100vh;
  overflow: auto;
`;
const Header = styled.h1`
  height: fit-content;
  min-height: 10vh;
  margin: 0;
`;
const Children = styled.div`
  margin: 0 auto;
  maxWidth: 100%;
`;
const Footer = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999;
  color: white;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        白糖海鲜
        <br />
        White Sugar Seafood Restaurant
      </Header>

      <NavBar />

      <Children>
        {children}
      </Children>

      <Footer>
        © 2023 WHITE SUGAR SEAFOOD RESTAURANT
      </Footer>
    </Container>
  )
}