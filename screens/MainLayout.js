import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import { COLORS, SIZES } from "../constans";
import IconTabScreen from "../components/IconTabScreen";
import UserInfoScreen from "./UserInfoScreen";
import DetailJobScreen from "./DetailJobScreen";
const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.black,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <IconTabScreen name="home" focused={focused} />;
          },
        }}
      />

      <Tab.Screen
        name="Details"
        component={DetailJobScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <IconTabScreen name="file-o" focused={focused} />;
          },
        }}
      />

      <Tab.Screen
        name="user"
        component={UserInfoScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <IconTabScreen name="user" focused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainLayout;
