import {Colors, NavService} from '../../../config';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component, createRef} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Icons from '../../../assets/Icons';

class ChangePassword extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  render() {
    const {currentPassword, newPassword, confirmPassword} = this.state;
    return (
      <AppBackground
        title={'Change Password'}
        back
        notification={false}
        nav={'Settings'}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingHorizontal: 40,
            }}>
            <View style={{flex: 1}}>
              <CustomTextInput
                placeholder={'Current Password'}
                onChangeText={value => this.setState({currentPassword: value})}
                value={currentPassword}
                isPassword
              />
              <CustomTextInput
                placeholder={'New Password'}
                onChangeText={value => this.setState({newPassword: value})}
                value={newPassword}
                isPassword
              />
              <CustomTextInput
                placeholder={'Confirm New Password'}
                onChangeText={value => this.setState({confirmPassword: value})}
                value={confirmPassword}
                isPassword
              />
              <CustomButton
                title={'Save'}
                onPress={() => NavService.navigate('Settings')}
              />
            </View>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default ChangePassword;
