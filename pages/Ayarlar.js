import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
    Animated,
    TouchableHighlight,
    TextInput,
    ImageBackground,
} from 'react-native';
import PageHeaders from '../component/CustomHeader';
import Lottie from 'lottie-react-native';
import ImageLoader from '../component/AnimLogo';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import homeback from '../images/icons/homeback.json';

import SwitchToggle from 'react-native-switch-toggle';
export default class AyarlarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOn1: false,
            switchOn2: false,
            switchOn4: false
        };
    }

    getButtonText() {
        return this.state.switchOn4 ? 'Açık' : 'Kapalı';
    }

    getRightText() {
        return this.state.switchOn4 ? '' : 'Aç';
    }

    getLeftText() {
        return this.state.switchOn4 ? 'Kapat' : '';
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };
    onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
    }
    onPress2 = () => {
        this.setState({ switchOn2: !this.state.switchOn2 });
    }
    onPress3 = () => {
        this.setState({ switchOn3: !this.state.switchOn3 });
    }
    onPress4 = () => {
        this.setState({ switchOn4: !this.state.switchOn4 });
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {
        return (



            <View style={styles.mainContainer}>
                <PageHeaders name="Ayarlar" />
                <ScrollView>

                    <View style={styles.container}>
                        <ImageLoader
                            style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 40, marginTop: 50 }}
                            source={require('../images/icons/ayarlar.png')}
                        />
                        <Text style={{ alignSelf: 'center', fontWeight: '700', fontSize: 24 }}>Ayarlar</Text>

                        <View style={{ width: '40%', alignSelf: 'center', marginTop: 20 }}>

                            <Menu

                                ref={this.setMenuRef}
                                button={<Button color="#005F81" borderRadius={100} style={{ width: 30, height: 30 }} title="Dil Seçenekleri" onPress={this.showMenu}></Button>
                                }>

                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/turkey.png')} /> Varsayılan Dil (Türkçe)</MenuItem>
                                <MenuDivider />
                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/turkey.png')} /> Türkçe</MenuItem>
                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/english.png')} /> English</MenuItem>
                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/germany.png')} /> Deutsch</MenuItem>
                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/china.png')} /> 中国</MenuItem>
                                <MenuItem onPress={this.hideMenu}><Image style={styles.inputIconButton} source={require('../images/icons/russia.png')} /> русский</MenuItem>
                                <MenuItem onPress={this.hideMenu}> العربية <Image style={styles.inputIconButton} source={require('../images/icons/arabia.png')} /></MenuItem>

                            </Menu>
                            <Text style={{ alignSelf: 'center', fontWeight: '700', fontSize: 16, marginTop: 50 }}>Bildirim Seçenekleri</Text>

                            <SwitchToggle

                                buttonText={this.getButtonText()}
                                backTextRight={this.getRightText()}
                                backTextLeft={this.getLeftText()}

                                type={1}
                                buttonStyle={{

                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute'
                                }}

                                rightContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                leftContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}

                                buttonTextStyle={{ fontSize: 14, fontWeight: '700', color: 'white' }}
                                textRightStyle={{ fontSize: 14, fontWeight: '700' }}
                                textLeftStyle={{ fontSize: 14, fontWeight: '700' }}

                                containerStyle={{
                                    marginTop: 16,
                                    width: 160,
                                    height: 55,
                                    borderRadius: 60,
                                    padding: 5,
                                }}
                                backgroundColorOn='#a0e1e5'
                                backgroundColorOff='#e5e1e0'
                                circleStyle={{
                                    width: 80,
                                    height: 55,
                                    borderRadius: 40,
                                    backgroundColor: 'blue', // rgb(102,134,205)
                                }}
                                switchOn={this.state.switchOn4}
                                onPress={this.onPress4}
                                circleColorOff='#ce0e0e'
                                circleColorOn='#089000'
                                duration={300}
                            />

                        </View>

                    </View>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40,
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
