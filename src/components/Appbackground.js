import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import Images from '../assets/Images';
import {Colors, NavService} from '../config';
import CustomBackground from './CustomBackground';
export function AppBackground({
  
  editeIcon,
  route,
  children,
  title,
  back = false,
  nav = '',
  rightIcon = Images.avatar,
  marginHorizontal,
  rightIconNav = () => {},
  profile = true,
  edit = false,
  
  home,
}) {
  const onPress = () => {
    nav.length
      ? NavService.navigate(nav)
      : back
      ? NavService.goBack()
      : NavService.navigate('Files')
  };

  //  console.log("==========="+ route.name)
  return home ? (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: Colors.white,
              borderRadius: 10,
              left: 20,
              // width: 35,
              // height: 35,
              padding: 5,
              justifyContent: 'center',
            }}>
            <Image
              source={back ? Icons.back : Icons.menu}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                // tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
     
          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: '600',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {profile && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Summary');
              }}
              style={{
                right: 20,
                position: 'absolute',
                alignItems: 'center',
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 5,
                justifyContent: 'center',
                
              }}>
              <Image
                source={Icons.folder}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={rightIconNav}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: Colors.white,
              }}>
              <Image
                source={editeIcon}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  ) : (
    <ImageBackground
      source={Images.background}
      style={{flex: 1}}>
      <View
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <>
        {back && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: Colors.white,
              borderRadius: 10,
              left: 20,
              // width: 35,
              // height: 35,
              padding: 5,
              justifyContent: 'center',
            }}>
            <Image
              source={Icons.back}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                // tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
)}
          <View>
            <Text
              style={{
                color: Colors.white,
                fontWeight: '600',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {profile && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Profile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: Colors.darkGray,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={rightIconNav}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: Colors.darkGray,
              }}>
              <Image
                source={editeIcon}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </ImageBackground>
  );
}

export default AppBackground;
