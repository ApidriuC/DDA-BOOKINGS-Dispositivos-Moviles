import React from "react";
import { View, StyleSheet } from "react-native";

const Contact = ({navegation}) => {
    return (
        <View style = {styles.container}>
            <Text>
                Contact
            </Text>
        </View>
    );
};

export default Contact;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF'
    },
})