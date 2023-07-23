import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  grid-area: head;
  height: fit-content;
  min-height: 10vh;
  margin: 0;
`;
const Children = styled.div`
  margin: 0 auto;
  maxWidth: 90%;
  padding: 0 1rem;
`;
const Footer = styled.div`
  grid-area: foot;
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
    <>
    <Header>
      白糖海鲜
      <br />
      White Sugar Seafood Restaurant
    </Header>

    <Children>
      {children}
    </Children>

    <Footer>
      © 2023 WHITE SUGAR SEAFOOD RESTAURANT
    </Footer>
    </>
  )
}