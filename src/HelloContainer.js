import React from "react";
import styled from 'styled-components';
import Hello from "./Hello";

const Para = styled.div`
  color: red;
  background-color: ${({hasTooltip}) => hasTooltip ? 'blue' :  'green'}
`;


const HelloContainer = props => {
  return (
    <div>
      <Hello {...props} />
      <Para id="123" alt="this is tooltip" hasTooltip={true}>This is test</Para>
    </div>
  );
};

export default HelloContainer;
