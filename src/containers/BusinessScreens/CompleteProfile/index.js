import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, createRef} from 'react';

import ActionSheetComponent from '../../../components/ActionSheetComponent';
import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import CustomSelector from '../../../components/TextWithActionSheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import cities from '../../../assets/Data/cities';
import moment from 'moment';
import states from '../../../assets/Data/states';

const {width} = Dimensions.get('window');
class EditProfile extends Component {
  state = {
    name: '',
    bio: '',
    state: '',
    accountTitle: '',
    accountNumber: '',
    bankName: '',
    city: '',
    driversLicense: '',
    licenseNumber: '',
    address: '',
    userImage: '',
    insurancePolicyNumber: '',
    insuranceExpiryDate: '',
    selectedImage: null,
    showDOB: false,
    newCities: [],
  };

  constructor(props) {
    super(props);
    this.actionSheetStateRef = createRef();
    this.actionSheetCityRef = createRef();
  }

  render() {
    const {
      name,
      bio,
      state,
      city,
      driversLicense,
      licenseNumber,
      address,
      userImage,
      insurancePolicyNumber,
      insuranceExpiryDate,
      selectedImage,
      showDOB,
      accountTitle,
      accountNumber,
      bankName,
      newCities,
    } = this.state;
    return (
      <AppBackground
        title={'Business setup'}
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
          
          <View style={{alignItems: 'center', alignSelf: 'center'}}>
            {/* <View style={{marginBottom: 40}}>
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
            </View> */}
            <ProfileTextInput
              onChangeText={value => this.setState({name: value})}
              label={'Business Name'}
              value={name}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({address: value})}
              label={'Address'}
              value={address}
            />

            <ProfileTextInput
              onChangeText={value => this.setState({driversLicense: value})}
              label={`EIN Number`}
              value={driversLicense}
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
              value={accountTitle}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({accountNumber: value})}
              label={'Account Number'}
              value={accountNumber}
            />
            <ProfileTextInput
              onChangeText={value => this.setState({bankName: value})}
              label={'Bank Name'}
              value={bankName}
            />
            <CustomButton
              title={'Setup'}
              onPress={() => {
                NavService.navigate('Profile');
              }}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default EditProfile;
