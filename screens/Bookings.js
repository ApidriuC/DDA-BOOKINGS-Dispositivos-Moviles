import React, { useState } from "react";
import { TouchableOpacity, TextInput, Image, Dimensions, View, StyleSheet, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../firebase';
import { useNavigation } from '@react-navigation/core'


const height = Dimensions.get('window').height;


const Bookings = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const saveBooking = async () => {
        try {
            await firebase.db.collection('bookings').add({
                name: 'Corte moderno',
                fecha: date,
                duration: '80',
                price: 25000
            })
            navigation.navigate('BookingsList')
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <ScrollView>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={require("../assets/CorteModerno.jpeg")}
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.encabezado}>
                        <Text style={{ fontSize: 23, fontFamily: 'Roboto_700Bold' }}>Corte moderno</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textE}>80 mins</Text>
                            <Text style={styles.textE}>$ 25.000</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{marginLeft:-5,marginTop: 40, fontFamily: 'Roboto_700Bold', fontSize: 21}}> Seleccionar Fecha </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={showDatepicker}>
                                <Text style={styles.buttonText}>
                                    Selecciona una Fecha
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft:-5,marginTop: 20, fontFamily: 'Roboto_700Bold', fontSize: 21}}> Seleccionar una hora </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={showTimepicker}>
                                <Text style={styles.buttonText}>
                                    Selecciona una Hora
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                                value={new Date()}
                            />
                        )}
                    </View>
                    <View  style={styles.containerButtons}>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity style={styles.buttonCancelar} onPress={() => {}}>
                                    <Text style={styles.buttonTextB}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity style={styles.buttonConfirm} onPress={saveBooking}>
                                    <Text style={styles.buttonTextB}>
                                        Confirmar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                            
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};

export default Bookings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF7FF'
    },
    imageWrapper: {
        flex: 1,
        height: height * 0.4
    },
    image: {
        height: height * 0.4
    },

    formContainer: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20

    },
    encabezado: {},
    textE: {
        fontSize: 17,
        fontFamily: 'Roboto_400Regular',
        marginRight: 43
    },

    buttonContainer: {
        width: '70%',
        justifyContent: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: 'white',
        width: '140%',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: '#CAC9CB',
        fontFamily: 'Roboto_400Regular',
        fontSize: 17,
        // marginLeft: -50
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttonCancelar: {
        backgroundColor: '#362B48',
        width: '100%',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonConfirm: {
        backgroundColor: '#5927E5',
        width: '100%',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonTextB: {
        fontSize: 23,
        fontFamily: 'Roboto_700Bold',
        color: 'white'
    },
    buttonStyle: {
        width: '47%',
        justifyContent: 'center',
        marginTop: 30
    },
})