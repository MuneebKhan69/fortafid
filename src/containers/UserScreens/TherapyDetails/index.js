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

export class TherapyDetails extends Component {
  render() {
    const {title, image, icon, price, duration} = this?.props?.route?.params;
    const benefits = `Tempor veniam nisi ut et commodo aliqua voluptate ut irure ullamco. Ipsum Lorem enim sunt aliqua enim tempor reprehenderit veniam aute dolore laborum cillum cupidatat. Sunt in Lorem do deserunt nulla quis pariatur aute eiusmod aute eiusmod adipisicing. Culpa non Lorem ut aliqua anim. Sunt eiusmod quis deserunt ex est ut exercitation irure enim do amet officia enim. Tempor reprehenderit Lorem ex adipisicing. Fugiat labore id in dolor voluptate id excepteur.`;
    const ingredients = `Consectetur enim labore commodo adipisicing consequat dolore enim labore adipisicing in. Minim voluptate enim ex incididunt. Et elit anim deserunt velit veniam culpa. Pariatur tempor adipisicing in mollit tempor et. Consequat quis anim non velit occaecat. Quis Lorem commodo ex consectetur adipisicing aliqua ullamco sunt ut officia ea tempor. Laborum dolor magna duis nisi tempor qui pariatur cillum non aliqua officia officia ullamco adipisicing.

Est amet irure aliqua dolore enim laboris. Nostrud eu veniam reprehenderit duis reprehenderit culpa commodo proident aliquip nulla veniam laborum culpa eiusmod. Excepteur cupidatat elit veniam Lorem dolor sunt occaecat minim ad minim. Aliquip reprehenderit minim in et id ullamco commodo eu. Culpa aliqua eiusmod dolor proident aliquip elit magna consectetur consectetur enim enim non. Eu ipsum deserunt officia quis ut consequat elit reprehenderit dolor velit ad culpa consequat eu.

Dolor laborum deserunt enim incididunt nulla ea dolor ut nisi aute sint Lorem. Laborum mollit fugiat consequat qui non adipisicing ea pariatur non est nulla ad fugiat. Enim aliqua mollit ad velit id quis Lorem pariatur adipisicing aliquip.`;
    return (
      <AppBackground title={title} back notification={false}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginTop: 10}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <ImageBackground
            source={image}
            imageStyle={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            style={{
              height: width / 2,
              width: '100%',
              resizeMode: 'cover',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              justifyContent: 'flex-end',
              marginTop: 10,
              ...Shadows.shadow3,
            }}>
            <Image
              source={Images.therapyBackground}
              style={{
                width: ((width - 60) / 2) * 0.7,
                height: ((width - 60) / 2) * 0.7 * 0.521,

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
            {benefits}
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
            title="Schedule An Appointment"
            onPress={() => NavService.navigate('RequestAppointment')}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default TherapyDetails;
