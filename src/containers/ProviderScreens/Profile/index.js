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
              {user?.bio}
            </Text>
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

{
  /* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 40,
                justifyContent: 'space-between',
                width: width - 40,
              }}>
              <View
                style={{
                  width: (width - 60) / 2 - 3,
                  height: (width - 60) / 2,
                  backgroundColor: Colors.background,
                  borderRadius: 5,
                  ...Shadows.shadow3,
                  marginLeft: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  Total Lessons Completed
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: Colors.secondary,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 28,
                  }}>
                  {user?.lessonsCompleted}
                </Text>
              </View>
              <View
                style={{
                  width: (width - 60) / 2 - 3,
                  height: (width - 60) / 2,
                  backgroundColor: Colors.background,
                  borderRadius: 5,
                  ...Shadows.shadow3,
                  marginRight: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  Overall Score
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: Colors.secondary,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 28,
                  }}>
                  {user?.overallScore}
                </Text>
              </View>
            </View> */
}
{
  /* <Text
style={{
marginTop: 25,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
Name:{' '}
<Text
style={{
fontWeight: '400',
}}>
{user?.name}
</Text>
</Text>
<Text
style={{
marginTop: 10,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
Email:{' '}
<Text
style={{
fontSize: 16,
fontWeight: '400',
}}>
{user?.email}
</Text>
</Text>
<Text
style={{
marginTop: 10,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
City:{' '}
<Text
style={{
fontSize: 16,
fontWeight: '400',
}}>
{user?.city}
</Text>
</Text>
<Text
style={{
marginTop: 10,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
State:{' '}
<Text
style={{
fontSize: 16,
fontWeight: '400',
}}>
{user?.state}
</Text>
</Text>
<Text
style={{
marginTop: 10,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
Institute:{' '}
<Text
style={{
fontSize: 16,
fontWeight: '400',
}}>
{user?.institute}
</Text>
</Text>
<Text
style={{
marginTop: 10,
color: Colors.secondary,
fontSize: 18,
fontWeight: '700',
}}>
Total Students:{' '}
<Text
style={{
fontSize: 16,
fontWeight: '400',
}}>
{user?.totalStudents} Students
</Text>
</Text> */
}
