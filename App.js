import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading"; 
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "d5861dcd9c829ee7c3610e7096dd3156"

export default class extends React.Component {

  state= {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    }  = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, 
      condition: weather[0].main, 
      temp });
 
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const enabled = await Location.getProviderStatusAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
     
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", "So sad")   
    }
  };
  componentDidMount() {

    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state; 
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

