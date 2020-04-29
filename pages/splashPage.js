import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Animated,
    ImageBackground,
} from 'react-native';
import ImageLoader from '../component/AnimLogo';

export default class SplashScreen extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden />
                <ImageBackground source={require('../images/splash_background.jpg')} style={{ width: '100%', height: '100%' }}>
                         
                    <ImageLoader
                        style={{ width: 300, height: 400, alignSelf: 'center',borderRadius:40,marginTop:30 }}
                        source={require('../images/logo.jpg')}
                    />
                </ImageBackground>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    Background: {
        width: '100%',
        height: '100%'
    },
    logoPosition: {
        alignItems: "center"
    },
});
