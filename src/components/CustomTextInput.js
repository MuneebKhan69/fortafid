import {Colors, Shadows} from '../config';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Icons from '../assets/Icons';

const {width} = Dimensions.get('window');

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);

  return (
    <View style={{width: '100%', marginTop: 15, alignItems: 'center'}}>
      <View
        style={{
          width: width - 60,
          height: 50,
          backgroundColor: Colors.white,
          paddingHorizontal: 15,
          borderRadius: 7,
          flexDirection: 'row',
          alignItems: 'center',
          ...Shadows.shadow5,
          ...props.containerStyle,
        }}>
        {props?.icon && (
          <Image
            source={props?.icon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: Colors.icon,
              marginRight: 10,
            }}
          />
        )}
        <TextInput
          secureTextEntry={hidden}
          style={{
            flex: 1,
            height: 50,
            color: Colors.secondary,
          }}
          placeholderTextColor={Colors.secondary}
          {...props}
        />
        {props.isPassword && (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => setHidden(!hidden)}>
            <Image
              source={hidden ? Icons.eyeShown : Icons.eyeHidden}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                alignSelf: 'center',

                tintColor: Colors.primary,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export function ProfileTextInput(props) {
  const {label, labelStyle, containerStyle} = props;
  return (
    <View style={{marginTop: 15, alignItems: 'center'}}>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
          fontWeight: '600',
          width: width - 60,
          marginBottom: 10,
          ...labelStyle,
        }}>
        {label}
      </Text>
      <View
        style={{
          width: width - 66,
          height: 50,
          backgroundColor: Colors.white,
          paddingHorizontal: 15,
          borderRadius: 7,
          flexDirection: 'row',
          alignItems: 'center',
          ...Shadows.shadow3,
          ...containerStyle,
        }}>
        <TextInput
          style={{
            flex: 1,
            height: 50,
            color: Colors.secondary,
            ...props.textInputStyle,
          }}
          placeholderTextColor={Colors.secondary}
          {...props}
        />
      </View>
    </View>
  );
}
