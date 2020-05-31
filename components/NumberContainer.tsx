import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Colors } from "../constants/colors";

interface NumberContainerProps extends PropsWithChildren<{}> {
  style?: ViewStyle;
}

const NumberContainer = (props: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.secondary,
    fontSize: 22,
  },
});
