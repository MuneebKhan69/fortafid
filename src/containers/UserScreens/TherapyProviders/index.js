import {Colors, NavService, Shadows} from '../../../config';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import TherapyProvider from '../../../components/TherapyProvider';

const providers = [
  {
    name: 'Caroline Lee',
    email: 'caroline@domain.com',
    image:
      'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.4,
    price: 40,
  },
  {
    name: 'Jimmy Johnson',
    email: 'jimmy@domain.com',
    image:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.8,
    price: 42,
  },
  {
    name: 'Blaire Grace',
    email: 'blaire@domain.com',
    image:
      'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.1,
    price: 45,
  },
  {
    name: 'Bree Mccullough',
    email: 'bree@domain.com',
    image:
      'https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 3.9,
    price: 60,
  },
  {
    name: 'Aliana Rhoades',
    email: 'aliana@domain.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.7,
    price: 50,
  },
];

export class TherapyProviders extends Component {
  state = {checkedId: 0, providers};
  render() {
    const {checkedId, providers} = this.state;
    return (
      <AppBackground title="Therapy Providers" back notification={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              const newData = providers.sort((a, b) => {
                return a.distance - b.distance;
              });
              this.setState({providers: newData});
            }}
            activeOpacity={0.8}
            style={{
              height: 50,
              padding: 10,
              borderRadius: 8,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadows.shadow3,
            }}>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 12,
                fontWeight: '300',
              }}>
              Sort by Distance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const newData = providers.sort((a, b) => {
                return a.rating - b.rating;
              });
              this.setState({providers: newData});
            }}
            activeOpacity={0.8}
            style={{
              height: 50,
              padding: 10,
              borderRadius: 8,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadows.shadow3,
            }}>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 12,
                fontWeight: '300',
              }}>
              Sort by Ratings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const newData = providers.sort((a, b) => {
                return a.price - b.price;
              });
              this.setState({providers: newData});
            }}
            activeOpacity={0.8}
            style={{
              height: 50,
              padding: 10,
              borderRadius: 8,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadows.shadow3,
            }}>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 12,
                fontWeight: '300',
              }}>
              Sort by Price
            </Text>
          </TouchableOpacity>
        </View>
        <GradientText
          style={{
            marginVertical: 20,
            marginBottom: 10,
            fontSize: 18,
            fontWeight: '600',
          }}>
          Therapy Providers
        </GradientText>
        <FlatList
          data={providers}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TherapyProvider
              onPress={() =>
                NavService.navigate('TherapistProfile', {data: item})
              }
              isChecked={index === checkedId}
              onCheckBokPress={() => this.setState({checkedId: index})}
              item={item}
              left={index % 2 == 0}
              last={index % 2 != 0}
            />
          )}
        />
        <CustomButton
          title={'Schedule an Appointment'}
          onPress={() => NavService.navigate('SummaryDetails')}
          buttonStyle={{marginBottom: 20}}
        />
      </AppBackground>
    );
  }
}

export default TherapyProviders;
