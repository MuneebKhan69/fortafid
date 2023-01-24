import {Colors, NavService, Shadows} from '../../../config';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Icons from '../../../assets/Icons';

class Login extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    radius: 0.2,
  };

  render() {
    const {fullName, email, password, confirmPassword} = this.state;
    return (
      <CustomBackground>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: Colors.primary,
                marginVertical: 20,
              }}>
              Sign-Up
            </Text>

            <CustomTextInput
              icon={Icons.email}
              placeholder="Email Address"
              value={email}
              onChangeText={text => this.setState({email: text})}
            />
            <CustomTextInput
              icon={Icons.password}
              placeholder="Password"
              value={password}
              onChangeText={text => this.setState({password: text})}
              isPassword={true}
            />
            <CustomTextInput
              icon={Icons.password}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text => this.setState({confirmPassword: text})}
              isPassword={true}
            />

            <CustomButton
              title="Signup"
              onPress={() => NavService.navigate('SignupOTP')}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.black,
              marginVertical: 30,
            }}>
            Already have an account?{' '}
            <Text
              onPress={() => NavService.goBack()}
              style={{
                color: Colors.secondary,
                textDecorationLine: 'underline',
              }}>
              Signin
            </Text>
          </Text>
        </View>
      </CustomBackground>
    );
  }
}

export default Login;
