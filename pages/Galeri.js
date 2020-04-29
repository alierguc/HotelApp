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
import homeback from '../images/icons/homeback.json';
import ImageLoader from '../component/AnimLogo';
import AntalyaToursCategory from '../component/AntalyaTour';
import Lottie from 'lottie-react-native';
export default class GaleriPage extends Component {


    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ width: '100%', position: 'absolute' }}>

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
                    <ImageLoader
                        style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 40, marginTop: 30 }}
                        source={require('../images/icons/gallery.png')}
                    />
                    <AntalyaToursCategory />
                </ScrollView>
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
