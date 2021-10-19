import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/core";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const User = () => {
  const navigation = useNavigation();

  const Salir = () => {
    const logOut = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Login");
        console.log("Logout");
      }
    });
    return logOut;
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
      <Text style={styles.sloganWrapper}>DDA Bookings</Text>
        <View style={styles.background}>
          <Image
            style={styles.Mostacho}
            source={require("../assets/User.png")}
          />
          <Text style={styles.Nombre}>Nombre Usuario{}</Text>
          <TouchableOpacity style={styles.Logout}>
            <View style={styles.containerCerrar}>
              <Image
                style={styles.Fotos}
                source={require("../assets/editar.png")}
              />
              <Text style={styles.Salir}>Editar Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Logout}>
            <View style={styles.containerCerrar}>
              <Image
                style={styles.Fotos}
                source={require("../assets/biosegu.webp")}
              />
              <Text style={styles.Salir}>Normas de Bioseguridad</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Logout} onPress={Salir}>
            <View style={styles.containerCerrar}>
              <Image
                style={styles.CerrarSesion}
                source={require("../assets/CerrarSesion.png")}
              />
              <Text style={styles.Salir}>Cerrar Sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5927e5",
  },
  Logout: {
    width: "80%",
    marginTop: 40,
    marginLeft: width*0.1,
    marginBottom: 20,
    backgroundColor: '#FFFF',
    alignItems: "center",
    borderRadius: 20,
  },
  Salir: {
    fontSize: 25,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
    textAlign: "center",
  },
  CerrarSesion: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginTop: 5,
  },
  Fotos: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginBottom: 5,
  },
  containerCerrar: {
    alignItems: "center",
    flexDirection: "row",
  },
  sloganWrapper: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 40,
    fontFamily: "Roboto_700Bold",
    color: "white",
    textAlign: "center",
  },
  background: {
    height: height * 0.9,
    width: width * 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FDF7FF",
  },
  Mostacho: {
    marginTop: 20,
    marginHorizontal: 145,
    width: 100,
    height: 100,
  },
  Nombre: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: "Roboto_700Bold",
    color: "#000000",
    textAlign: "center",
  },
});
