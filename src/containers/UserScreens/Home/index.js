import {
  FlatList,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import {Colors} from '../../../config';
import GradientText from '../../../components/GradientText';

import Therapies from '../../../components/Therapies';
import {connect} from 'react-redux';

const LatestTherapy = [
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
];

export class Home extends Component {
  state = {
    selected: 'infusions',
    key: false,
  };
  render() {
    const {selected, key} = this.state;

    return (
      <AppBackground title={'Home'}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            disabled={selected === 'infusions'}
            style={{
              borderBottomColor: Colors.secondary,
              borderBottomWidth: selected === 'infusions' ? 1 : 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              LayoutAnimation.linear();
              this.setState({selected: 'infusions', key: !key});
            }}>
            {selected === 'infusions' ? (
              <GradientText
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Infusions
              </GradientText>
            ) : (
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Infusions
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selected === 'addons'}
            style={{
              borderBottomColor: Colors.secondary,
              borderBottomWidth: selected === 'addons' ? 1 : 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              LayoutAnimation.linear();
              this.setState({selected: 'addons', key: !key});
            }}>
            {selected === 'addons' ? (
              <GradientText
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Add-Ons
              </GradientText>
            ) : (
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Add-Ons
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selected === 'injections'}
            style={{
              borderBottomColor: Colors.secondary,
              borderBottomWidth: selected === 'injections' ? 1 : 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              LayoutAnimation.linear();
              this.setState({selected: 'injections', key: !key});
            }}>
            {selected === 'injections' ? (
              <GradientText
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Injections
              </GradientText>
            ) : (
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Injections
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          key={key}
          data={LatestTherapy.reverse()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Therapies
              title={item.title}
              image={item.image}
              icon={item.icon}
              left={index % 2 == 0}
              last={index % 2 != 0}
              price={item.price}
              duration={item.duration}
            />
          )}
        />
      </AppBackground>
    );
  }
}

export default Home;
