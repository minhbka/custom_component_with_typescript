import {ReactNode, ComponentProps} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof Icon>['name'];
}
export type InputProps = TextInputProps & ExtraInputProps;
