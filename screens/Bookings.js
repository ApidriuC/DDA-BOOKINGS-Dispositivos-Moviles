import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Bookings = () => {
    return (
        <View style = {styles.container}>
            <Text>
                Bookings
            </Text>
        </View>
    );
};

export default Bookings;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF'
    },
})