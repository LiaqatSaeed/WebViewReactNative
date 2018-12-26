import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Dimensions, Animated, ImageBackground } from 'react-native';
import LoginForm from './ValidatingForm';
import WebView from './webview'

const { width, height } = Dimensions.get('window')
// create a component
class Login extends Component {
    state = {
        companyName:"Alpha"
    }

    anim = new Animated.Value(0);
    componentDidMount() {
        Animated.timing(this.anim, {
            toValue: 1,
            duration: 3000
        }).start();
    }
    
    render() {

        if (this.state.companyName == "Alpha") {
            return (
            <ImageBackground source={require('./background.jpeg')}
                style={styles.backgroundImage}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={{ width: width, height: height, position: 'absolute', top: 0, backgroundColor: '#003C5C', opacity: 0.5 }} />
                    <View style={styles.loginContainer}>
                        <View style={{ width: 330, height: 100,justifyContent:"center",alignItems:"center" }}>
                        <View style={{ width: 330, height: 100, position: 'absolute', top: 0, backgroundColor: 'white', opacity: 0.7,borderBottomLeftRadius:0,borderRadius:30 }} />
                            <Image resizeMode="contain" style={styles.logo}
                                source={{ uri: 'https://portal.calimatic.com/assets/Canvas/images/NewCalimaticLogoTM.png' }} />
                            
                        </View>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm companyName={(Name)=> this.setState({
                            companyName:Name
                            }) }/>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <WebView />
                </View>
            );
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    loginContainer: {
        alignItems: 'center',
        flex: 3,
        height:400,
        justifyContent: 'center',

    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,          
    },
    title: {
        color: "gray",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',

    },
    formContainer: {
        flex: 5,

    }
});

//make this component available to the app
export default Login;