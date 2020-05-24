import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#000",
    fontSize: 20,
  },
});
