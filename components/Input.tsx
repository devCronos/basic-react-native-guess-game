import React, { ReactPropTypes, Props, HTMLProps } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
} from "react-native";

export interface InputProps extends TextInputProps {
  style?: ViewStyle;
}
// type InputProps = {
//   // style?: ViewStyle;
//   [key: string]: Props<HTMLInputElement> & HTMLProps<HTMLInputElement>;
// };

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
