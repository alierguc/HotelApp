import React, { Component } from 'react';
import { Button, View, Alert, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, Animated, Easing, Image, TouchableOpacity } from 'react-native';
import PageHeaders from '../component/CustomHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native'
import ImageLoader from '../component/AnimLogo';
import EtkinliklerPage from '../pages/EtkinliklerPage';
import BildirimPage from '../pages/bildirimPage';
import ViewLoader from '../component/AnimView';
import { TouchableRipple } from 'react-native-paper';
import OdaServisiScreen from '../pages/OdaServisi';
import TaksiServisi from '../pages/TaksiServisi';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WeatherComp from '../component/WeatherDay';
import VideoDays from '../component/VideoDay';
import HavaDurumu from '../pages/HavaDurumu';
import Lottie from 'lottie-react-native';
import gunes from '../images/icons/gunesli.json';
import { createStackNavigator } from '@react-navigation/stack';
import YemekListesi from '../pages/YemekListesi';
import SporSalonu from '../pages/SporSalonu';
import AyarlarScreen from '../pages/Ayarlar';
import AcikBufe from '../pages/AcikBufe';
import homeback from '../images/icons/homeback.json';
import GaleriPage from '../pages/Galeri';
import LocalizedStrings from 'react-native-localization';

function HomeSection({ navigation }) {
    let strings = new LocalizedStrings({
        "en-US":{
          how:"How do you want your egg today?",
          boiledEgg:"Boiled egg",
          softBoiledEgg:"Soft-boiled egg",
          choice:"How to choose the egg"
        },
        en:{
          how:"How do you want your egg today?",
          boiledEgg:"Boiled egg",
          softBoiledEgg:"Soft-boiled egg",
          choice:"How to choose the egg"
        },
        it: {
          how:"Come vuoi il tuo uovo oggi?",
          boiledEgg:"Uovo sodo",
          softBoiledEgg:"Uovo alla coque",
          choice:"Come scegliere l'uovo"
        }
       });
       
    return (


        <ScrollView style={styles.scrollContainer}>
           
            <View style={{width: '100%', position: 'absolute' }}>
            
            <Lottie
                        style={{
                            width: null,
                            height: null
                        }}
                        resizeMode='contain'
                        source={homeback}
                        autoPlay
                        loop
                    />
            </View>
            <PageHeaders name="Anasayfa"/>
            <VideoDays />

            <View style={styles.container}>
           
            
                <TouchableOpacity style={styles.boxEat}
                    onPress={() => navigation.navigate('Bildirim', { screen: 'YemekListesi' })}
                >

                    <ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/eat.png')}
                    />
                    <Text style={styles.textStyling}>Yemek Listesi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxActivity}
                    onPress={() => navigation.navigate('Bildirim', { screen: 'Etkinlikler' })}
                >
                    <ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/human.png')}
                    />
                    <Text style={styles.textStyling}>Aktiviteler</Text></TouchableOpacity>
                <TouchableOpacity style={styles.boxTaxi}
                    onPress={() => navigation.navigate('Bildirim', { screen: 'Taksi' })}
                >
                    <ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/taxi.png')}
                    />
                    <Text style={styles.RoomColor}>Taksi Servisi</Text></TouchableOpacity>
                <TouchableOpacity style={styles.boxRoom}
                    onPress={() => navigation.navigate('Bildirim', { screen: 'OdaServisi' })}
                >
                    <ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/bedroom.png')}
                    />
                    <Text style={styles.RoomColor}>Oda Servisi</Text></TouchableOpacity>
                <TouchableOpacity style={styles.boxBuffet}
                    onPress={() => navigation.navigate('Bildirim', { screen: 'AcikBufe' })}
                >
                    <ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/catering.png')}
                    />
                    <Text style={styles.textStyling}>Açık Büfe</Text></TouchableOpacity>
                    
                <TouchableOpacity style={styles.boxSport } 
                    onPress={() => navigation.navigate('Bildirim', { screen: 'Spor' })}
                ><ImageLoader
                        style={{ height: 80, width: 80, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                        source={require('../images/icons/gym.png')}
                    />
                    <Text style={styles.textStyling}>Spor Salonu</Text>
                </TouchableOpacity>
                
            </View>


        </ScrollView>
    );

}

function bildirimSection({ navigation }) {
    return (
        <BildirimPage />
    );
}
function sporSection({ navigation }) {
    return (
        <SporSalonu />
    );
}
function etkinliklerSection({ navigation }) {
    return (
        <EtkinliklerPage />
    );
}
function acikBufeSection({ navigation }) {
    return (
        <AcikBufe />
    );
}
function ayarlarSection({ navigation }) {
    return (
        <AyarlarScreen />
    );
}
function HavaDurumuSection({ navigation }) {
    return (
        <HavaDurumu />
    );
}
function YemekListesiSection({ navigation }) {
    return (
        <YemekListesi />
    );
}
function odaSection({ navigation }) {
    return (
        <OdaServisiScreen />
    );
}
function taksiSection({ navigation }) {
    return (
        <TaksiServisi />
    );
}
function GaleriSection({ navigation }) {
    return (
        <GaleriPage />
    );
}




const Tab = createMaterialBottomTabNavigator();

function HomePage() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { backgroundColor: '#0E4BB0', color: 'white' },
                activeTintColor: '#0E4BB0',
                borderBottomColor: '#0E4BB0',
                tabBarColor: '#0E4BB0'
            }}>
            <Tab.Screen name="Anasayfa" component={HomeSection} options={{
                title: 'Anasayfa', tabBarColor: '#0E4BB0', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image style={styles.inputIcon} source={require('../images/icons/homepage.png')} />
                ),
            }} />
              <Tab.Screen name="Galeri" component={GaleriSection} options={{
                title: 'Galeri', tabBarColor: '#0E4BB0', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image style={styles.inputIcon} source={require('../images/icons/gallery.png')} />
                ),
            }} />
          
            <Tab.Screen name="HavaDurumu" component={HavaDurumuSection} options={{
                title: 'Hava Durumu', tabBarColor: '#0E4BB0', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image style={styles.inputIcon} source={require('../images/icons/gunesli.png')} />
                ),
            }} />
            <Tab.Screen name="Bildirim" component={bildirimSections} options={{
                title: 'Bildirim', tabBarColor: '#0E4BB0', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image style={styles.inputIcon} source={require('../images/icons/bell.png')} />
                ),
            }} />
              <Tab.Screen name="Ayarlar" component={ayarlarSection} options={{
                title: 'Ayarlar', tabBarColor: '#0E4BB0', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image style={styles.inputIcon} source={require('../images/icons/ayarlar.png')} />
                ),
            }} />
        </Tab.Navigator>
    );

}

