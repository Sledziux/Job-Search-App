import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTS } from "../constans";
import { Ionicons } from "@expo/vector-icons";
import SocialMediaButton from "../components/SocialMediaButton";
const UserInfoScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: SIZES.padding / 2,
        paddingVertical: 40,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 25,
          left: 5,
          zIndex: 99,
        }}
        onPress={navigation.goBack}
      >
        <Ionicons name="chevron-back-circle" size={50} color={COLORS.gray1} />
      </TouchableOpacity>
      <Image
        style={{
          width: "75%",
          height: SIZES.height / 3,
          borderRadius: SIZES.radius,
        }}
        resizeMode="cover"
        source={require("../assets/daniel.jpg")}
      />

      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.radius,
          position: "relative",
          top: "-5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#DADADA",
            ...FONTS.h2,
            fontSize: 25,
          }}
        >
          Daniel
        </Text>

        <Text
          style={{
            color: COLORS.gray1,
            ...FONTS.h2,
            fontSize: 21,
          }}
        >
          React Developer
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "42%",

            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#3A393C",
              ...FONTS.h3,
              lineHeight: 25,
            }}
          >
            Actively Looking
          </Text>
          <Ionicons name="shield-checkmark" size={20} color={COLORS.gray1} />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: "-10%",
          height: SIZES.height / 2,
          justifyContent: "space-around",
        }}
      >
        <SocialMediaButton title="GitHub" link="https://github.com/" />
        <SocialMediaButton title="Twitter" link="https://twitter.com/" />
        <SocialMediaButton title="Facebook" link="https://www.facebook.com/" />
        <SocialMediaButton title="Linkedin" link="https://linkedin.com/" />
        <SocialMediaButton title="Gmail" link="https://gmail.com/" />
      </View>
    </View>
  );
};

export default UserInfoScreen;
