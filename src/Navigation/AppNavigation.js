import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/AppScreen/HomeScreen";
import FishScreen from "../Screen/AppScreen/FishScreen";
import FishDetail from "../Screen/DetailScreen/FishDetail";
import SettingScreen from "../Screen/AppScreen/SettingScreen";
import BBMScreen from "../Screen/AppScreen/BBMScreen";
import BeritaDetail from "../Screen/DetailScreen/BeritaDetail";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "BBM") {
            iconName = focused ? "flame" : "flame";
          } else if (route.name === "Fish") {
            iconName = focused ? "fast-food-sharp" : "fast-food-sharp";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings-sharp" : "settings-sharp";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="BBM" component={BBMScreen} />
      <Tab.Screen name="Fish" component={FishScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FishDetail" component={FishDetail} />

      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
