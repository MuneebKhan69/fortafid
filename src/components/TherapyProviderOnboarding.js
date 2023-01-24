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
  item,
  index,
  left,
  last,
  isChecked,
  onCheckBokPress = () => {},
  onPress = () => {},
}) => {
  const {name, image, city, state} = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: left ? 3 : 0,
        marginRight: last ? 3 : 0,
        borderRadius: 5,
        marginBottom: 5,
        width: (width - 60) / 2,
        marginTop: 10,
      }}>
      <View
        style={{
          width: (width - 80) / 2,
          height: (width - 80) / 2,
          alignItems: 'center',
          justifyContent: 'center',
          ...Shadows.shadow3,
          borderRadius: 5,
        }}>
        <ImageBackground
          source={{uri: image}}
          imageStyle={{
            borderRadius: 5,
          }}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 5,
            alignItems: 'flex-end',
          }}>
          <View style={{margin: 10}}>
            <Checkbox onPress={onCheckBokPress} isChecked={isChecked} />
          </View>
        </ImageBackground>
      </View>
      <View style={{padding: 10, flex: 1, width: '100%'}}>
        <Text
          style={{
            width: '90%',
            textAlign: 'center',
            color: Colors.secondary,
            fontWeight: '600',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            width: '90%',
            textAlign: 'center',
            color: Colors.darkGrey,
            fontWeight: '500',
          }}>
          {city}, {state}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
