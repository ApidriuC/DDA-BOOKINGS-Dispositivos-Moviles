import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.todo}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <View style={styles.registerForm}>
            <Text style={styles.user}>Bienvenido!{}</Text>
            <TouchableOpacity
              style={styles.User}
              onPress={() => {
                navigation.navigate("User");
              }}
            >
              <Image
                style={styles.imagenuser}
                source={require("../assets/User.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.descubretunuevo}>Descubre</Text>
            <Text style={styles.descubretunuevo}>Tu Nuevo</Text>
            <Text style={styles.look}>Look</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.registerForm}>
              <TouchableOpacity style={styles.buttonDestacado}>
                <Text style={styles.Destacado}>Destacado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpa}>
                <Text style={styles.Spa}>Spa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBarba}>
                <Text style={styles.Barba}>Barba</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCortes}>
                <Text style={styles.Cortes}>Cortes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonTeñido}>
                <Text style={styles.Teñido}>Teñido</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonProductos}>
                <Text style={styles.Teñido}>Productos</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View>
            <View style={styles.registerForm}>
              <View style={styles.columnas}>
                <View style={styles.columnas2}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.CorteModerno}
                      source={require("../assets/CorteModerno.jpeg")}
                    />
                    <Text style={styles.Textos}>Corte Moderno</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    Nuestro corte moderno es un look que aporta un estilo limpio
                    y diferente. Combina perfectamente con barbas abundantes.
                  </Text>
                  <View style={styles.registerForm}>
                    <Text style={styles.TextoValor}>$ 15.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.columnas3}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.DepiladoBarba}
                      source={require("../assets/DepiladoBarba.jpeg")}
                    />
                    <Text style={styles.Textos}>Depilado Barba</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    Afeitar una barba poblada requiere tiempo y cuidado cuando
                    se afeitan se pueden producir cortes. Ofrecemos nuestro
                    excelente servicio de corte con cuchilla con calidad y
                    seguridad.
                  </Text>
                  <View style={styles.registerForm}>
                    <Text style={styles.TextoValor}>$ 10.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.columnas4}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.CorteClasico}
                      source={require("../assets/CorteClasico.jpeg")}
                    />
                    <Text style={styles.Textos}>Corte Clasico</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    El corte clásico se caracteriza por ser casi completamente
                    simétrico y de una longitud corta o media, con un ligero
                    desvanecido desde la altura de las sienes hasta la nuca.
                  </Text>
                  <View style={styles.registerForm}>
                    <Text style={styles.TextoValor}>$ 17.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.columnas}>
                <View style={styles.columnas5}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.MascarillaNegra}
                      source={require("../assets/MascarillaNegra.jpeg")}
                    />
                    <Text style={styles.Textos}>Mascarilla Negra</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    Esta mascarilla negra contiene extractos de canela, flor de
                    loto, geranio y aceite de camelia. Ideal para espinillas y
                    puntos negros.
                  </Text>
                  <View style={styles.registerForm}>
                    <Text style={styles.TextoValor}>$ 10.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas2}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.columnas6}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.BarbaCompleta}
                      source={require("../assets/BarbaCompleta.jpeg")}
                    />
                    <Text style={styles.Textos}>Barba Completa</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    Realizamos el arreglo, perfilamiento, y corte completo a
                    gusto de cada cliente, este corte se realiza en toda la
                    barba.
                  </Text>
                  <View style={styles.registerForm}>
                    <Text style={styles.TextoValor}>$ 20.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas2}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.columnas6}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Bookings");
                    }}
                  >
                    <Image
                      style={styles.Perfilado}
                      source={require("../assets/Perfilado.jpeg")}
                    />
                    <Text style={styles.Textos}>Perfilado</Text>
                  </TouchableOpacity>
                  <Text style={styles.TextoInfo}>
                    Perfilado de la barba con cuchilla y correción de cortes
                    irregulares con tijera.
                  </Text>
                  <View style={styles.registerForm2}>
                    <Text style={styles.TextoValor}>$ 20.000</Text>
                    <TouchableOpacity
                      style={styles.bottonReservas2}
                      onPress={() => {
                        navigation.navigate("Bookings");
                      }}
                    >
                      <Image
                        style={styles.Reserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  user: {
    fontSize: 15,
    marginTop: 60,
    marginLeft: 10,
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  descubretunuevo: {
    fontSize: 40,
    marginTop: 2,
    marginLeft: 10,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
  },
  look: {
    fontSize: 40,
    marginTop: 2,
    marginLeft: 10,
    color: "#5927E5",
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
  },
  buttonDestacado: {
    backgroundColor: "#5927E5",
    width: "20%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonSpa: {
    backgroundColor: "#362B48",
    width: "12%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonBarba: {
    backgroundColor: "#362B48",
    width: "15%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonTeñido: {
    backgroundColor: "#362B48",
    width: "15%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonProductos: {
    backgroundColor: "#362B48",
    width: "20%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonCortes: {
    backgroundColor: "#362B48",
    width: "15%",
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  Destacado: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    fontWeight: "bold",
  },
  Spa: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    fontWeight: "bold",
  },
  Barba: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    fontWeight: "bold",
  },
  Cortes: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    fontWeight: "bold",
  },
  Teñido: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    fontWeight: "bold",
  },
  registerForm: {
    flexDirection: "row",
  },
  registerForm2: {
    marginTop: 30,
    flexDirection: "row",
  },
  CorteModerno: {
    width: 200,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  MascarillaNegra: {
    width: 160,
    height: 300,
    alignItems: "center",
    borderRadius: 30,
  },
  DepiladoBarba: {
    width: 200,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  BarbaCompleta: {
    width: 160,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  CorteClasico: {
    width: 200,
    height: 300,
    alignItems: "center",
    borderRadius: 30,
  },
  Perfilado: {
    width: 160,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  Textos: {
    fontSize: 20,
    marginTop: 10,
    flexDirection: "column",
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontWeight: "bold",
  },
  columnas: {
    flexDirection: "column",
  },
  columnas2: {
    marginLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    height: 370,
    flexDirection: "column",
    backgroundColor: "#E3E4E5",
  },
  columnas3: {
    marginLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    height: 400,
    flexDirection: "column",
    backgroundColor: "#E3E4E5",
  },
  columnas4: {
    marginLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    height: 500,
    flexDirection: "column",
    backgroundColor: "#E3E4E5",
  },
  columnas5: {
    marginLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 160,
    height: 500,
    flexDirection: "column",
    backgroundColor: "#E3E4E5",
  },
  columnas6: {
    marginLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    width: 160,
    height: 385,
    flexDirection: "column",
    backgroundColor: "#E3E4E5",
  },
  User: {
    marginLeft: 330,
    position: "absolute",
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#FFFF",
    width: "15%",
    height: "80%",
  },
  imagenuser: {
    width: 50,
    height: 50,
  },
  TextoBotones: {
    flexDirection: "column",
  },
  buttomPart: {
    flex: 1,
  },
  todo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
  TextoInfo: {
    fontSize: 16,
    marginTop: 10,
    flexDirection: "column",
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "justify",
  },
  TextoValor: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 15,
    flexDirection: "column",
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    textAlign: "left",
    fontWeight: "bold",
  },
  Reserva: {
    width: 40,
    height: 40,
    alignItems: "center",
  },
  bottonReservas: {
    marginLeft: 75,
    marginTop: 8,
    width: 50,
    alignItems: "center",
    alignContent: "center",
  },
  bottonReservas2: {
    marginLeft: 36,
    marginTop: 8,
    width: 50,
    alignItems: "center",
    alignContent: "center",
  },
});
