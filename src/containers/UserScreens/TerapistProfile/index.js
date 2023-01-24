import {Colors, NavService} from '../../../config';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import ProfileImage from '../../../components/ProfileImage';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import moment from 'moment';

const provider = {
  name: 'Caroline Lee',
  email: 'caroline@domain.com',
  image:
    'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
  bio: 'I am a software developer',
  day: 'Monday',
  time: '10:00 AM',
  licenseNumber: '123456789',
  driversLicense: '123456789',
  state: 'Arizona',
  city: 'Phoenix',
  address: '221B Baker Street',
  insurancePolicyNumber: '0987654321',
  insuranceExpiryDate: moment().format('MMM DD, YYYY'),
  role: 'service provider',
};
const {width} = Dimensions.get('window');

export class TherapistProfile extends Component {
  render() {
    const {data} = this.props.route.params;
    const user = {
      ...provider,
      name: data.name,
      email: data.email,
      image: data.image,
    };
    return (
      <AppBackground title={user?.name} back notification={false}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 15,
            paddingBottom: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              paddingBottom: 10,
            }}>
            <ProfileImage name={user?.name} imageUri={user?.image} />
            <GradientText
              style={{
                marginTop: 25,
                fontSize: 18,
                fontWeight: '600',
              }}>
              {user?.name}
            </GradientText>
            <Text
              style={{
                color: Colors.grey,
                marginTop: 5,
                fontSize: 14,
                fontWeight: '600',
                // marginBottom: 10,
              }}>
              {user?.bio}
            </Text>
            <CustomButton
              title={'Message'}
              onPress={() =>
                NavService.navigate('Messages', {
                  screen: 'Chat',
                  params: {
                    data: {
                      name: user?.name,
                      image: user?.image,
                    },
                  },
                })
              }
            />
            <ProfileTextInput
              label={'Email'}
              value={user?.email}
              editable={false}
            />
            <ProfileTextInput
              label={'License Number'}
              value={user?.licenseNumber}
              editable={false}
            />
            <ProfileTextInput
              label={`Driver's License`}
              value={user?.driversLicense}
              editable={false}
            />
            <ProfileTextInput
              label={'Address'}
              value={user?.address}
              editable={false}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <ProfileTextInput
                label={'City'}
                value={user?.city}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <ProfileTextInput
                label={'State'}
                value={user?.state}
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
                label={'Day'}
                value={user?.day}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <ProfileTextInput
                label={'Time'}
                value={user?.time}
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
                value={user?.insurancePolicyNumber}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <ProfileTextInput
                label={'Expiry Date'}
                value={user?.insuranceExpiryDate}
                editable={false}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
            </View>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default TherapistProfile;
