//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Image } from 'react-native';




// create a component
class LoginForm extends Component {
    state={
        Name:''
    }
    onButtonPress = () => {
       console.log('Clicked')
        var Query = 'http://localhost:5000/JavaAutomation/getCompanyUrl';
        return fetch(Query, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8', // <-- Specifying the Content-Type
            }),
            body: "CompanyName=" + this.state.Name // <-- Post parameters
        })
            .then((response) => response.json())
            .then((responseJson) => {
console.log(responseJson)
// this.props.companyName(this.state.Name)
                //callback(responseJson);
            })
            .catch((error) => {
                console.log(error)
               // Utils.Toaster("Invalid username Password", "#f2dede", "#a94442");
            });
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