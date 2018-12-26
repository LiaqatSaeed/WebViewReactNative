import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'
const WebViewExample = () => {
   return (
      <View style = {{flex:1}}>
         <WebView
         source = {{ uri:
         'https://portal.calimatic.com/' }}
         />
      </View>
   )
}
export default WebViewExample;

