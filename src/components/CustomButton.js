import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Shadows} from '../config';
const {width} = Dimensions.get('screen');

function CustomButton(props) {
  const {color, title, onPress, buttonStyle, textStyle, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          alignSelf: 'center',
          width: width - 60,
          marginTop: 15,
          ...Shadows.shadow5,
        },
        buttonStyle,
      ]}>
      <LinearGradient
        colors={Colors.gradient}
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
        }}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.4}}>
        <Text
          style={[
            {fontSize: 16, color: Colors.white, fontWeight: '800'},
            textStyle,
          ]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CustomButton;
