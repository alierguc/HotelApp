import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import Icon from '../images/icons/languages.png'
import BellIcon from '../images/icons/bell.png'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class PageHeaders extends Component {
    setMenuRef = ref => {
        this._menu = ref;
    };

    setMenuRefNotifi = refNot => {
        this._menuNot = refNot;
    };

    hideMenu = () => {
        this._menu.hide();
    };
    showMenu = () => {
        this._menu.show();
    };

    hideNotMenu = () => {
        this._menuNot.hide();
    };
    showNotMenu = () => {
        this._menuNot.show();
    };

    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 65, backgroundColor: '#0E4BB0', alignItems: 'baseline', flexDirection: 'row' }}>
                <Text style={{ marginLeft:'15%',fontWeight: '700', justifyContent: 'center', fontSize: 18, color: '#ffffff' }}>{this.props.name}</Text>
                    <View style={{ flex: 6, flexDirection: 'row', justifyContent: 'flex-end'}}>

                    </View>
                   
                    <View style={{ marginTop: 10, marginLeft: 10, justifyContent: 'flex-end' }}>

                        <IconButton
                            rippleColor="#ffffff"
                            icon={Icon}
                            color='#ffffff'
                            size={25}
                            onPress={this.showMenu}
                        >

                        </IconButton>
                        <Menu
                            ref={this.setMenuRef}>
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/turkey.png')} /> Varsayılan Dil (Türkçe)</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/turkey.png')} /> Türkçe</MenuItem>
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/english.png')} /> English</MenuItem>
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/germany.png')} /> Deutsch</MenuItem>
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/china.png')} /> 中国</MenuItem>
                            <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/russia.png')} /> русский</MenuItem>
                            <MenuItem onPress={this.hideMenu}> العربية <Image style={styles.inputIconButton} source={require('../images/icons/arabia.png')} /></MenuItem>

                        </Menu>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 10, justifyContent: 'flex-end' }}>
                        <IconButton
                            rippleColor="#ffffff"
                            icon={BellIcon}
                            color='#ffffff'
                            size={25}
                            onPress={this.showNotMenu}
                        >

                        </IconButton>
                        <Menu
                            ref={this.setMenuRefNotifi}>

                            <MenuItem onPress={this.hideNotMenu}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</MenuItem>
                            <MenuItem onPress={this.hideNotMenu}>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</MenuItem>

                        </Menu>
                    </View>
                   

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

                    </View>

                </View>

                <View>
                </View>
            </View>
        );
    }
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
