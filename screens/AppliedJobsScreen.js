import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MyButton from "../components/MyButton";
import { COLORS, SIZES, FONTS } from "../constans";
import { useSelector } from "react-redux";
const AppliedJobsScreen = (props) => {
  const data = useSelector((state) => state.myJobsReducer);
  // console.log(data);
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
      <View
        style={{
          width: "90%",
          height: SIZES.padding * 2,
          backgroundColor: COLORS.purple,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.h3,
          }}
        >
          Applied Jobs
        </Text>
      </View>

      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              width: "100%",
              height: SIZES.height / 5,
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.radius,
              padding: SIZES.padding,
              position: "relative",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                color: COLORS.purple,
                ...FONTS.h2,
              }}
            >
              {item.profession}
            </Text>

            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {item.company}
            </Text>

            <Image
              source={item.icon}
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.radius,
                position: "absolute",
                right: SIZES.padding / 2,
                top: SIZES.padding / 2,
              }}
            />

            <MyButton
              containerStyle={{
                backgroundColor: COLORS.purple,
                width: "30%",
                position: "absolute",
                right: SIZES.padding / 2,
                bottom: SIZES.padding / 2,
              }}
              textStyle={{
                color: COLORS.black,
              }}
              title="View"
              onPress={() => {
                props.navigation.navigate("Details");
                props.navigation.setParams({
                  id: item.id,
                  mode: "appliedScreen",
                });
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AppliedJobsScreen;
