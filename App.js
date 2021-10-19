import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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


const Stack = createNativeStackNavigator();

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
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
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
          <Stack.Screen name="Register" component={RegistrationScreen} />
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
