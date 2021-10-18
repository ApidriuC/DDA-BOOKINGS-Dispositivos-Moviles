import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import { Dimensions, KeyboardAvoidingView,ScrollView,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from '../firebase';
import Loginbg from '../assets/img/login_bg.svg';

const height = Dimensions.get('window').height;

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const logOut = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
        return logOut
    }, [])


    const handleLogin = () => {
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with', user.email);
            navigation.navigate('Home')
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior= 'height'
        >
            <ScrollView>
                <View style = {styles.background}>
                    <View style={styles.logoWrapper}>
                        <Loginbg width={190} height={157.34} />
                        <Text style={styles.sloganWrapper}>
                            DDA Bookings
                        </Text>

                    </View>
                </View>
                <View style={styles.inputContainer} >
                    <View style= {styles.formContainer}>
                        <Text style= {styles.titleLogin}>Inicia Sesión</Text>
                        <View style={styles.registerForm}>
                            <Text style= {styles.noCuenta}>¿No tienes tu cuenta?</Text>
                            <Text
                                onPress= {()=> {
                                    navigation.navigate('Register')
                                }}
                                style={styles.registrateYa}
                            >
                                ¡Registrate ya!
                            </Text>
                        </View>
                        <View style={styles.inputsForm}>
                            <TextInput
                                placeholder='Email'
                                value= {email}
                                onChangeText= {text => setEmail(text)}
                                style= {styles.input}
                            />
                            <TextInput
                                placeholder='Password'
                                value= {password}
                                onChangeText= {text => setPassword(text)}
                                style= {styles.input}
                                secureTextEntry
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress= {handleLogin}
                                    style= {styles.button}
                                >
                                    <Text style={styles.buttonText} >Ingresar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    containerKey: {
        flex: 1
    },
    background: {
        height: height * 0.5,
        backgroundColor: '#362B48',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FDF7FF'
    },

    logoWrapper: {
        alignItems:'center'
    },
    sloganWrapper:{
        marginTop: 20,
        fontSize: 23,
        fontFamily: 'Roboto_700Bold',
        color: 'white'
    },
    titleLogin: {
        fontSize: 23,
        fontFamily: 'Roboto_700Bold',
        color: '#362B48'
    },
    formContainer: {
        marginHorizontal: 40,
        marginTop: 50,
    },
    noCuenta: {
        fontSize: 13,
        fontFamily: 'Roboto_300Light'
    },
    registerForm: {
        flexDirection: 'row'
    },
    registrateYa: {
        marginHorizontal: 5,
        fontFamily: 'Roboto_700Bold',
        color: '#5927E5'
    },

    
    inputContainer: {
        flex: 1,
        backgroundColor: '#FDF7FF',
        marginTop: -35,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        height: height * 0.5
    },
    inputsForm: {
        marginTop: 30,
        alignItems: 'center'
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
        alignItems: 'center',
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
        fontSize: 20,
        fontFamily: 'Roboto_700Bold'
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
})
