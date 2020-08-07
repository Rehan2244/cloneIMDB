import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "./screens/fvrtScreen";
import HomeScreen from "./screens/homeScreen";
import ImageContainer from "./screens/imageToDisplay";
import movieDetail from "./screens/movieDetail";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const createHomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="About" component={movieDetail} />
  </Stack.Navigator>
);
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          style={{ backgroundColor: "red" }}
          activeColor="white"
          inactiveColor="purple"
          barStyle={{ backgroundColor: "#b2b38d" }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            name="Home"
            children={createHomeStack}
          />
          <Tab.Screen
            options={{
              tabBarLabel: "Favourite",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="star" color={color} size={26} />
              ),
            }}
            name="Favourite"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
