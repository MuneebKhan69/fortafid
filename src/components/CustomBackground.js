import React from 'react';
import {ImageBackground, ScrollView, View,Text,Image} from 'react-native';
import Images from '../assets/Images';
import Logo from './Logo';
import { Colors } from '../config';

export default ({children,background}) => {
  return (
    background ?
    <View style={{flex: 1, }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground source={Images.elipse} resizeMode="contain">
            <Image source={Images.cemra} style={{resizeMode:'center'}}/>
          </ImageBackground>
        </View>
        <View style={{flex: 1,marginTop:30}}>{children}</View>
      </ScrollView>
    </View>
    :
    <View style={{flex: 1,}}>
   
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo size={200} />
        </View>
        <View style={{flex: 1,marginTop:30}}>{children}</View>
      </ScrollView>
    </View>
  );
};
