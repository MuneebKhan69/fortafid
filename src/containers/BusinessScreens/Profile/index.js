import {Colors, NavService} from '../../../config';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import ProfileImage from '../../../components/ProfileImage';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

export class Profile extends Component {
  state = {
    name: 'abc',
    state: 'Arizona',
    accountTitle: 'Business account',
    accountNumber: '1234567890',
    bankName: 'ABC Bank',
    city: 'Phoenix',
    EINNumber: '123456',
    licenseNumber: 'abc123456asd',
    address: '221b Baker Street',
    insurancePolicyNumber: 'Policy123',
    insuranceExpiryDate: '25/12/2025',
  };
  render() {
    const {
      name,
      state,
      city,
      EINNumber,
      licenseNumber,
      address,
      insurancePolicyNumber,
      insuranceExpiryDate,
      accountTitle,
      accountNumber,
      bankName,
    } = this.state;
    return (
      <AppBackground title={'Profile'} back nav={'RoleSelection'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 15,
          }}>
          <View style={{alignItems: 'center', alignSelf: 'center'}}>
            <ProfileTextInput
              label={'Business Name'}
              value={name}
              editable={false}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({address: value})}
              label={'Address'}
              value={address}
            />

            <ProfileTextInput
              onChangeText={value => this.setState({EINNumber: value})}
              label={`EIN Number`}
              value={EINNumber}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({licenseNumber: value})}
              label={'License Number'}
              value={licenseNumber}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <ProfileTextInput
                label={'City'}
                value={city}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <ProfileTextInput
                label={'State'}
                value={state}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <ProfileTextInput
                label={'Insurance Policy No.'}
                value={insurancePolicyNumber}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <ProfileTextInput
                label={'Expiry Date'}
                value={insuranceExpiryDate}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
            </View>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 18,
                fontWeight: '600',
                width: width - 60,
                marginTop: 20,
              }}>
              Banking Information
            </Text>
            <ProfileTextInput
              onChangeText={value => this.setState({accountTitle: value})}
              label={'Account Title'}
              editable={false}
              value={accountTitle}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({accountNumber: value})}
              label={'Account Number'}
              editable={false}
              value={accountNumber}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({bankName: value})}
              label={'Bank Name'}
              editable={false}
              value={bankName}
            />
            {/* <CustomButton
              title={'Edit Profile'}
              onPress={() => NavService.navigate('EditProfile')}
            /> */}
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

export default connect(mapState)(Profile);
