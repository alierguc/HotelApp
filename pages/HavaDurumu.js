import React, { Component } from 'react';
import { Button, View, Alert, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import WeatherComp from '../component/WeatherDay';
import VideoDays from '../component/VideoDay';

export default class HavaDurumu extends Component {
    render() {
        return (
            
            <View style={{flex: 1, flexDirection: 'row',alignContent:'center'}}>
            
                <Image style={{ height: '100%', resizeMode: 'cover', width: '100%', position: 'absolute' }} source={require('../images/acastle.jpg')}></Image>
               
                <WeatherComp />
                
            </View>
        );
    }
}