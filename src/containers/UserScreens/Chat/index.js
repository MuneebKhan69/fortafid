import {Colors, Devices, Shadows} from '../../../config';
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import GradientText from '../../../components/GradientText';
import ProfileImage from '../../../components/ProfileImage';
import moment from 'moment';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const messages = [
  {
    message: 'Deserunt elit ut adipisicing consequat enim id esse.',
    createdAt: '12:00 PM',
    isMine: true,
  },
  {
    message: 'Cillum magna fugiat ea velit ea culpa aliqua est.',
    createdAt: '12:00 PM',
    isMine: false,
  },
  {
    message: 'Enim cillum nulla sunt et.',
    createdAt: '12:00 PM',
    isMine: false,
  },
  {
    message: 'Eu aliqua velit enim dolore ad mollit ex exercitation.',
    createdAt: '12:00 PM',
    isMine: true,
  },
  {
    message:
      'Elit id ad exercitation do duis mollit officia eu aute nisi excepteur commodo eu eu.',
    createdAt: '12:00 PM',
    isMine: true,
  },
];

export default class Chat extends Component {
  state = {message: ''};
  render() {
    const data = this.props.route.params?.data;
    const {message} = this.state;
    return (
      <AppBackground
        title={data?.name}
        back
        nav="Messages"
        notification={false}
        callID="123"
        childrenContainerStyle={{
          marginHorizontal: 0,
          marginBottom: 0,
        }}>
        <FlatList
          data={[...messages, ...messages]}
          inverted
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginBottom: 10}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 3,
            marginHorizontal: 20,
          }}
          renderItem={({item}) => (
            <MessageList item={item} receiverData={data} />
          )}
        />
        <View
          style={{
            height: 70,
            width: width,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            ...Shadows.shadow5,
            paddingBottom: Devices.isIphoneX ? 15 : 0,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{flex: 1, height: '100%', color: Colors.black}}
            placeholder="Type your message here..."
            placeholderTextColor={Colors.grey}
            value={message}
            onChangeText={text => this.setState({message: text})}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              messages.unshift({
                message,
                createdAt: moment().format('h:mm a'),
                isMine: true,
              });
              this.setState({message: ''});
            }}>
            <GradientText
              style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
              Send
            </GradientText>
          </TouchableOpacity>
        </View>
      </AppBackground>
    );
  }
}

const MessageList = ({item, receiverData}) => {
  const {message, createdAt, isMine} = item;
  const myData = useSelector(state => state.reducer?.user);
  return (
    <View
      style={{flexDirection: isMine ? 'row-reverse' : 'row', marginBottom: 15}}>
      <ProfileImage
        size={50}
        imageUri={isMine ? myData?.image : receiverData?.image}
        name={isMine ? myData?.name : receiverData?.name}
        style={{
          borderWidth: 0,
          marginRight: isMine ? 0 : 10,
          marginLeft: isMine ? 10 : 0,
        }}
      />
      <View
        style={{
          backgroundColor: isMine ? Colors.primary : Colors.white,
          borderRadius: 20,
          borderTopLeftRadius: isMine ? 20 : 0,
          borderTopRightRadius: isMine ? 0 : 20,
          width: width - 160,
          padding: 10,
          ...Shadows.shadow3,
        }}>
        <Text style={{color: isMine ? Colors.white : Colors.black}}>
          {message}
        </Text>
        <Text
          style={{
            color: isMine ? Colors.white : Colors.darkGrey,
            fontSize: 12,
            marginTop: 5,
          }}>
          {createdAt}
        </Text>
      </View>
    </View>
  );
};
