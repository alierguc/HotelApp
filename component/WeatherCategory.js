import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import ImageLoader from '../component/AnimLogo';
import Lottie from 'lottie-react-native';
export default class WeatherCategory extends Component {
    render() {

        return (

            <View style={{ height: 250, width: 150, marginLeft: 10, marginTop: 10,alignContent:'center', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                <View style={{ flex: 3, alignContent: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20 }}>
                    <Lottie
                        style={{
                            width: null,
                            height: null
                        }}
                        resizeMode='contain'
                        source={this.props.imageUri}
                        autoPlay
                        loop
                    />
                </View>

                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: '10%' }}>{this.props.name}</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, marginBottom: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '400', marginTop: '10%' }}>{this.props.status}</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, marginBottom: 3 }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '300', marginTop: '10%' }}>{this.props.centigrate} °C</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, marginBottom: 30 }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '300', marginTop: '10%' }}>{this.props.fahrenheit} °F</Text>
                </View>
            </View>


        );
    }
};


const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
    },
    inputIconButton: {
        width: 25,
        height: 20,
        justifyContent: 'center'
    },
});