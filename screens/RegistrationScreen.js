import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { Dimensions, KeyboardAvoidingView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import firebase from '../firebase';
import Loginbg from '../assets/img/login_bg.svg';

const height = Dimensions.get('window').height;
const RegistrationScreen = () => {

    const initialState = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
    }

    const [state, setState] = useState(initialState)
    const [password, setPassword] = useState('')
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }

    const navigation = useNavigation()

    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Ingrese un nombre')
        } if (state.lastName === '') {
            alert('Ingrese un apellido')
        } if (state.phone === '') {
            alert('Ingrese un número telefonico')
        } else {
            firebase.auth
                .createUserWithEmailAndPassword(state.email, password)
                .then(userCredentials => {
                    try {

                        firebase.db.collection('users').add({
                            name: state.name,
                            lastName: state.lastName,
                            phone: state.phone,
                            email: state.email
                        })

                    } catch (error) {
                        console.log(error);
                    }
                    const user = userCredentials.user;
                    console.log('Register with', user.email);
                })
                .catch(error => alert(error.message))
        }
    }

    useEffect(() => {
        const logOut = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
        return logOut
    }, [])

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='height'
        >
            <ScrollView>
                <View style={styles.background}>
                    <View style={styles.logoWrapper}>
                        <Loginbg width={190} height={157.34} />
                        <Text style={styles.sloganWrapper}>
                            DDA Bookings
                        </Text>
                    </View>
                </View>

                <View style={styles.inputContainer} >

                    <View style={styles.formContainer}>
                        <Text style={styles.titleLogin}>Registro</Text>
                        <View style={styles.registerForm}>
                            <Text style={styles.noCuenta}>¿Ya te registraste?</Text>
                            <Text
                                onPress={() => {
                                    navigation.navigate('Login')
                                }}
                                style={styles.IniciaSesion}
                            >
                                Inicia Sesión
                            </Text>
                        </View>
                        <View style={styles.inputsForm}>

                            <TextInput
                                placeholder='Nombre'
                                onChangeText={(value) => handleChangeText(value, 'name')}
                                value={state.name}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder='Apellido'
                                onChangeText={(value) => handleChangeText(value, 'lastName')}
                                value={state.lastName}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder='Celular'
                                onChangeText={(value) => handleChangeText(value, 'phone')}
                                value={state.phone}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder='Email'
                                onChangeText={(value) => handleChangeText(value, 'email')}
                                value={state.email}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder='Password'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                style={styles.input}
                                secureTextEntry
                            />



                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={saveNewUser}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText} >Registrarse</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    background: {
        height: height * 0.4,
        backgroundColor: '#362B48',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#FDF7FF',
    },

    formContainer: {
        marginHorizontal: 40,
        marginTop: 50,
    },

    inputContainer: {
        flex: 1,
        backgroundColor: '#FDF7FF',
        marginTop: -35,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        borderBottomWidth: 1
    },
    buttonContainer: {
        width: '70%',
        justifyContent: 'center',
        marginTop: 50
    },
    button: {
        backgroundColor: '#5927E5',
        width: '100%',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
    IniciaSesion: {
        marginHorizontal: 5,
        fontFamily: 'Roboto_700Bold',
        color: '#5927E5'
    },
    titleLogin: {
        fontSize: 23,
        fontFamily: 'Roboto_700Bold',
        color: '#362B48'
    },
    noCuenta: {
        fontSize: 13,
        fontFamily: 'Roboto_300Light'
    },
    registerForm: {
        flexDirection: 'row'
    },
    inputsForm: {
        alignItems: 'center'
    },
    sloganWrapper:{
        marginTop: 20,
        fontSize: 23,
        fontFamily: 'Roboto_700Bold',
        color: 'white',
    },
    logoWrapper: {
        alignItems:'center'
    },
})
