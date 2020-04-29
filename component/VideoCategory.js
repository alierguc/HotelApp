import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight,TouchableOpacity } from 'react-native';

import Modal from "react-native-modal";
import VideoModalPage from '../pages/VideoModal';
import Lottie from 'lottie-react-native';
import story from '../images/icons/story.json';

export default class VideoCategorys extends Component {
    state = {
        isModalVisible: false
    };
    
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        console.log("Tıklandı");
    };
    render() {

        return (
            <TouchableOpacity
            onPress={this.toggleModal}
                style={{
                    borderWidth: 3,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft:10,
                    marginRight: 10,
                    width: 80,
                    height: 80,
                    backgroundColor: 'white',
                    borderRadius: 50,
                }}
            >
                <Lottie
                        style={{
                            width: 85,
                            height: 85
                          }}
                        resizeMode='contain'
                        source={story}
                        autoPlay
                        loop
                    />
              <Modal
               testID={'modal'}
               isVisible={this.state.isModalVisible}
               backdropColor="#DADADA"
               backdropOpacity={0.7}
               animationIn="zoomInDown"
               animationOut="zoomOutUp"
               animationInTiming={600}
               animationOutTiming={600}
               backdropTransitionInTiming={600}
               backdropTransitionOutTiming={600}>
                <VideoModalPage/>
       
               <Button style={{borderRadius:30}} title="Kapat" color="blue" onPress={this.toggleModal} />
           
           </Modal>
            </TouchableOpacity>
          

        );
    }
};


const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
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
});