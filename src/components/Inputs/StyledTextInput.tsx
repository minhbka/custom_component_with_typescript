import React, {useState, FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {primary, secondary, accent, black, gray} = colors;
import {InputProps} from './types';
import SmallText from '../Texts/SmallText';
const InputWrapper = styled.View`
  width: 100%;
`;
const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 2px;
  border-color: ${secondary};
  padding-right: 10px;
`;
const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 15px;
  z-index: 1;
`;
const InputField = styled.TextInput`
  background-color: ${primary};
  height: 60px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${secondary};
  margin-vertical: 3px;
  margin-bottom: 10px;
  padding: 15px;
  padding-left: 65px;
  padding-right: 55px;
  font-size: 16px;
  color: ${black};
`;
const StyledTextInput: FunctionComponent<InputProps> = ({
  icon,
  label,
  isPassword,
  ...props
}) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
  const [hidePassword, setHidePassword] = useState(true);
  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(secondary);
  };

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(primary);
  };

  return (
    <InputWrapper>
      <LeftIcon>
        <Icon name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor={gray}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        secureTextEntry={isPassword && hidePassword}
        style={[{backgroundColor: inputBackgroundColor}, props.style]}
      />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}>
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            size={30}
            color={black}
          />
        </RightIcon>
      )}
    </InputWrapper>
  );
};
export default StyledTextInput;
