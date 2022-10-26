import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconSource?: ImageSourcePropType | undefined;
  activeContainStyle?: StyleProp<TextStyle>;
}

export default function ({
  containerStyle,
  iconStyle,
  iconSource,
  activeContainStyle,
  onFocus,
  onBlur,
  style: inputStyle,
  ...props
}: InputProps) {
  const [active, setActive] = React.useState(false);

  return (
    <View
      style={[styles.container, containerStyle, active && activeContainStyle]}>
      {iconSource && (
        <Image style={[styles.icon, iconStyle]} source={iconSource} />
      )}
      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        onFocus={e => {
          setActive(true);
          onFocus && onFocus(e);
        }}
        onBlur={e => {
          setActive(false);
          onBlur && onBlur(e);
        }}
      />
    </View>
  );
}
