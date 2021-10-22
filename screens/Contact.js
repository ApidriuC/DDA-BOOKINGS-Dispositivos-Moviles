import React, { version } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Contact = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sloganWrapper}>DDA Bookings</Text>
        <View style={styles.background}>
          <Image
            style={styles.Mostacho}
            source={require("../assets/mostacho1.png")}
          />
          <View>
            <Text style={styles.Texto}>Visitanos en:</Text>
            <Text style={styles.Texto1}>Calle 21 #12 -11 Barrio: Tayrona</Text>
            <Text style={styles.Texto}>Contáctanos:</Text>
          </View>

          <View style={styles.imagenes1}>
            <TouchableOpacity style={styles.botton1} onPress={() => { Linking.openURL('https://api.whatsapp.com/send/?phone=573184064043&text&app_absent=0') }}>
              <Text style={styles.TextoWsp}>WhatsApp:</Text>
              <Image
                style={styles.FotosWsp}
                source={require("../assets/whatsapp.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botton1} onPress={() => { Linking.openURL('https://www.instagram.com/apidriuc/?hl=es') }}>
              <Text style={styles.TextoWsp}>Instagram:</Text>
              <Image
                style={styles.FotosIg}
                source={require("../assets/ig.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botton1} onPress={() => { Linking.openURL('https://www.facebook.com/ApidriuC/') }}>
              <Text style={styles.TextoWsp}>Facebook:</Text>
              <Image
                style={styles.FotosFb}
                source={require("../assets/fb.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botton1} onPress={() => { Linking.openURL('mailto:andresfloncam@gmail.com') }}>
              <Text style={styles.TextoWsp}>Correo:</Text>
              <Image
                style={styles.FotosCorreo}
                source={require("../assets/mail.png")}
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5927e5",
  },
  background: {
    alignItems: 'center',
    height: height,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#FFFF",
  },
  sloganWrapper: {
    marginTop: 70,
    marginBottom: 60,
    fontSize: 23,
    fontFamily: "Roboto_700Bold",
    color: "white",
    textAlign: "center",
  },
  Mostacho: {
    marginTop: -45,
    width: 150,
    height: 150,
  },
  Texto: {
    fontSize: 23,
    marginTop: 30,
    color: "#362B48",
    fontFamily: "Roboto_700Bold",
  },
  Texto1: {
    fontSize: 21,
    marginTop: 10,
    flexDirection: "column",
    color: "#362B48",
    fontFamily: "Roboto_400Regular",
  },
  imagenes1: {
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 40,
    marginRight: 40,
  },
  FotosWsp: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  FotosCorreo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  FotosIg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  FotosFb: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  TextoWsp: {
    fontSize: 21,
    color: "#362B48",
    fontFamily: "Roboto_700Bold",
  },
  botton1: {
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
