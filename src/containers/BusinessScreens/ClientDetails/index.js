import {Colors, NavService} from '../../../config';
import {Dimensions, Image, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import mapStyle from './mapStyle.json';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

class ClientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userData = this.props.route.params.data;
    // console.log(userData, 'userData');
    return (
      <AppBackground
        title={'Client Details'}
        back
        notification={false}
        marginHorizontal={false}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: height * 0.27,
              width: width * 0.9,
              backgroundColor: Colors.white,
              shadowRadius: 8,
              shadowOpacity: 0.3,
              borderRadius: 6,
              marginTop: 15,
              marginHorizontal: 20,
              position: 'absolute',
              zIndex: 99,
              Top: 0,
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: userData?.image}}
              style={{
                height: 150,
                resizeMode: 'cover',
                backgroundColor: Colors.white,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              }}
            />
            <View
              style={{
                marginTop: 10,
                marginBottom: 15,
              }}>
              <GradientText
                style={{
                  fontWeight: '600',
                  marginStart: 15,
                }}>
                {userData?.title}
              </GradientText>

              <Text
                style={{
                  color: Colors.darkGrey,
                  marginBottom: 5,
                  fontSize: 14,
                  marginStart: 15,
                }}>
                {moment(userData?.scheduledAt).format('llll')}{' '}
                {userData?.location}
              </Text>
            </View>
          </View>

          <View style={{width: '100%', flex: 1, marginTop: 100}}>
            <View
              style={{
                position: 'absolute',
                zIndex: 99,
                bottom: 60,
                alignSelf: 'center',
              }}>
              <CustomButton
                containerStyle={{
                  position: 'absolute',
                  bottom: 0,
                }}
                onPress={() =>
                  NavService.navigate('Messages', {
                    screen: 'Chat',
                    params: {
                      data: {
                        name: 'John Doe',
                        image: '',
                      },
                    },
                  })
                }
                title={'Start Messaging'}
              />
            </View>
            <MapView
              initialRegion={{
                latitude: 37.298984,
                longitude: -122.050362,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
              region={{
                latitude: 37.298984,
                longitude: -122.050362,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
              loadingEnabled={true}
              loadingIndicatorColor="#666666"
              loadingBackgroundColor="#eeeeee"
              moveOnMarkerPress={false}
              showsCompass={true}
              showsPointsOfInterest={false}
              style={{width: '100%', height: '100%'}}
              customMapStyle={mapStyle}
              provider={PROVIDER_GOOGLE}>
              <MapView.Marker
                coordinate={{latitude: 37.298984, longitude: -122.050362}}
                // onPress={() => {
                //   NavService.navigate('RestaurantDetails', {
                //     name: data?.name,
                //   });
                // }}
              >
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Icons.pharmacyLocation}
                    style={{
                      height: 25,
                      width: 25,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </MapView.Marker>
            </MapView>
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default ClientDetails;
