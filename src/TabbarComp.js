import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Device from './config/Helpers/Devices';
import {Colors, Icon} from './config';
import Icons from './assets/Icons';
import LinearGradient from 'react-native-linear-gradient';

export default class TabbarComp extends React.Component {
  render() {
    const {state, descriptors, navigation} = this.props;
    return (
      <View style={{backgroundColor: Colors.background}}>
        <LinearGradient
          colors={Colors.gradient}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 2}}
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'space-around',
          }}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              navigation.navigate(route.name);
            };
            let imageSrc = Icons.home;
            if (route.name === 'Profile') imageSrc = Icons.profile;
            if (route.name === 'BookSession') imageSrc = Icons.calendar;
            if (route.name === 'Calender') imageSrc = Icons.calendarWithClock;

            let title = 'Home';
            if (route.name === 'Profile') title = 'Profile';
            if (route.name === 'BookSession') title = 'Book a Session';
            if (route.name === 'Calender') title = 'Calender';

            return (
              <TouchableOpacity
                key={index}
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityRole="button"
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.tabs}>
                <Image
                  source={imageSrc}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: Colors.white,
                    // tintColor: isFocused ? Colors.primary : Colors.white,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: Colors.white,
                  }}>
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 65,
    // width: 65,
    // backgroundColor: 'teal',
  },
});
