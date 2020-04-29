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
import Lottie from 'lottie-react-native';
import ImageLoader from '../component/AnimLogo';
import homeback from '../images/icons/homeback.json';
import PageHeaders from '../component/CustomHeader';
export default class BildirimPage extends Component {
    render() {
        return (

            <View style={styles.mainContainer}>
                <PageHeaders name="Bildirimler" />
                <ScrollView>

                    <View style={styles.container}>

                        <ImageLoader
                            style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 40, marginTop: 50 }}
                            source={require('../images/icons/bell.png')}
                        />
                        <Text style={{ alignSelf: 'center', fontWeight: '700', fontSize: 24, marginTop: 20,marginBottom:20 }}>Bildirimler</Text>

                     
                            <View style={styles.NotificationCard}>
                            <Text style={{marginLeft:10,marginRight:10,alignContent:'center',fontWeight:'700'}}><Image style={styles.inputIcon} source={require('../images/icons/bell.png')} />  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                            <View style={styles.NotificationCard}>
                            <Text style={{marginLeft:10,marginRight:10,alignContent:'center',fontWeight:'700'}}><Image style={styles.inputIcon} source={require('../images/icons/bell.png')} />  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                            </View>
                            <View style={styles.NotificationCard}>
                            <Text style={{marginLeft:10,marginRight:10,alignContent:'center',fontWeight:'700'}}><Image style={styles.inputIcon} source={require('../images/icons/bell.png')} />  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</Text>
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
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    NotificationCard: {
        margin: 2,
        marginTop:20,
        height: null,
        marginTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        paddingTop:10,
        marginBottom:20,
        borderRadius: 20,
        marginTop: 5,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DFE6E9",

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
