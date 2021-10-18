import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import firebase from '../firebase';

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
        setState({...state, [name]:value})
    }

    const navigation = useNavigation()

    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Ingrese un nombre')
        }if (state.lastName === '') {
            alert('Ingrese un apellido')
        }if (state.phone === '') {
            alert('Ingrese un número telefonico')
        }else{
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
            behavior= 'padding'
            keyboardVerticalOffset= {-5000}
        >
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder='Nombre'
                    onChangeText= {(value) => handleChangeText(value, 'name')}
                    value={state.name}
                    style= {styles.input}
                />
                <TextInput
                    placeholder='Apellido'
                    onChangeText= {(value)=>handleChangeText(value, 'lastName')}
                    value= {state.lastName}
                    style= {styles.input}
                />
                <TextInput
                    placeholder='Celular'
                    onChangeText= {(value)=>handleChangeText(value, 'phone')}
                    value={state.phone}
                    style= {styles.input}
                />
                <TextInput
                    placeholder='Email'
                    onChangeText= {(value)=>handleChangeText(value, 'email')}
                    value= {state.email}
                    style= {styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value= {password}
                    onChangeText= {text => setPassword(text)}
                    style= {styles.input}
                    secureTextEntry
                />

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress= {saveNewUser}
                    style= {styles.button}
                >
                    <Text style={styles.buttonText} >Registrarse</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
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
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
})
