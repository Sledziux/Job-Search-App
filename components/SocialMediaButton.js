import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constans";

const SocialMediaButton = ({ title, link }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 55,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.radius,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: COLORS.purple,
          ...FONTS.h2,
          paddingRight: 15,
        }}
      >
        {title}:{" "}
      </Text>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h2,
          fontSize: 16,
        }}
      >
        {link}
      </Text>
    </View>
  );
};

export default SocialMediaButton;
