import {Colors, NavService} from '../../../config';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import ProfileImage from '../../../components/ProfileImage';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

export class Profile extends Component {
  render() {
    const {user} = this.props;
    return (
      <AppBackground title={'Profile'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 15,
            paddingBottom: 10,
          }}>
          <View style={{alignItems: 'center', alignSelf: 'center'}}>
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
                marginBottom: 10,
              }}>
              {user?.email}
            </Text>
            <ProfileTextInput
              label={`Phone`}
              value={user?.phone}
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
            <ProfileTextInput
              label={'Zip Code'}
              value={user?.zip}
              editable={false}
            />
            <CustomButton
              title={'Edit Profile'}
              onPress={() => NavService.navigate('EditProfile')}
            />
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
