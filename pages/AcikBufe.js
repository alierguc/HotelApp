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
import ImageLoader from '../component/AnimLogo';
export default class AcikBufe extends Component {
    render() {
        return (
            <View><Text>Açık Büfe</Text>
                <ImageLoader
                    style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 40, marginTop: 30 }}
                    source={require('../images/icons/catering.png')}
                />
            </View>
        );
    }
}