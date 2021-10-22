import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/core";


const BookingsList = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            styles={styles.container}
        >
            <ScrollView>
                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <View style={styles.containerB}>
                        <View style={styles.containerInfo}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 74 }}>
                                <Text style={styles.text}>25</Text>
                                <Text style={styles.text}>Octubre</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 20, }}>
                            <Text style={{ fontSize: 21, fontFamily: 'Roboto_700Bold', color: '#5927E5' }}>
                                Corte Moderno
                            </Text>
                            <Text style={{ fontSize: 11, fontFamily: 'Roboto_400Regular', width: 170 }}>
                                Nuestro corte moderno es un
                                look que aporta un estilo limpio
                                y diferente. Combina perfectamente con barbas abundantes.
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 30, }}>
                                <Text style={styles.textPrice}>
                                    8:00 am
                                </Text>
                                <Text style={styles.textPrice}>
                                    $ 25.000
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>
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
                                <View style={styles.containerInfoB}>
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
                                <View style={styles.containerInfoB}>
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
                                <View style={styles.containerInfoB}>
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
                                <View style={styles.containerInfoB}>
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
                                <View style={styles.containerInfoB}>
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
                                <View style={styles.containerInfoB}>
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

        </KeyboardAvoidingView>
    )
}

export default BookingsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20
    },
    containerB: {
        backgroundColor: 'white',
        width: 335,
        height: 224,
        marginTop: 50,
        borderRadius: 20,
        flexDirection: 'row'
    },
    containerInfo: {
        height: '100%',
        width: '40%',
        backgroundColor: '#5927E5',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    text: {
        fontSize: 23,
        color: 'white',
        fontFamily: 'Roboto_700Bold'
    },
    textPrice: {
        fontSize: 13,
        fontFamily: 'Roboto_700Bold',
        marginRight: 15
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
      containerInfoB: {
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
