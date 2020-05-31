import React, { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface CardProps extends PropsWithChildren<{}> {
  style?: ViewStyle;
}

export const Card = (props: CardProps) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 6,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});
