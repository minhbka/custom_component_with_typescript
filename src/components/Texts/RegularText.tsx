import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
const {black} = colors;
import {TextProps} from './types';
const StyledText = styled.Text`
  font-size: 15px;
  color: ${black};
  text-align: left;
`;
const RegularText: FunctionComponent<TextProps> = props => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};
export default RegularText;
