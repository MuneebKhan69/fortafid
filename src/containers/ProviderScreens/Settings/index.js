import {Colors, NavService} from '../../../config';
import React, {Component} from 'react';
import {Switch, Text, View} from 'react-native';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';

export class TermsConditions extends Component {
  state = {
    notifications: false,
  };
  onNotificationPress = () => {
    const {notifications} = this.state;
    let response;
    this.setState(
      {notifications: !notifications},
      // async () =>
      //   (response = await sendNotifications(!notifications, notifications => {
      //     this.setState({notifications: !notifications});
      //   })),
    );
  };

  render() {
    const {notifications} = this.state;
    return (
      <AppBackground title={'Settings'} notification={false} back>
        <CustomButton
          title="Change Password"
          buttonStyle={{width: '100%'}}
          onPress={() => NavService.navigate('ChangePassword')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 25,
          }}>
          <Text
            style={{fontSize: 16, color: Colors.secondary, fontWeight: '600'}}>
            Enable Notifications
          </Text>
          <Switch
            trackColor={{false: Colors.secondary, true: Colors.secondary}}
            thumbColor={notifications ? Colors.primary : Colors.white}
            ios_backgroundColor={
              notifications ? Colors.white : Colors.secondary
            }
            onValueChange={this.onNotificationPress}
            value={notifications}
          />
        </View>
        <CustomButton
          title="Terms and Conditions"
          buttonStyle={{width: '100%'}}
          onPress={() => NavService.navigate('TermsConditions')}
        />
        <CustomButton
          title="Privacy Policy"
          buttonStyle={{width: '100%'}}
          onPress={() => NavService.navigate('PrivacyPolicy')}
        />
      </AppBackground>
    );
  }
}

export default TermsConditions;
