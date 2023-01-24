import {
  KeyboardAvoidingView,
  LogBox,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import React, {Component} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Loader} from './src/config';
import Nav from './src';
import Orientation from 'react-native-orientation';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import codePush from 'react-native-code-push';
import {store} from './src/redux';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Remote debugger']);

class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  render() {
    return (
      <Wrapper>
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Provider store={store}>
            <Loader />
            <Nav />
            <Toast />
          </Provider>
        </GestureHandlerRootView>
      </Wrapper>
    );
  }
}

export default codePush(App);

function Wrapper({children}) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        // keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1}}>{children}</View>;
}
