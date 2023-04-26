import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
const {primary} = colors;
const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  background-color: ${primary};
`;
const MainContainer: FunctionComponent = () => {
  return <StyledView></StyledView>;
};
export default MainContainer;