const Stack = createStackNavigator();
function bildirimSections() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Bildirim" component={bildirimSection} options={{ title: 'Bildirimler', headerShown: false }} />
            <Stack.Screen name="Taksi" component={taksiSection} options={{ title: 'Taksi', headerShown: false }} />
            <Stack.Screen name="YemekListesi" component={YemekListesiSection} options={{ title: 'Yemek Listesi', headerShown: false }} />

            <Stack.Screen name="AcikBufe" component={acikBufeSection} options={{ title: 'Açık Büfe', headerShown: false }} />
            <Stack.Screen name="Etkinlikler" component={etkinliklerSection} options={{ title: 'Etkinlikler', headerShown: false }} />
            <Stack.Screen name="OdaServisi" component={odaSection} options={{ title: 'Anasayfa', headerShown: false }} />
            <Stack.Screen name="Spor" component={sporSection} options={{ title: 'Spor', headerShown: false }} />
        </Stack.Navigator>

    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        flex: 1,

        marginBottom: 20,
        alignContent:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
    },
    textStyling: {
        marginTop: 10,
        paddingLeft: 10,
        color: 'white',
        paddingRight: 10,
        fontSize: 18,
        fontWeight: '700'
    },
    taxiColor: {
        marginTop: 10,
        paddingLeft: 10,
        color: 'black',
        paddingRight: 10,
        fontSize: 18,
        fontWeight: '700'
    },
    RoomColor: {
        marginTop: 10,
        paddingLeft: 10,
        color: 'black',
        paddingRight: 10,
        fontSize: 18,
        fontWeight: '700'
    },
    
    circle: {
        position:'absolute',
        width: 300,
        height: 300,
        borderRadius: 300/2,
        backgroundColor: 'red'
    },
    inputIcon: {
        width: 25,
        height: 25,
        justifyContent: 'center'
    },
    box: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#005F81",

    },
    boxBuffet: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ce0e0e",

    },
    boxEat: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#963232",

    },
    boxRoom: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E1C699",

    },
    
    boxActivity: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#15999E",

    },
    boxSport: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0059FF",

    },
    boxTaxi: {
        margin: 2,
        height: 200,
        borderRadius: 20,
        marginTop: 5,
        width: Dimensions.get('window').width / 2 - 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FDCC03",

    },


});

export default HomePage;