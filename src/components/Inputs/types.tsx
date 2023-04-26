import {ReactNode, ComponentProps} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof Icon>['name'];
  isPassword?: Boolean;
}
export type InputProps = TextInputProps & ExtraInputProps;
