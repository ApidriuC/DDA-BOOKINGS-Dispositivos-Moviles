import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import Bookings from "./screens/Bookings";
import Contact from "./screens/Contact";
import User from "./screens/User";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BookingsList from "./screens/BookingsList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions = {{
        activeTintColor: 'tomato'
      }}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Contact" component={Contact}/>
    </Tab.Navigator>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator} />
          <Stack.Screen
            // options={{ headerShown: false }}
            name="BookingsList"
            component={BookingsList}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Bookings"
            component={Bookings}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Contact"
            component={Contact}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="User"
            component={User}
          />
          <Stack.Screen name="Register" component={RegistrationScreen} 
          options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
