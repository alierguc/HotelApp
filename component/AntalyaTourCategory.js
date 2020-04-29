import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import ImageLoader from '../component/AnimLogo';


export default class AntalyaTourCategorys extends Component {
    render() {

        return (

            <View style={{ height: 250, width: 300, marginLeft: 10, marginTop: 10,alignContent:'center', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                <View style={{ flex: 1, alignContent: 'center' }}>
                <Image
                        style={{ height: '100%', width: '100%', alignSelf: 'center', resizeMode: 'stretch',borderRadius:10}}
                        source={this.props.imageUri}
                    />
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