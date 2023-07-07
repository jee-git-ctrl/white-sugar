import * as React from "react";
import styled from 'styled-components';
import Type from "../data/Type.json";


const ShowingType = styled.a`
  border-top: 1px solid #a8a9ab;
  font-size: 1.5em;
  color: black;
  text-decoration: none;
  padding: 2px 5px;
`;
const Bar = styled.div`
  display: grid;
  :hover {  
    background-color: #e8e9eb;
  }
`;

const SideBar = () => {
  return (
    <Bar>
      {Type.map((value => {
        return (
          <ShowingType href={`#${value.name}`}>
            {value.name}
          </ShowingType>
        );
      }))}
    </Bar>
  )
}

export default SideBar;