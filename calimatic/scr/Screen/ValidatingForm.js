//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Image } from 'react-native';




// create a component
class LoginForm extends Component {
    state={
        Name:''
    }
    onButtonPress = () => {
        this.props.companyName(this.state.Name)
    };
    changeName = (e)=>{
        
        this.setState({
            Name:e.nativeEvent.text
        })  
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={{ flexDirection: 'row', width: window.width, margin: 10, padding: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <View style={{ flex: 7 }}>
                    <TextInput style={styles.input}
                    autoCapitalize="none"
                    onChange= {this.changeName}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Enter Company Name'
                    placeholderTextColor='gray' />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity  onPress={this.onButtonPress}>
                            <Image source={require('./right-arrow.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>

                    </View>
                </View>
      
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: 'gray'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});

//make this component available to the app
export default LoginForm;