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

const HomeScreen = () => {
  return (
    <View style = {styles.todo}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <View style={styles.registerForm}>
            <Text style={styles.user}>Bienvenido!{}</Text>
            <TouchableOpacity style={styles.User}>
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
                <TouchableOpacity>
                  <Image
                    style={styles.CorteModerno}
                    source={require("../assets/CorteModerno.jpeg")}
                  />
                  <Text style={styles.Textos}>Corte Moderno</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.DepiladoBarba}
                    source={require("../assets/DepiladoBarba.jpeg")}
                  />
                  <Text style={styles.Textos}>Depilado Barba</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.CorteClasico}
                    source={require("../assets/CorteClasico.jpeg")}
                  />
                  <Text style={styles.Textos}>Corte Clasico</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.columnas}>
                <TouchableOpacity>
                  <Image
                    style={styles.MascarillaNegra}
                    source={require("../assets/MascarillaNegra.jpeg")}
                  />
                  <Text style={styles.Textos}>Mascarilla Negra</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.BarbaCompleta}
                    source={require("../assets/BarbaCompleta.jpeg")}
                  />
                  <Text style={styles.Textos}>Barba Completa</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.Perfilado}
                    source={require("../assets/Perfilado.jpeg")}
                  />
                  <Text style={styles.Textos}>Perfilado</Text>
                </TouchableOpacity>
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
  CorteModerno: {
    marginLeft: 10,
    marginTop: 30,
    width: 200,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  MascarillaNegra: {
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    width: 160,
    height: 300,
    alignItems: "center",
    borderRadius: 30,
  },
  DepiladoBarba: {
    marginLeft: 10,
    marginTop: 10,
    width: 200,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  BarbaCompleta: {
    marginLeft: 10,
    marginTop: 10,
    width: 160,
    height: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  CorteClasico: {
    marginLeft: 10,
    marginTop: 10,
    width: 200,
    height: 300,
    alignItems: "center",
    borderRadius: 30,
  },
  Perfilado: {
    marginLeft: 10,
    marginTop: 10,
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
  todo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF'
},
});
