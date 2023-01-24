import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, createRef} from 'react';

import ActionSheetComponent from '../../../components/ActionSheetComponent';
import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import CustomImagePicker from '../../../components/CustomImagePicker';
import CustomSelector from '../../../components/TextWithActionSheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icons from '../../../assets/Icons';
import ProfileImage from '../../../components/ProfileImage';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import cities from '../../../assets/Data/cities';
import moment from 'moment';
import states from '../../../assets/Data/states';

const {width} = Dimensions.get('window');
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
class EditProfile extends Component {
  state = {
    name: '',
    bio: '',
    state: '',
    day: '',
    city: '',
    driversLicense: '',
    licenseNumber: '',
    address: '',
    affiliation: '',
    userImage: '',
    insurancePolicyNumber: '',
    insuranceExpiryDate: '',
    time: '',
    selectedImage: null,
    showDOB: false,
    showTime: false,
    newCities: [],
  };

  constructor(props) {
    super(props);
    this.actionSheetDayRef = createRef();
    this.actionSheetStateRef = createRef();
    this.actionSheetCityRef = createRef();
  }

  render() {
    const {
      name,
      bio,
      state,
      day,
      city,
      driversLicense,
      licenseNumber,
      address,
      affiliation,
      userImage,
      insurancePolicyNumber,
      insuranceExpiryDate,
      selectedImage,
      showDOB,
      time,
      showTime,
      newCities,
    } = this.state;
    return (
      <AppBackground
        title={'Complete Profile'}
        back={true}
        menu={false}
        notification={false}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
            paddingBottom: 20,
          }}>
          <ActionSheetComponent
            ref={this.actionSheetStateRef}
            title="Select a State"
            dataset={states}
            onPress={item => {
              this.setState({
                state: item,
                newCities: cities[`${item}`],
                city: '',
              });
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetDayRef}
            title="Select a Day"
            dataset={days}
            onPress={item => {
              this.setState({
                day: item,
              });
            }}
          />
          <ActionSheetComponent
            ref={this.actionSheetCityRef}
            title="Select a City"
            dataset={newCities}
            onPress={item => {
              this.setState({city: item});
            }}
          />
          <DateTimePickerModal
            // maximumDate={new Date()}
            themeVariant="light"
            isDarkModeEnabled={false}
            isVisible={showDOB}
            mode="date"
            onConfirm={date => {
              this.setState({
                showDOB: false,
                insuranceExpiryDate: moment(date).format('MMM DD, YYYY'),
              });
            }}
            onCancel={() => this.setState({showDOB: false})}
          />
          <DateTimePickerModal
            // maximumDate={new Date()}
            themeVariant="light"
            isDarkModeEnabled={false}
            isVisible={showTime}
            mode="time"
            onConfirm={time => {
              this.setState({
                showTime: false,
                time: moment(time).format('HH:mm'),
              });
            }}
            onCancel={() => this.setState({showTime: false})}
          />

          <View style={{alignItems: 'center', alignSelf: 'center'}}>
            <View style={{marginBottom: 40}}>
              <ProfileImage
                // name={name}
                imageUri={
                  selectedImage
                    ? selectedImage.path
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmUP9cJ5g05AS_lBn51THeS0ESb7lnhHVloXWag0ZLg64NZZOsD_Y-bY8TDakpd3nHwg&usqp=CAU'
                }
              />
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: Colors.primary,
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomImagePicker
                  onImageChange={(path, mime) => {
                    this.setState({selectedImage: {path, mime}});
                  }}>
                  <Image
                    source={Icons.upload}
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                  />
                </CustomImagePicker>
              </View>
            </View>
            <ProfileTextInput
              onChangeText={value => this.setState({name: value})}
              label={'Full Name'}
              value={name}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({bio: value})}
              label={'Bio'}
              value={bio}
              containerStyle={{height: 100}}
              multiline={true}
              textInputStyle={{
                height: 90,
              }}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({licenseNumber: value})}
              label={'License Number'}
              value={licenseNumber}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({driversLicense: value})}
              label={`Driver's License`}
              value={driversLicense}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({address: value})}
              label={'Address'}
              value={address}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({affiliation: value})}
              label={'Affiliation'}
              value={affiliation}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.actionSheetDayRef.current.show()}>
                <CustomSelector
                  label={'Day'}
                  // placeholder={'State'}
                  value={day}
                  containerStyle={{width: (width - 70) / 2}}
                  labelStyle={{width: (width - 70) / 2}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({showTime: true})}>
                <CustomSelector
                  label={'Time'}
                  // placeholder={'City'}
                  value={time}
                  containerStyle={{width: (width - 70) / 2}}
                  labelStyle={{width: (width - 70) / 2}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.actionSheetStateRef.current.show()}>
                <CustomSelector
                  label={'State'}
                  // placeholder={'State'}
                  value={state}
                  containerStyle={{width: (width - 70) / 2}}
                  labelStyle={{width: (width - 70) / 2}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.actionSheetCityRef.current.show()}>
                <CustomSelector
                  label={'City'}
                  // placeholder={'City'}
                  value={city}
                  containerStyle={{width: (width - 70) / 2}}
                  labelStyle={{width: (width - 70) / 2}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <ProfileTextInput
                onChangeText={value =>
                  this.setState({insurancePolicyNumber: value})
                }
                label={'Insurance Policy No.'}
                value={insurancePolicyNumber}
                containerStyle={{width: (width - 70) / 2}}
                labelStyle={{width: (width - 70) / 2}}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({showDOB: true})}>
                <CustomSelector
                  label={'Expiry Date'}
                  value={insuranceExpiryDate}
                  containerStyle={{width: (width - 70) / 2}}
                  labelStyle={{width: (width - 70) / 2}}
                />
              </TouchableOpacity>
            </View>
            <CustomButton
              title={'Create Account'}
              onPress={() => {
                NavService.reset(0, [{name: 'ProviderAppStack'}]);
              }}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default EditProfile;
