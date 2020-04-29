import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import VideoCategorys from '../component/VideoCategory';
import ImageLoader from '../component/AnimLogo';


const { height, width } = Dimensions.get('window')



export default class VideoDays extends Component {
   
    render() {

        return (
            <ScrollView scrollEventThrottle={16}>
                <View style={{ flex: 1, paddingRight:100,paddingLeft:100, marginBottom: 5,marginTop:30}}>
                    <View style={{borderRadius:30, backgroundColor:'white',opacity:0.8}}>
                    <Text style={{ textAlign: 'center',color:'black', fontSize: 20, fontWeight: '700' }}>Hikayeler</Text>
                    </View>
                </View>
                <View style={{ height: 150, marginTop: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                        <VideoCategorys onPress={this.toggleModal} imageUri={require('../images/icons/video.png')}  name='Pazartesi' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Salı' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Çarşamba' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Perşembe' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Cuma' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Cumartesi' />
                        <VideoCategorys imageUri={require('../images/icons/video.png')} name='Pazar' />

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