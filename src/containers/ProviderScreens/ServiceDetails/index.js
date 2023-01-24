import {Colors, NavService, Shadows} from '../../../config';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Images from '../../../assets/Images';

const {width} = Dimensions.get('window');

export class ServiceDetails extends Component {
  render() {
    const {data} = this?.props?.route?.params;
    const {title, image, ingredients, description} = data;
    return (
      <AppBackground title={title} back notification={false}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginTop: 10}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <Image
            source={{uri: image}}
            style={{
              borderRadius: 5,
              height: width / 2,
              width: '100%',
              resizeMode: 'cover',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              justifyContent: 'flex-end',
              marginTop: 10,
              ...Shadows.shadow3,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <GradientText
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginRight: 5,
              }}>
              Therapy:
            </GradientText>
            <Text
              style={{
                color: Colors.grey,
                marginTop: 4,
                fontWeight: '600',
                fontSize: 15,
              }}>
              {title}
            </Text>
          </View>
          <GradientText
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginRight: 5,
            }}>
            Benefits:
          </GradientText>
          <Text
            style={{
              color: Colors.grey,
              marginTop: 10,
              fontSize: 12,
            }}>
            {description}
          </Text>
          <GradientText
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginRight: 5,
              marginTop: 20,
            }}>
            Ingredients:
          </GradientText>
          <Text
            style={{
              color: Colors.grey,
              marginTop: 10,
              fontSize: 12,
            }}>
            {ingredients}
          </Text>
          <CustomButton
            title="Edit"
            onPress={() => NavService.navigate('EditService', {item: data})}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default ServiceDetails;
