import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const {width} = Dimensions.get('window');

const requests = [
  {
    therapistName: 'Jimmy Johnson',
    therapistImage:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'confirmed',
  },
  {
    therapistName: 'Aliana Rhoades',
    therapistImage:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    title: `Myer's Coktail`,
    image: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'requested',
  },
  {
    therapistName: 'Jimmy Johnson',
    therapistImage:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'confirmed',
  },
];

export class Calendar extends Component {
  state = {
    showDOB: false,
  };
  render() {
    const {showDOB} = this.state;
    return (
      <AppBackground title="Calendar" back>
        <DateTimePickerModal
          maximumDate={new Date()}
          themeVariant="light"
          isDarkModeEnabled={false}
          isVisible={showDOB}
          mode="date"
          onConfirm={date => {
            this.setState({
              showDOB: false,
              dob: moment(date).format('YYYY-MM-DD'),
            });
          }}
          onCancel={() => this.setState({showDOB: false})}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <GradientText
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            Appointments Requests
          </GradientText>
          <TouchableOpacity
            onPress={() => {
              this.setState({showDOB: true});
            }}>
            <Image
              source={Icons.calendarWithClock}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={requests}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 3}}
          renderItem={Request}
        />
      </AppBackground>
    );
  }
}

export default Calendar;

const Request = ({item}) => {
  const {image} = item;
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 10,
        ...Shadows.shadow3,
        width: '100%',
        marginBottom: 20,
      }}>
      <Image
        source={{uri: image}}
        style={{
          width: '100%',
          height: width / 2.2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 14,
              fontWeight: '600',
            }}>
            ${item?.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: Colors.darkGrey,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 5,
              maxWidth: '80%',
            }}>
            {moment(item?.scheduledAt).format('llll')} {item?.location}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Icons.clock}
              style={{marginLeft: 15, width: 15, height: 15}}
            />
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 14,
                fontWeight: '600',
                marginLeft: 5,
              }}>
              {item?.duration}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            NavService.navigate('ClientDetails', {data: item});
          }}
          style={{
            width: '40%',
            height: 45,
          }}>
          <LinearGradient
            colors={Colors.gradient}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <Text
              style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
              Accept
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          style={{
            width: '40%',
            height: 45,
          }}>
          <LinearGradient
            colors={Colors.gradient}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
              Decline
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
