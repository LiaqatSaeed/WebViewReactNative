import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'


// create a component
class WebViewExample extends Component {

    constructor(props) {debugger;
        super(props);      
        this.state = {
            Name:this.props.companyURL
        };              
      }
   
    render() {
      var uri = this.state.Name;
      return (
         
         <View style = {{flex:1}}>
            <WebView
            source = {{ uri:
               uri}}
            />
         </View>
      )
    }
}

// define your styles
export default WebViewExample;