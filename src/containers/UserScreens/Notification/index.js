import {Colors, Shadows} from '../../../config';
import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';

const recentActivity = [
  {
    title: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'Jan 21, 2022',
    time: '10:00 AM',
  },
  {
    title: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'Jan 21, 2022',
    time: '10:00 AM',
  },
  {
    title: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'Jan 21, 2022',
    time: '10:00 AM',
  },
  {
    title: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'Jan 21, 2022',
    time: '10:00 AM',
  },
];

export class Home extends Component {
  render() {
    return (
      <AppBackground title={'Notification'} back notification={false}>
        <FlatList
          data={recentActivity}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Notification item={item} />}
        />
      </AppBackground>
    );
  }
}

export default Home;

const Notification = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        borderRadius: 5,
        padding: 15,
        ...Shadows.shadow3,
        marginBottom: 15,
        marginHorizontal: 3,
        marginTop: 3,
      }}>
      <Text
        style={{color: Colors.secondary, fontSize: 16, fontWeight: '600'}}
        numberOfLines={2}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Colors.grey, fontSize: 14}}>{item.date}</Text>
        <Text style={{color: Colors.grey, fontSize: 14}}>{item.time}</Text>
      </View>
    </View>
  );
};
