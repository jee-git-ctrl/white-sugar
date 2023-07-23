import * as React from "react";
import styled from 'styled-components';
import Type from "../data/Type.json";

const Bar = styled.div`
  display: flex;
  :hover {  
    background-color: #e8e9eb;
  }
`;
const ShowingType = styled.a`
  border-radius: 5px;
  width: fit-content;
  font-size: 1.3em;
  color: black;
  text-decoration: none;
  margin: 0 5px;
  padding: 2px 5px;
`;

const SideBar = () => {
  return (
    <Bar>
      {Type.map((value => {
        const { name, englishName } = value
        return (
          <ShowingType key={value.name} href={`#${value.name}`}>
            {name}
            <br />
            {englishName}
          </ShowingType>
        );
      }))}
    </Bar>
  )
}

export default SideBar;