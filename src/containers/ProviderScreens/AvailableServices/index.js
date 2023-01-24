import {Colors, NavService, Shadows} from '../../../config';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import GradientText from '../../../components/GradientText';

const {width} = Dimensions.get('window');

const dummyData = [
  {
    title: 'Alleviate',
    price: '$10',
    duration: '20 min',
    ingredients: 'Eiusmod irure laboris reprehenderit ex duis incididunt.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },
  {
    title: 'Brainstorm',
    price: '$15',
    duration: '20 min',
    ingredients: 'Ipsum Lorem laboris ea et officia id aliquip.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },

  {
    title: 'Get Up & Go',
    price: '$17',
    duration: '20 min',
    ingredients: 'Fugiat elit non laboris veniam irure.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },
  {
    title: 'Immunity',
    price: '$13',
    duration: '20 min',
    ingredients: 'Ad ad ullamco consequat officia laborum.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },

  {
    title: 'Inner Beauty',
    price: '$12',
    duration: '20 min',
    ingredients: 'Velit occaecat fugiat velit anim velit aute.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },
  {
    title: 'Alleviate',
    price: '$17',
    duration: '20 min',
    ingredients: 'Sint amet laborum esse exercitation sint.',
    description:
      'Alleviate your pain with this pain reliever. It will help you to feel better and reduce your pain levels.',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
  },
];

class AvailableServices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBackground back title={'Available Services'}>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <GradientText
            style={{
              fontWeight: 'bold',
            }}>
            What Service Do You Offer
          </GradientText>
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={[...dummyData, 'addNew']}
              contentContainerStyle={{
                paddingTop: 20,
                paddingHorizontal: 3,
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => <ServiceItems item={item} />}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default AvailableServices;

const ServiceItems = ({item}) => {
  if (item === 'addNew') {
    return (
      <TouchableOpacity
        onPress={() => NavService.navigate('AddService')}
        activeOpacity={0.8}
        style={{
          width: width / 2 - 28,
          height: 144,
          backgroundColor: Colors.white,
          marginBottom: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Colors.secondary,
          borderStyle: 'dashed',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Icons.plus}
          style={{width: 40, height: 40, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('ServiceDetails', {data: item})}
      style={{
        width: width / 2 - 28,
        backgroundColor: Colors.white,
        marginBottom: 10,
        borderRadius: 10,
        ...Shadows.shadow3,
      }}>
      <ImageBackground
        source={{uri: item?.image}}
        imageStyle={{
          height: 100,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          resizeMode: 'cover',
        }}
        style={{
          height: 100,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => NavService.navigate('EditService', {item})}
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            backgroundColor: Colors.white,
            margin: 10,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            ...Shadows.shadow3,
          }}>
          <Image
            source={Icons.edit}
            style={{width: 12, height: 12, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View
          style={{
            width: '60%',
            padding: 5,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: Colors.lightGrey,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.secondary,
              fontSize: 10,
              fontWeight: '600',
            }}>
            {item?.title}
          </Text>
        </View>
        <View
          style={{
            maxWidth: '32%',
            padding: 5,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: Colors.lightGrey,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.secondary,
              fontSize: 10,
              fontWeight: '600',
            }}>
            {item?.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
