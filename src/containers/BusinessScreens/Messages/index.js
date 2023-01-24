import {Colors, NavService, Shadows} from '../../../config';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import Icons from '../../../assets/Icons';
import ProfileImage from '../../../components/ProfileImage';
import moment from 'moment';

const messages = [
  {
    name: 'Caroline Lee',
    image:
      'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    lastReceived: Date.now(),
  },
  {
    name: 'Jimmy Johnson',
    image:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',
    lastReceived: Date.now() - 1000 * 60,
  },
  {
    name: 'Blaire Grace',
    // image:
    //   'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    lastReceived: Date.now() - 1000 * 300,
  },
  {
    name: 'Bree Mccullough',
    image:
      'https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    lastReceived: Date.now() - 1000 * 3600,
  },
  {
    name: 'Aliana Rhoades',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    lastReceived: Date.now() - 1000 * 60 * 60 * 24,
  },
];

export default class Messages extends Component {
  render() {
    return (
      <AppBackground
        title="Messages"
        back
        notification={false}
        nav="HomeScreen">
        <FlatList
          data={[...messages]}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 15,
            paddingBottom: 20,
            paddingHorizontal: 3,
          }}
          renderItem={({item}) => <MessageList item={item} />}
        />
      </AppBackground>
    );
  }
}

const MessageList = ({item}) => {
  const {name, lastReceived, image} = item;
  console.log(lastReceived);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('Chat', {data: item})}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.white,
        ...Shadows.shadow3,
      }}>
      <ProfileImage
        size={60}
        imageUri={image}
        name={name}
        style={{
          borderWidth: 0,
        }}
      />

      <View style={{flex: 1, marginHorizontal: 15}}>
        <Text
          style={{fontSize: 16, fontWeight: '500', color: Colors.secondary}}>
          {name}
        </Text>
        <Text style={{fontWeight: '500', color: Colors.darkGrey, marginTop: 3}}>
          {moment(lastReceived).fromNow()}
        </Text>
      </View>
      <Image
        source={Icons.next}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};
