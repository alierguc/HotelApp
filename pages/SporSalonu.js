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

export default class SporSalonu extends Component {
    render() {
        return (
            <View>
                    <Text>Spor Salonu</Text>          
                    <ImageLoader
                        style={{ width: 200, height: 200, alignSelf: 'center',borderRadius:40,marginTop:30 }}
                        source={require('../images/icons/gym.png')}
                    />
               

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