import React from "react";
import SideBar from "../components/Sidebar";
import styled from "styled-components";

const Header = styled.h1`
  height: fit-content;
  min-height: 10vh;
  margin: 0;
`;
const Side = styled.div`
  overflow-y: auto;
`;
const Children = styled.div`
  margin: 0 auto;
  maxWidth: 100%;
  padding: 0 1rem;
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
    <>
    <Header>
      白糖海鲜
      <br />
      White Sugar Seafood Restaurant
    </Header>

    <Side>
      <SideBar />
    </Side>

    <Children>
      {children}
    </Children>

    <Footer>
      © 2023 WHITE SUGAR SEAFOOD RESTAURANT
    </Footer>
    </>
  )
}