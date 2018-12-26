import React from "react";

import CompanyInput from './CompanyInput';
import CompanyURI from './webview';

import {createStackNavigator} from 'react-navigation';

const App = createStackNavigator({
  Home: {screen: CompanyInput},
  Portal: {screen: CompanyURI},
});

export default App;