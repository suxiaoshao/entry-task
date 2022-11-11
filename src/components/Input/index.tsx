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
import React, {useState} from 'react';
import styles from './styles';

export interface InputProps extends TextInputProps {
  /**
   * container style,include icon and input
   * */
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  /**
   * icon source,if not set,will not show icon
   * */
  iconSource?: ImageSourcePropType | undefined;
  /**
   * set style when input is active(mean focus)
   * */
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
  /**
   * if the input is focused
   * */
  const [active, setActive] = useState(false);

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
