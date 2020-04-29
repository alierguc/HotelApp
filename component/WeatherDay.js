import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import WeatherCategory from '../component/WeatherCategory';
import ImageLoader from '../component/AnimLogo';
import Lottie from 'lottie-react-native';
import gunesli from '../images/icons/gunesli.json';
import bulutlu from '../images/icons/bulutlu.json';
import firtinali from '../images/icons/firtinali.json';
const { height, width } = Dimensions.get('window')


export default function WeatherComp() {
    return (
        <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingRight:50,paddingLeft:50 }}>
                <View style={{ borderRadius: 30, backgroundColor: 'white', opacity: 0.8,marginTop:20 }}>
                <Text style={{ textAlign: 'center',color:'black', fontSize: 20, fontWeight: '700' }}>Antalya Hava Durumu</Text>
                </View>
            </View>
            <View style={{ height: 320, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <WeatherCategory imageUri={bulutlu} name='Pazartesi' status="Bulutlu" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={firtinali} name='Salı' status="Fırtınalı" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={bulutlu} name='Çarşamba' status="Bulutlu" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={firtinali} name='Perşembe' status="Fırtınalı" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={gunesli} name='Cuma' status="Güneşli" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={bulutlu} name='Cumartesi' status="bulutlu" centigrate="10" fahrenheit="2" />
                    <WeatherCategory imageUri={gunesli} name='Pazar' status="Güneşli" centigrate="10" fahrenheit="2" />
                </ScrollView>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
    },
});