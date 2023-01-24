import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icons from '../assets/Icons';
import {Colors, NavService, Shadows} from '../config';
const {width} = Dimensions.get('window');

export default BookTherapies = ({item, left, last, onCheck, isChecked}) => {
  const {id, title, image, icon, price, duration} = item;
  const onPress = () =>
    NavService.navigate('TherapyDetails', {
      title,
      image,
      icon,
      price,
      duration,
    });
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
        width: (width - 60) / 2,
        marginTop: 10,
      }}>
      <View
        style={{
          width: (width - 60) / 2,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={image}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            justifyContent: 'flex-end',
          }}></Image>
      </View>
      <View
        style={{
          padding: 10,
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          numberOfLines={2}
          style={{
            flex: 1,
            color: Colors.secondary,
            fontWeight: '600',
          }}>
          {title}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onCheck(id)}
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            backgroundColor: Colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            ...Shadows.shadow5,
          }}>
          {isChecked && (
            <Image
              source={Icons.check}
              style={{width: 15, height: 15, resizeMode: 'contain'}}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
