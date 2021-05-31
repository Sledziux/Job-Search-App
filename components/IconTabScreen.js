import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constans";

const IconTabScreen = ({ focused, name }) => {
  if (focused) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          height: "80%",
        }}
      >
        <FontAwesome size={22} name={name} color={COLORS.white} />
        <FontAwesome size={10} name="dot-circle-o" color={COLORS.white} />
      </View>
    );
  }
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        height: "80%",
      }}
    >
      <FontAwesome size={22} name={name} color={COLORS.white} />
      <View style={{ height: 10 }}></View>
    </View>
  );
};

export default IconTabScreen;
