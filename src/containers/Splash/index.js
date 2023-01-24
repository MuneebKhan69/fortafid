
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Images from '../../assets/Images';
import { NavService } from '../../config';
const Splash = () => {
  

  useEffect(() => {
   
    setTimeout(() => {
      NavService.navigate('UserAuthStack');
    }, 2000);

    // getUser();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="" />
      <Image source={Images.Splash} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
