import React from "react";
import { View, StyleSheet } from "react-native";

const User = () => {
    return (
        <View style = {styles.container}>
            <Text>
                User
            </Text>
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF'
    },
})