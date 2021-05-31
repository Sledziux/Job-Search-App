import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constans";
import MyButton from "./MyButton";
const JobPreview = ({ onPress, icon, company, profession, id, navigation }) => {
  return (
    <View
      style={{
        width: "45%",
        height: SIZES.height / 3,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.radius,
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        // alignSelf: "center",
        marginBottom: SIZES.padding * 1.5,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 50,
          height: 50,
          borderRadius: 15,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}
        >
          {profession}
        </Text>

        <Text
          style={{
            color: COLORS.gray1,
            ...FONTS.h5,
          }}
        >
          {company}
        </Text>
      </View>
      <MyButton onPress={onPress} title="Apply Job" />
    </View>
  );
};

export default JobPreview;
