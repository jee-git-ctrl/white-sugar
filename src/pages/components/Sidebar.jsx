import * as React from "react";
import styled from 'styled-components';
import Type from "../data/Type.json";


const ShowingType = styled.div`
  border: 1px solid black;
  padding: 2px 5px;
`;
const Bar = styled.div`
  position: fixed;
  width: 20%;
  background-color: #e8e9eb;
  z-index: 10;
`;

const SideBar = () => {
  return (
    <Bar>
      {Type.map((value => {
        return (
          <ShowingType>
            {value.chinese}
            <br />
            {value.english}
          </ShowingType>
        );
      }))}
    </Bar>
  )
}

export default SideBar;