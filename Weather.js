import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#536976","#292E49"],
        title: "thunderstorm",
        subtitle: "Don't go outside"
    },
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#3a7bd5","#3a6073"],
        title: "rainy",
        subtitle: "Take un umbrella when going out"
    },
    Snow: {
        iconName: "snow-outline",
        gradient: ["#C9D6FF","#E2E2E2"],
        title: "snowy",
        subtitle: "watch the slipery ground"
    },
    Clouds: {
        iconName: "cloudy-outline",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "cloudy",
        subtitle: "I need Sun"
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#F7971E","#FFD200"],
        title: "Sunny",
        subtitle: "Sunny Day, Funny Day"
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#3a7bd5","#3a6073"],
        title: "rainy",
        subtitle: "Take un umbrella when going out"
    },
    Atmosphere: {
        iconName: "cloudy-outline",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "cloudy",
        subtitle: "I need Sun"
    },
    Haze: {
        iconName: "filter",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Hazy",
        subtitle: "Drive Safe!"
    },
    Fog: {
        iconName: "filter",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Foggy",
        subtitle: "Drive Safe!"
    },
    Mist: {
        iconName: "filter",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Misty",
        subtitle: "Drive Safe!"
    },
    Dust: {
        iconName: "masks",
        gradient: ["#3E5151","#DECBA4"],
        title: "Dusty!",
        subtitle: "Get your mask with you!"
    }

}

export default function Weather({temp, condition}){
    return ( 
    <LinearGradient    
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <Ionicons name={weatherOptions[condition].iconName } size={92} color="white"/>
            <Text style={styles.temp}>{temp} ℃</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );


}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Fog",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:48,
        color: "white"

    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        paddingBottom: 10,
        textTransform: "uppercase",
        letterSpacing: 1
    
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "200",
        paddingBottom: 10,
        textTransform: "capitalize",
        letterSpacing: 1

    },
    textContainer: {
        marginBottom: 200,
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }

})
