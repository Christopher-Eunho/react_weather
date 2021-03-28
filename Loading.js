import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Loading(){
    return    <LinearGradient 
    colors={["#8360c3","#2ebf91"]}
    style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>
            Getting the weather
        </Text>
    </LinearGradient>
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        paddingHorizontal: 30,
        paddingVertical: 100,
        
    },
    text: {
        color: "#353b48",
        fontSize: 25 
        // same as fontSize: "30px"
    }

});