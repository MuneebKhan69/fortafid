import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icons from '../assets/Icons';
import Images from '../assets/Images';
import {Colors, NavService, Shadows} from '../config';
import Checkbox from './Checkbox';
const {width} = Dimensions.get('window');

export default LatestTherapies = ({
  title,
  image,
  icon,
  price,
  duration,
  onPress = () =>
    NavService.navigate('TherapyDetails', {
      title,
      image,
      icon,
      price,
      duration,
    }),
  left,
  last,
  isChecked = false,
  onCheckBokPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
        marginLeft: left ? 3 : 0,
        marginRight: last ? 3 : 0,
        borderRadius: 5,
        marginBottom: 5,
        ...Shadows.shadow3,
        width: (width - 80) / 2,
        marginTop: 10,
      }}>
      <View
        style={{
          width: (width - 80) / 2,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={image}
          imageStyle={{
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            justifyContent: 'flex-end',
            backgroundColor: 'teal',
          }}>
          <View
            style={{
              marginHorizontal: 7,
              alignSelf: 'flex-end',
              marginBottom: 15,
            }}>
            <Checkbox onPress={onCheckBokPress} isChecked={isChecked} />
          </View>
          <Image
            source={Images.therapyBackground}
            style={{
              width: ((width - 80) / 2) * 0.7,
              height: ((width - 80) / 2) * 0.7 * 0.521,

              resizeMode: 'contain',
              bottom: -1,
              zIndex: 95,
            }}
          />
          <Image
            source={icon}
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              position: 'absolute',
              bottom: 15,
              left: 13,
              zIndex: 99,
            }}
          />
        </ImageBackground>
      </View>
      <View style={{padding: 10, flex: 1, width: '100%'}}>
        <Text
          style={{
            width: '100%',
            color: Colors.secondary,
            fontWeight: '600',
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: (width - 80) / 2 - 30,
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <View style={{flex: 3}}>
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: '600',
              }}>
              ${price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 2,
            }}>
            <Image
              source={Icons.clock}
              style={{width: 15, height: 15, marginRight: 5}}
            />
            <Text
              style={{
                width: '100%',
                color: Colors.secondary,
                fontWeight: '600',
              }}>
              {duration}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
