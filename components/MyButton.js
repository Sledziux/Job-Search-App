import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constans";

const MyButton = ({ containerStyle, title, onPress, textStyle }) => {
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        height: 40,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.purple,
          ...FONTS.h4,
          ...textStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
