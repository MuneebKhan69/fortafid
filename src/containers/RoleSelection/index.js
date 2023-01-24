import React, {Component} from 'react';

import CustomBackground from '../../components/CustomBackground';
import CustomButton from '../../components/CustomButton';
import {NavService} from '../../config';
import {View} from 'react-native';

class App extends Component {
  render() {
    return (
      <CustomBackground back={false}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flex: 1,
            }}>
            <CustomButton
              title={'Sign Up As a User'}
              onPress={() => NavService.navigate('UserAuthStack')}
            />
            <CustomButton
              title={'Sign Up As a Service Provider'}
              onPress={() => NavService.navigate('ProviderAuthStack')}
            />
            <CustomButton
              title={'Sign Up As a Business'}
              onPress={() => NavService.navigate('BusinessAuthStack')}
            />
            <CustomButton
              title={'Sign Up As a Guest'}
              // onPress={() => NavService.navigate('ProviderAuthStack')}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default App;
