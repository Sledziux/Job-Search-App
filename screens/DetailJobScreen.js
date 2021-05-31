import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import MyButton from "../components/MyButton";
import { COLORS, SIZES, FONTS } from "../constans";
import AppliedJobsScreen from "./AppliedJobsScreen";
import { useDispatch, useSelector } from "react-redux";
import addJob from "../store/actions/addJob";
const DetailJobScreen = ({ route, navigation }) => {
  // console.log(route);

  if (!route.params || route.params.mode == "details") {
    return <AppliedJobsScreen navigation={navigation} />;
  }

  const dispatch = useDispatch();
  const id = route.params.id;

  const data = useSelector(
    (state) => state.jobsReducer.filter((item) => item.id === id)[0]
  );
  const { company, profession, icon, qualifications, responsibilities } = data;
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
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: SIZES.width / 5,
            height: SIZES.width / 5,
            borderRadius: SIZES.width / 14,
            marginBottom: SIZES.padding,
          }}
          source={icon}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h1,
            lineHeight: 32,
          }}
        >
          {profession}
        </Text>

        <Text
          style={{
            color: COLORS.gray1,
            fontSize: 24,
            lineHeight: 30,
          }}
        >
          {company}
        </Text>

        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
            marginTop: SIZES.padding / 2,
            marginBottom: SIZES.padding,
          }}
        >
          Apply on or before - 31 June, 2021
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.gray,
          height: SIZES.height / 1.6,
          borderRadius: SIZES.radius,
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: SIZES.padding / 2,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: SIZES.padding * 1.5,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            Job Description
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: COLORS.gray1, ...FONTS.h4 }}>
            Prefered Qualifications:
          </Text>

          {qualifications.map((item, index) => (
            <Text key={index} style={{ color: COLORS.white, ...FONTS.h5 }}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: COLORS.gray1, ...FONTS.h4 }}>
            Responsibilities:
          </Text>

          {responsibilities.map((item, index) => (
            <Text key={index} style={{ color: COLORS.white, ...FONTS.h5 }}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>

        <MyButton
          title="Apply Now"
          containerStyle={{
            width: "70%",
            height: SIZES.padding * 2,
          }}
          textStyle={{
            fontSize: 18,
          }}
          onPress={() => {
            navigation.navigate("Details", { mode: "details" });
            dispatch(addJob(data));
          }}
        />
      </View>
    </View>
  );
};

export default DetailJobScreen;
