import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.userHeader}>
          <Text style={styles.user}>Bienvenido!{ }</Text>
          <TouchableOpacity onPress={() => navigation.navigate("User")}
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
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.buttonDestacado}>
            <Text style={styles.Destacado}>Destacado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategories}>
            <Text style={styles.btnText}>Spa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategories}>
            <Text style={styles.btnText}>Barba</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategories}>
            <Text style={styles.btnText}>Cortes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategories}>
            <Text style={styles.btnText}>Teñido</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategories}>
            <Text style={styles.btnText}>Productos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={styles.columnL}>

            <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/CorteModerno.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Corte moderno</Text>
                <Text style={styles.descriptionService}>Nuestro corte moderno es un look que aporta un estilo limpio
                    y diferente. Combina perfectamente con barbas abundantes.</Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$25.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
            </View>

            <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/DepiladoBarba.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Depilado Barba</Text>
                <Text style={styles.descriptionService}>Afeitar una barba poblada requiere tiempo y cuidado cuando
                    se afeitan se pueden producir cortes. Ofrecemos nuestro
                    excelente servicio de corte con cuchilla con calidad y
                    seguridad.</Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$10.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
            </View>

            <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/CorteClasico.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Corte Clásico</Text>
                <Text style={styles.descriptionService}>
                  El corte clásico se caracteriza por ser casi completamente
                  simétrico y de una longitud corta o media, con un ligero
                  desvanecido desde la altura de las sienes hasta la nuca.
                </Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$17.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
            </View>

          </View>
          <View style={styles.columnR}>

          <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/MascarillaNegra.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Mascarilla Negra</Text>
                <Text style={styles.descriptionService}>
                  Esta mascarilla negra contiene extractos de canela, flor de
                  loto, geranio y aceite de camelia. Ideal para espinillas y
                  puntos negros.
                </Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$20.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
          </View>

          <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/BarbaCompleta.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Barba Completa</Text>
                <Text style={styles.descriptionService}>
                  Realizamos el arreglo, perfilamiento, y corte completo a
                  gusto de cada cliente, este corte se realiza en toda la
                  barba.
                </Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$30.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
          </View>

          <View style={styles.containerCortes}>
              <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
                <Image
                  style={styles.CorteModernoImg}
                  source={require("../assets/Perfilado.jpeg")}
                />
              </TouchableOpacity>
              <View style= {styles.containerInfo}>
                <Text style={styles.titleService}>Perfilado</Text>
                <Text style={styles.descriptionService}>
                  Perfilado de la barba con cuchilla y correción de cortes
                  irregulares con tijera.
                </Text>
              </View>
              <View style={styles.containerAdicionalInfo}>
                <Text style={styles.price}>$15.000</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Bookings")}
                >
                      <Image
                        style={styles.btnReserva}
                        source={require("../assets/bookings.png")}
                      />
                    </TouchableOpacity>
              </View>
          </View>

          </View>
        </View>
      </ScrollView>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  userHeader: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 17,
    marginTop: 60,
    fontFamily: "Roboto_400Regular",
  },
  imagenuser: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    marginTop: 40,
    borderRadius: 50
  },
  descubretunuevo: {
    marginTop: -5,
    fontSize: 40,
    color: "#362B48",
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
  },
  look: {
    fontSize: 40,
    marginTop: 2,
    color: "#5927E5",
    fontFamily: "Roboto_300Light",
    fontWeight: "bold",
  },
  categories: {
    flexDirection: 'row',
  },
  buttonDestacado: {
    backgroundColor: "#5927E5",
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 20
  },
  Destacado: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_700Bold",
  },
  btnCategories: {
    backgroundColor: "#362B48",
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    marginRight: 10
  },
  btnText: {
    justifyContent: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_700Bold",
  },
  columnL: {
    width: '48%',
    marginTop: 20,
  },
  columnR: {
    width: '48%',
    marginTop: 20,
  },
  containerCortes: {
    backgroundColor: '#EAE2FF',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10
  },
  CorteModernoImg: {
    width: '100%',
    height: 152,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  containerInfo: {
    marginLeft: 10,
    marginTop: 5
  },
  titleService: {
    fontSize: 17,
    fontFamily: 'Roboto_700Bold'
  },
  descriptionService: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 13,
    textAlign: 'justify'
  },
  containerAdicionalInfo: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 28,
    justifyContent: 'space-between',
    marginBottom: 20
  },
  price:{
    fontSize: 17,
    fontFamily: 'Roboto_700Bold'
  },
  btnReserva:{
    marginTop: -10,
    width: 37,
    height: 37,
    alignItems: "center",
  },

})
