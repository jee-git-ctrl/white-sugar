import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Type from "../data/Type.json";

const Bar = styled.div`
  display: flex;
  height: max-content;
  position: sticky;
  top: 0;
  padding-top: 5px;
  background-color: #fff;
  overflow-y: auto;
  z-index: 20;

  :hover {  
    background-color: #e8e9eb;
  }
`;
const TypeLink = styled.a`
  border-radius: 5px;
  font-size: 1.3em;
  color: black;
  text-decoration: none;
  margin: 0 5px;
  padding: 2px 5px;
`;
const TypeText = styled.div`
  width: max-content;
`;

const NavBar = () => {
  const [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    console.log(selectedType);
  })

  const handleClicked = (type) => {
    setSelectedType(() => type);
  }

  return (
    <Bar>
      {Type.map(((value, index) => {
        const { name, englishName } = value
        return (
          <TypeLink key={englishName} href={`#${englishName}`} onClick={() => handleClicked(index)}>
            <TypeText>
              {name}
              <br />
              {englishName}
            </TypeText>
          </TypeLink>
        );
      }))}
    </Bar>
  )
}

export default NavBar;