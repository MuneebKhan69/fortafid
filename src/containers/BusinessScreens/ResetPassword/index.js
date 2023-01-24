import {Colors, NavService} from '../../../config';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Icons from '../../../assets/Icons';

class App extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };

  render() {
    const {email} = this.props.route.params;

    const {password, confirmPassword} = this.state;

    return (
      <CustomBackground>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: Colors.primary,
              marginVertical: 20,
            }}>
            Reset Password
          </Text>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingHorizontal: 40,
            }}>
            <CustomTextInput
              icon={Icons.password}
              placeholder={'New Password'}
              onChangeText={value => this.setState({password: value})}
              isPassword
            />
            <CustomTextInput
              icon={Icons.password}
              placeholder={'Confirm Password'}
              onChangeText={value => this.setState({confirmPassword: value})}
              isPassword
            />
            <CustomButton
              title={'CONTINUE'}
              onPress={() => NavService.navigate('Login')}
            />
          </View>
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default App;
