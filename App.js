import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import MainLayout from "./screens/MainLayout";
const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainLayout" component={MainLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
