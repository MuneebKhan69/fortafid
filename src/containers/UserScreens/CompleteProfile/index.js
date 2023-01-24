import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, createRef} from 'react';

import ActionSheetComponent from '../../../components/ActionSheetComponent';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomImagePicker from '../../../components/CustomImagePicker';
import CustomSelector from '../../../components/TextWithActionSheet';
import CustomTextInput from '../../../components/CustomTextInput';
import Icons from '../../../assets/Icons';
import ProfileImage from '../../../components/ProfileImage';
import cities from '../../../assets/Data/cities';
import states from '../../../assets/Data/states';

const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    newCities: [],
    selectedImage: null,
    zipCode: '',
  };

  constructor(props) {
    super(props);
    this.actionSheetStateRef = createRef();
    this.actionSheetCityRef = createRef();
  }

  render() {
    const userData = this.props.route?.params?.userData;
    const {
      name,
      phone,
      address,
      state,
      city,
      newCities,
      selectedImage,
      zipCode,
    } = this.state;
    return (
      <CustomBackground showLogo={false}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
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
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: Colors.primary,
            }}>
            Complete Profile
          </Text>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingHorizontal: 40,
              marginTop: 40,
            }}>
            <View style={{marginBottom: 40}}>
              <ProfileImage
                name={userData?.fullName}
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
            <CustomTextInput
              // icon={Icons.user}
              placeholder={'Full Name'}
              onChangeText={value => this.setState({name: value})}
              value={name}
            />
            <CustomTextInput
              // icon={Icons.phone}
              placeholder={`Phone Number`}
              onChangeText={value => this.setState({phone: value})}
              value={phone}
              keyboardType={'phone-pad'}
            />
            <CustomTextInput
              // icon={Icons.location}
              placeholder={'Address'}
              onChangeText={value => this.setState({address: value})}
              value={address}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width - 60,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.actionSheetStateRef.current.show()}
                style={{width: '48%'}}>
                <CustomSelector
                  // rightIcon={true}
                  placeholder={'State'}
                  // icon={Icons.location}
                  value={state}
                  containerStyle={{width: '100%'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.actionSheetCityRef.current.show()}
                style={{width: '48%'}}>
                <CustomSelector
                  // rightIcon={true}
                  placeholder={'City'}
                  // icon={Icons.location}
                  value={city}
                  containerStyle={{width: '100%'}}
                />
              </TouchableOpacity>
            </View>
            <CustomTextInput
              // icon={Icons.location}
              placeholder={'Zip Code'}
              onChangeText={value => this.setState({zipCode: value})}
              value={zipCode}
              keyboardType={'phone-pad'}
            />

            <CustomButton
              title={'CREATE PROFILE'}
              onPress={() => NavService.navigate('Onboarding')}
            />
          </View>
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default App;

{
  /* <View
style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: width - 60,
}}>
<View style={{width: '48%'}}>
  <CustomTextInput
    icon={Icons.location}
    placeholder={'Address'}
    onChangeText={value => this.setState({address: value})}
    value={address}
    containerStyle={{width: (width - 70) / 2}}
  />
</View>
<TouchableOpacity
  activeOpacity={0.8}
  onPress={() => this.actionSheetStateRef.current.show()}
  style={{width: '48%'}}>
  <CustomSelector
    rightIcon={true}
    placeholder={'State'}
    icon={Icons.location}
    value={state}
    containerStyle={{width: '100%'}}
  />
</TouchableOpacity>
</View> */
}
