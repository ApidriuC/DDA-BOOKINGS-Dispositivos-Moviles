import React, { version } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Contact = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.sloganWrapper}>DDA Bookings</Text>
          <View style={styles.background}>
            <Image
              style={styles.Mostacho}
              source={require("../assets/mostacho1.png")}
            />
            <Text style={styles.Texto}>Visitanos en:</Text>
            <Text style={styles.Texto1}>Calle 21 #12 -11 Barrio: Tayrona</Text>
            <Text style={styles.Texto}>Contáctanos:</Text>

            <View style={styles.imagenes1}>
              <View style={styles.imagenes}>
                <View>
                  <TouchableOpacity style={styles.botton1}>
                    <Text style={styles.TextoWsp}>WhatsApp:</Text>
                    <Image
                      style={styles.FotosWsp}
                      source={require("../assets/whatsapp.png")}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.botton1}>
                  <Text style={styles.TextoCorreo}>Correo:</Text>
                  <Image
                    style={styles.FotosCorreo}
                    source={require("../assets/mail.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imagenes}>
                <TouchableOpacity style={styles.botton1}>
                  <Text style={styles.TextoRedes}>Instagram:</Text>
                  <Image
                    style={styles.FotosIg}
                    source={require("../assets/ig.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botton1}>
                  <Text style={styles.TextoRedes}>Facebook:</Text>
                  <Image
                    style={styles.FotosFb}
                    source={require("../assets/fb.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5927e5",
  },
  background: {
    height: height * 0.9,
    width: width * 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFF",
  },
  sloganWrapper: {
    marginTop: 60,
    marginBottom: 40,
    fontSize: 40,
    fontFamily: "Roboto_700Bold",
    color: "white",
    textAlign: "center",
  },
  Mostacho: {
    marginTop: -35,
    marginHorizontal: 145,
    width: 100,
    height: 100,
  },
  Texto: {
    fontSize: 30,
    marginTop: 30,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontWeight: "bold",
  },
  Texto1: {
    fontSize: 25,
    marginTop: 10,
    flexDirection: "column",
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
  },
  imagenes1: {
    flexDirection: "row",
  },
  imagenes: {
    flexDirection: "column",
    alignItems: "center",
  },
  FotosWsp: {
    width: 70,
    height: 70,
    alignItems: "center",
    borderRadius: 35,
  },
  FotosCorreo: {
    width: 70,
    height: 70,
    alignItems: "center",
    borderRadius: 35,
  },
  FotosIg: {
    width: 70,
    height: 70,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 35,
  },
  FotosFb: {
    width: 70,
    height: 70,
    alignItems: "center",
    borderRadius: 35,
  },
  TextoWsp: {
    fontSize: 30,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontWeight: "bold",
  },
  TextoCorreo: {
    fontSize: 30,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontWeight: "bold",
  },
  TextoRedes: {
    fontSize: 30,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontWeight: "bold",
  },
  botton1: {
    marginLeft: 50,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
  },
});
