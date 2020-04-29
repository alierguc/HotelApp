import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import AntalyaTourCategorys from '../component/AntalyaTourCategory';



const { height, width } = Dimensions.get('window')



export default class AntalyaToursCategory extends Component {
   
    render() {

        return (
            <ScrollView scrollEventThrottle={16}>
                <View style={{ flex: 1, paddingRight:100,paddingLeft:100, marginBottom: 5,marginTop:30}}>
                    <View style={{borderRadius:30, backgroundColor:'white',opacity:0.8}}>
                    <Text style={{ textAlign: 'center',color:'black', fontSize: 20, fontWeight: '700' }}>Galeri</Text>
                    </View>
                </View>
                <View style={{ height: 300, marginTop: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                        <AntalyaTourCategorys onPress={this.toggleModal} imageUri={require('../images/antalya1.jpg')}  name='Pazartesi' />
                        <AntalyaTourCategorys imageUri={require('../images/antalya1.jpg')} name='Salı' />
                        <AntalyaTourCategorys imageUri={require('../images/acastle.jpg')} name='Çarşamba' />
                        <AntalyaTourCategorys imageUri={require('../images/antalya.png')} name='Perşembe' />
                        <AntalyaTourCategorys imageUri={require('../images/antalya1.jpg')} name='Cuma' />
                        <AntalyaTourCategorys imageUri={require('../images/hotel1.jpg')} name='Cumartesi' />
                        <AntalyaTourCategorys imageUri={require('../images/hotel2.jpg')} name='Pazar' />

                    </ScrollView>
                 
                </View>
               
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
    },
});