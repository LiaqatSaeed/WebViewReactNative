//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Image } from 'react-native';




// create a component
class LoginForm extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
            Name:''
        };
      
        this.onButtonPress = this.onButtonPress.bind(this);
      }
    onButtonPress = () => {debugger;
       console.log('Clicked')
       var completeURL = 'https://'+ this.state.Name +'.calimatic.com';
       
        var Query = 'http://192.168.10.23:45455/JavaAutomation/getCompanyUrl';
        return fetch(Query, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: "CompanyName=" + completeURL// <-- Post parameters
        })
            .then((response) => response.json() )
            .then((responseJson) => {debugger;
                console.log(responseJson)
                if(responseJson.CompanyURI == 1){
                    this.props.companyName(completeURL)
                }else{
                    Alert.alert(                       
                        'Company not found',
                        [
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                      )
                }
            })
            .catch((error) => {
                console.log(error)
                Alert.alert(
                    'Error',
                    'Unable to process your request.Please contact your admin',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
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