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
    TouchableHighlight,
    TextInput,
    ImageBackground,
} from 'react-native';

import HomePage from '../pages/HomePage';
import { NavigationNativeContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageLoader from '../component/AnimLogo';


const Stack = createStackNavigator();

function LoginSection({navigation}) {

    return (
        <View style={styles.mainContainer}>
            <ScrollView>

                <View style={styles.container}>

                    <StatusBar backgroundColor="#0E4BB0" />
                    <Image style={{ resizeMode: 'stretch', width: '100%', borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }} source={require('../images/hotel1.jpg')}></Image>
                    <View style={{ position: 'absolute', paddingLeft: 50, paddingRight: 50 }}>
                        <ImageLoader
                            style={{ width: 200, height: 200, alignSelf: 'center', resizeMode: 'stretch', borderRadius: 40 }}
                            source={require('../images/logo.jpg')}
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../images/icons/username.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Kullanıcı Adınız"
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                    </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Home')} title="Home">
                        <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../images/icons/userlogin.png')} />
                            &nbsp;&nbsp;Giriş Yap</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
}
function HomeSection({navigation})
{
    return(
        <HomePage/>
    );
}

export default function LoginPage(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginSection} options={{title:'Kayıt Ol',headerShown:false}}/>
                <Stack.Screen name="Home" component={HomeSection} options={{title:'Anasayfa',headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    TopImage: {
        borderBottomLeftRadius: 50,
        borderBottomLeftRadius: 50
    },
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        flex: 1
    },
    topHeader: {
        borderBottomLeftRadius: 50,
        borderBottomLeftRadius: 50
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius: 20
    },
    inputContainer: {
        borderBottomColor: '#8EBEDC',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: '90%',
        height: 45,
        marginTop: 70,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#1D2F3E',
        flex: 1,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },
    inputIconButton: {
        width: 20,
        height: 20,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#0E4BB0",
    },
    loginText: {
        color: 'white',
    }
});
