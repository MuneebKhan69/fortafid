import {Colors, Shadows} from '../../../config';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';

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
        title={'Subscription'}
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
            paddingTop: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default ChangePassword;

const SubscriptionCard = () => {
  return (
    <View
      style={{
        width: '98%',
        backgroundColor: Colors.background,
        ...Shadows.shadow3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 3,
        marginBottom: 40,
        borderRadius: 5,
        paddingBottom: 50,
      }}>
      <Text
        style={{
          color: Colors.secondary,
        }}>
        Full access of app including:
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          marginTop: 25,
        }}>
        Some Text
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          marginTop: 5,
        }}>
        Some Text
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          marginTop: 5,
        }}>
        Some Text
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: Colors.secondary,
          marginTop: 25,
        }}>
        $0.99/month
      </Text>
      <View style={{position: 'absolute', bottom: -25, width: '75%'}}>
        <CustomButton title={'Subscribe'} buttonStyle={{width: '100%'}} />
      </View>
    </View>
  );
};
