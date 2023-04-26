/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import MainContainer from './src/components/Containers/MainContainer';
import BigText from './src/components/Texts/BigText';
import RegularText from './src/components/Texts/RegularText';
import SmallText from './src/components/Texts/SmallText';
import StyledTextInput from './src/components/Inputs/StyledTextInput';
function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MainContainer>
      <BigText>Yo! Big</BigText>
      <RegularText>Yo! Regular Text here</RegularText>
      <SmallText style={{marginBottom: 20}}>SmallText</SmallText>
      <StyledTextInput
        label="Email Address"
        icon="email-variant"
        value={email}
        onChangeText={setEmail}
        placeholder="email@address.com"
        keyboardType="email-address"
        style={{marginBottom: 20}}
      />
      <StyledTextInput
        label="Full Name"
        icon="account"
        value={fullName}
        onChangeText={setFullName}
        placeholder="홍길동"
        style={{marginBottom: 20}}
      />

      <StyledTextInput
        label="Password"
        icon="lock-open"
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        isPassword={true}
        style={{marginBottom: 20}}
      />
    </MainContainer>
  );
}
export default App;
