import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constans";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import JobPreview from "../components/JobPreview";
import MyButton from "../components/MyButton";

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [mode, setMode] = useState("Design");
  const data = useSelector((state) => state.jobsReducer);
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
          flexDirection: "row",
          width: "100%",
          height: 60,
        }}
      >
        <TextInput
          placeholder="Search..."
          style={{
            width: "80%",
            backgroundColor: COLORS.gray,
            borderTopLeftRadius: SIZES.radius,
            borderBottomLeftRadius: SIZES.radius,
            ...FONTS.body3,
            paddingLeft: 15,
          }}
          placeholderTextColor={COLORS.gray1}
          value={text}
          onChangeText={onChangeText}
        />
        <View
          style={{
            width: "20%",
            backgroundColor: COLORS.gray,
            borderTopRightRadius: SIZES.radius,
            borderBottomRightRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={24} color={COLORS.gray1} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
        }}
      >
        <View style={{ width: "100%", paddingVertical: SIZES.padding }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            Popular Jobs
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 150,
            backgroundColor: COLORS.purple,
            borderRadius: SIZES.radius,
            // paddingVertical: 2,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 5,
                }}
                source={data[4].icon}
              />

              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Mockitt</Text>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {data[4].profession}
              </Text>
              <Text style={{ color: COLORS.white }}>{data[4].company}</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.black,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SIZES.radius,
                width: "65%",
                height: 40,
              }}
              onPress={() =>
                navigation.navigate("Details", {
                  id: data[4].id,
                  mode: "appliedScreen",
                })
              }
            >
              <Text
                style={{
                  color: COLORS.white,
                }}
              >
                Apply Job
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          // marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {["Design", "Development", "Research", "Marketing"].map((item) => {
          if (mode === item) {
            return (
              <MyButton
                title={item}
                textStyle={{
                  color: COLORS.purple,
                }}
                containerStyle={{
                  width: "25%",
                  height: "25%",
                  margin: 0,
                  backgroundColor: COLORS.gray,
                }}
              />
            );
          }

          return (
            <MyButton
              title={item}
              containerStyle={{
                width: "25%",
                height: "25%",
                margin: 0,
              }}
              onPress={() => setMode(item)}
            />
          );
        })}
      </View>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "space-between",
        }}
      >
        {data.filter((item) => item.category === mode).length === 0 ? (
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            Empty
          </Text>
        ) : (
          data
            .filter((item) => item.category === mode)
            .map((job) => (
              <JobPreview
                onPress={() =>
                  navigation.navigate("Details", {
                    id: job.id,
                    mode: "appliedScreen",
                  })
                }
                key={job.id}
                {...job}
              />
            ))
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
